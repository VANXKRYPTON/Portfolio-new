// Menu Toggle for Mobile View
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x"); // Change icon to 'x' when menu is open
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for header height
            behavior: "smooth",
        });
        navbar.classList.remove("active"); // Close menu on click (for mobile)
        menuIcon.classList.remove("bx-x");
    });
});

// Typed.js Initialization for Dynamic Profile Text
new Typed(".multiple-text", {
    strings: [
        "Frontend Developer",
        "Backend Developer",
        "GEN AI Prompt Engineer",
        "Gamer",
        "Database Developer",
        "YouTuber",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
});

// Animate Skill Bars When in Viewport
const skillBars = document.querySelectorAll(".progress-bar");

const animateSkills = () => {
    skillBars.forEach((bar) => {
        const progress = bar.querySelector(".progress");
        const width = progress.getAttribute("style").match(/\d+/)[0];
        progress.style.width = "0"; // Set initial width to 0
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            progress.style.width = `${width}%`; // Animate to target width
        }
    });
};

window.addEventListener("scroll", animateSkills);

// Scroll Reveal Animation
const revealElements = document.querySelectorAll("section, .services-box, .testimonial-item");

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

// Trigger animations on page load
animateSkills();
revealOnScroll();