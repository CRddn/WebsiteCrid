document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Typing Effect
    const dynamicText = document.getElementById("dynamic-text");
    const words = ["a Web Developer", "a Marketer", "a Creative Thinker"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentWord = words[wordIndex];
        let displayText = currentWord.substring(0, letterIndex);
        dynamicText.textContent = displayText;

        if (!isDeleting && letterIndex < currentWord.length) {
            letterIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && letterIndex > 0) {
            letterIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 1500);
        }
    }
    typeEffect();

    // Mobile Menu Toggle
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    menuIcon.addEventListener("click", function () {
        menuIcon.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
            menuIcon.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
})