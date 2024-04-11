// Function to handle navigation button clicks
function handleNavigationClick(event) {
    // Prevent default behavior of the button
    event.preventDefault();

    // Get the target page from the button's data attribute
    const targetPage = event.target.dataset.page;

    // Redirect to the target page
    window.location.href = targetPage;
}

// Add event listeners to navigation buttons
document.addEventListener('DOMContentLoaded', function () {
    const navButtons = document.querySelectorAll('.nav-btn');

    // Loop through each navigation button and attach the click event listener
    navButtons.forEach(button => {
        button.addEventListener('click', handleNavigationClick);
    });
});
