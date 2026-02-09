# Minimal Blog Website

This is a clean, responsive, single-page blog template built with standard web technologies. It allows users to browse articles and interact through a local comment system.

---

## Features

* **Responsive Design:** Optimized for both desktop and mobile viewing.
* **Sticky Navigation:** A top navigation bar that stays visible while scrolling.
* **Interactive Comments:** Users can submit comments on specific posts without the page reloading.
* **Modern UI:** Uses a card-based layout with clean typography and hover effects.

---

## Built With

* **HTML5:** Semantic structure for blog posts and navigation.
* **CSS3:** Custom styling featuring Flexbox, sticky positioning, and media queries.
* **JavaScript (Vanilla):** DOM manipulation to handle form submissions and dynamic comment rendering.

---

## Project Structure

* `index.html` - The main structure of the blog and the content for three posts.
* `style.css` - Visual styling, including the color palette and mobile responsiveness.
* `script.js` - Logic for capturing and displaying user comments.

---

## How to Use

1. **Clone or Download** the repository files to your local machine.
2. Ensure all three files (`index.html`, `style.css`, `script.js`) are in the same folder.
3. Open `index.html` in any modern web browser.
4. **To Comment:** Scroll to the bottom of any post, fill in your name and message, and click "Post Comment."

---

> **Note:** Comments are currently handled on the client side only. Refreshing the page will reset the comment sections as there is no database or persistent storage attached.

---

## Future Improvements

To take this project to the next level, the following features could be implemented:

* **Persistent Storage:** Integrate `localStorage` or a backend database (like Firebase or Node.js) so that comments remain on the page after a refresh.
* **Post Search & Filtering:** Add a search bar to help users find specific topics or keywords across different blog articles.
* **Dark Mode Toggle:** Implement a theme switcher to allow users to toggle between light and dark viewing modes.
* **Image Lightbox:** Add a script to allow users to click on blog images to view them in full-screen mode.
* **Social Sharing:** Include buttons for users to easily share specific posts to platforms like X (Twitter), LinkedIn, or Facebook.
* **Timestamp Formatting:** Use a library like *Luxon* or *Day.js* to show relative time (e.g., "Posted 5 minutes ago") for new comments.
