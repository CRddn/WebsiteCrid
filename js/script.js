document.addEventListener("DOMContentLoaded", function () {
    // 1. Typing effect
    const dynamicText = document.getElementById("dynamic-text");
    if (dynamicText) {
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
    }

    // 2. Skills progress bars
    const skillsSection = document.querySelector(".skills");
    const progressBars = document.querySelectorAll(".progress");

    if (skillsSection && progressBars.length > 0) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBars.forEach(bar => {
                        bar.style.width = bar.getAttribute("data-width");
                    });
                } else {
                    progressBars.forEach(bar => {
                        bar.style.width = "0%";
                    });
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillsSection);
    }

    // 3. Parallax scroll effect
    const parallaxSections = document.querySelectorAll(".parallax");
    if (parallaxSections.length > 0) {
        window.addEventListener("scroll", () => {
            const scrollTop = window.pageYOffset;
            parallaxSections.forEach(section => {
                const offset = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollTop + window.innerHeight > offset && scrollTop < offset + height) {
                    const yPos = (scrollTop - offset) * 0.4;
                    section.style.backgroundPosition = `center ${yPos}px`;
                }
            });
        });
    }
});

//menu
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });
}

function goHome() {
    window.location.href = "/";
}
