document.addEventListener('DOMContentLoaded', () => {
    console.log('SeaGro JavaScript Loaded!');

    // Toggle dark mode functionality
    const darkModeToggle = document.getElementById('toggle-dark-mode');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});
