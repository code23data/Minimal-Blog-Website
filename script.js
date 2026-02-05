const commentForms = document.querySelectorAll('.comment-form');

commentForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page refresh (default behavior)

        // Get the specific ID for this post's comment box
        const postId = this.getAttribute('data-post-id');
        const displayArea = document.getElementById(`comments-${postId}`);

        // Get input values
        const name = this.querySelector('input').value;
        const message = this.querySelector('textarea').value;

        // Create comment element
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment-item';
        commentDiv.innerHTML = `
        <p><strong>${name}</strong> says:</p>
        <p>${message}</p>
        <hr>
        `;

        // Append to display area
        displayArea.appendChild(commentDiv);

        // Clear the form
        this.reset();
    });
});
