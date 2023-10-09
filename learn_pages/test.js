// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Initial content (e.g., the homepage)
    loadContent("blogs.html");

    // Add click event listeners to your links
    document.getElementById("link1").addEventListener("click", function() {
        loadContent("page1.html");
    });

    document.getElementById("link2").addEventListener("click", function() {
        loadContent("page2.html");
    });

    // Add more listeners for additional links as needed
});

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            // Replace the content of the #content div with the loaded data
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading content:", error);
        });
}