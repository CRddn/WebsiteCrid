document.addEventListener("DOMContentLoaded", function () {
        // Check if the dynamic-text element exists before proceeding
        const dynamicText = document.getElementById("dynamic-text");
    
        // If the dynamicText element doesn't exist (i.e., not on About or Contact page)
        if (!dynamicText) {
            return; // Exit the function if the element is not found
        }
    
        // Dynamic Typing Effect
        const words = ["a Web Developer", "an IT Technician", "a Marketing Manager"];
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
    });
    

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
