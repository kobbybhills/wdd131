document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu functionality
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
    });

    // Update footer dynamically
    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;
    document.getElementById("last-modified").textContent = `Last Modified: ${document.lastModified}`;
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});
