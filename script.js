function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    // Toggle the 'open' class to show/hide the menu
    menu.classList.toggle("open");
    // Toggle the 'open' class for the hamburger icon animation
    icon.classList.toggle("open");

    // Optional: Close the menu if clicked outside (improves usability)
    document.addEventListener('click', function(event) {
        if (!icon.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove("open");
            icon.classList.remove("open");
        }
    }, { once: true }); // Ensures the listener runs only once per toggle
}
