

/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("last-modified").textContent = new Date(document.lastModified).toLocaleString();
});
