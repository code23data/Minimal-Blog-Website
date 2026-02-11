// Helper to display and clear error messages.

function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-msg')) {
        errorSpan.textContent = message;
    }
    input.classList.add('input-error');
}

function clearError(input) {
    const errorSpan = input.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-msg')) {
        errorSpan.textContent = "";
    }
    input.classList.remove('input-error');
}

// CORE LOGIC

const commentForms = document.querySelectorAll('.comment-form');

// Load comments on page start
window.addEventListener('DOMContentLoaded', () => {
    commentForms.forEach(form => {
        const postId = form.getAttribute('data-post-id');
        displayStoredComments(postId);
    });
});

// Handle form submission
commentForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isFormValid = true;
        const inputs = this.querySelectorAll('[required]');

        inputs.forEach(input => {
            clearError(input);
            if (input.value.trim() === "") {
                showError(input, "Required field");
                isFormValid = false;
            }
        });

        if (isFormValid) {
            const postId = this.getAttribute('data-post-id');
            const name = this.querySelector('input').value;
            const message = this.querySelector('textarea').value;

            saveComment(postId, name, message);
            displayStoredComments(postId);

            this.reset();
        }
    });
});


// STORAGE FUNCTIONS

function saveComment(postId, name, message) {
    // Get existing comments or empty array
    const comments = JSON.parse(localStorage.getItem(`comments-post-${postId}`)) || [];

    // Add new comment object
    comments.push({ name, message, date: new Date().toLocaleString() });

    // Save back to LocalStorage
    localStorage.setItem(`comments-post-${postId}`, JSON.stringify(comments));
}

function displayStoredComments(postId) {
    const displayArea = document.getElementById(`comments-${postId}`);
    const comments = JSON.parse(localStorage.getItem(`comments-post-${postId}`)) || [];

    // Clear current display and re-render
    displayArea.innerHTML = '';

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment-item';
        commentDiv.innerHTML = `
        <p><strong>${comment.name}</strong> <small>(${comment.date})</small> says:</p>
        <p>${comment.message}</p>
        <hr>
        `;
        displayArea.appendChild(commentDiv);
    });
}
