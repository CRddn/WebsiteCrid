// Function to load external HTML files
function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load header and footer
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header-container", "/components/header.html");
    loadComponent("footer-container", "/components/footer.html");
});
