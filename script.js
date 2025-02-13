const navbar = document.querySelector('.navbar ul');
document.querySelector('.navbar .logo').addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// Function to toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.navbar ul');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    // Toggle menu visibility
    navLinks.classList.toggle('show');
    
    // Toggle hamburger icon animation
    hamburgerIcon.classList.toggle('open');
}

// Close menu when clicking a link (for mobile)
document.querySelectorAll('.navbar ul li a').forEach(item => {
    item.addEventListener('click', () => {
        const navLinks = document.querySelector('.navbar ul');
        const hamburgerIcon = document.querySelector('.hamburger-icon');

        // Close menu after link click
        navLinks.classList.remove('show');
        hamburgerIcon.classList.remove('open');
    });
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    
    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById("successMessage").style.display = "block";
            /*alert("Thank you! Your message has been sent.");*/
            form.reset();

            setTimeout(function() {
                document.getElementById("successMessage").style.display = "none";
            }, 3000);
        } else {
            alert("Oops! There was a problem submitting your message.");
        }
    }).catch(error => {
        alert("Error: " + error.message);
    });
});

// Function to check if element is in viewport
function revealSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) { 
            section.classList.add('show');
        }
    });
}

// Run function on scroll
window.addEventListener('scroll', revealSections);

// Initial check in case some sections are already in view
document.addEventListener('DOMContentLoaded', revealSections);
