// Dynamic typing effect
    document.addEventListener('DOMContentLoaded', function () {
        const titles = ["Junior IT Technician", "Web Developer", "Marketing Manager"];
        let currentTitleIndex = 0;
        let currentCharIndex = 0;
        const typingSpeed = 150;
        const element = document.getElementById("dynamic-text");

        function typeTitle() {
            const currentTitle = titles[currentTitleIndex];
            if (currentCharIndex < currentTitle.length) {
                element.textContent += currentTitle[currentCharIndex];
                currentCharIndex++;
                setTimeout(typeTitle, typingSpeed);
            } else {
                setTimeout(deleteTitle, typingSpeed * 3);
            }
        }

        function deleteTitle() {
            if (currentCharIndex > 0) {
                element.textContent = element.textContent.slice(0, -1);
                currentCharIndex--;
                setTimeout(deleteTitle, typingSpeed / 2);
            } else {
                currentTitleIndex = (currentTitleIndex + 1) % titles.length;
                setTimeout(typeTitle, typingSpeed);
            }
        }

        typeTitle();
    });

// Get the menu icon and nav menu elements
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

// Add event listener for menu toggle
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
});



