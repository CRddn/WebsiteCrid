document.addEventListener("DOMContentLoaded", function () {
    // Check if the dynamic-text element exists before proceeding
    const dynamicText = document.getElementById("dynamic-text");

    // If the dynamicText element doesn't exist (i.e., not on About or Contact page)
    if (!dynamicText) {
        return; // Exit the function if the element is not found
    }

    // Dynamic Typing Effect
    const words = ["Web Developer", "IT Technician", "Marketing Manager"];
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
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();
});

    
        const menuIcon = document.getElementById("menu-icon");
        const navMenu = document.getElementById("nav-menu");
    
        if (menuIcon && navMenu) {  // Check if elements exist

        menuIcon.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuIcon.classList.toggle("active");
        });
    }

    function goHome() {
        window.location.href = "/";
    }

    /*SKILLS SECTION*/
    document.addEventListener("DOMContentLoaded", function() {
        const skillsSection = document.querySelector(".skills");
        const progressBars = document.querySelectorAll(".progress");

        const options = {
            root: null, // Observes viewport
            threshold: 0.5 // Triggers when 50% of section is visible
        };
    
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate progress bars when visible
                    progressBars.forEach(bar => {
                        bar.style.width = bar.getAttribute("data-width");
                    });
                } else {
                    // Reset bars when scrolling away
                    progressBars.forEach(bar => {
                        bar.style.width = "0%";
                    });
                }
            });
        }, options);
    
        observer.observe(skillsSection);
    });
    