// Select DOM elements for the mobile menu and logo
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#logo');

// Function to display the mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

// Add event listener to toggle the mobile menu on click
if (menu) {
    menu.addEventListener('click', mobileMenu);
}

// Show active menu when scrolling
const highlightMenu = () => {
    const scrollPos = window.scrollY;

    // Sections to highlight
    const sections = {
        homeMenu: document.querySelector('#Home'),
        aboutMenu: document.querySelector('#About'),
        servicesMenu: document.querySelector('#Services'),
        contactMenu: document.querySelector('#Contact'),
        galleryMenu: document.querySelector('#Gallery'),
    };

    // Check window width for desktop navigation
    if (window.innerWidth > 960) {
        if (scrollPos < 600) {
            activateMenu(sections.homeMenu, sections.aboutMenu, sections.servicesMenu, sections.galleryMenu, sections.contactMenu);
        } else if (scrollPos >= 600 && scrollPos < 1400) {
            activateMenu(sections.aboutMenu, sections.homeMenu, sections.servicesMenu, sections.galleryMenu, sections.contactMenu);
        } else if (scrollPos >= 1400 && scrollPos < 2345) {
            activateMenu(sections.servicesMenu, sections.aboutMenu, sections.homeMenu, sections.galleryMenu, sections.contactMenu);
        } else if (scrollPos >= 2345 && scrollPos < 3000) {
            activateMenu(sections.galleryMenu, sections.servicesMenu, sections.aboutMenu, sections.contactMenu);
        } else {
            activateMenu(sections.contactMenu, sections.galleryMenu, sections.servicesMenu, sections.aboutMenu);
        }
    }

    // For small screens (below 960px), remove highlight
    const elem = document.querySelector('.highlight');
    if (elem && window.innerWidth < 960) {
        elem.classList.remove('highlight');
    }
};

// Function to activate a menu item
const activateMenu = (active, ...inactive) => {
    active.classList.add('highlight');
    inactive.forEach(item => item.classList.remove('highlight'));
};

// Add event listeners for scroll to trigger highlightMenu
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Handle link click to toggle 'active' class
const links = document.querySelectorAll('.navbar__links');

if (links.length) {
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            links.forEach(link => {
                link.classList.remove('active');
            });
            e.preventDefault();
            link.classList.add('active');
        });
    });
}

// Close mobile menu when clicking on a link or logo (in mobile view)
const hideMobileMenu = () => {
    if (window.innerWidth <= 768) {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
};

// Add event listeners to close the mobile menu on link or logo click
if (menuLinks) {
    menuLinks.addEventListener('click', hideMobileMenu);
}

if (navLogo) {
    navLogo.addEventListener('click', hideMobileMenu);
}



// EmailJS form submission integration
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    
    emailjs.sendForm('service_ud7g4vt', 'template_qw69fcc', this)
        .then(function() {
            alert('SUCCESS! Your appointment request has been sent.');
        }, function(error) {
            alert('FAILED... Please try again.' + JSON.stringify(error));
        });
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }  

  slides[slideIndex - 1].style.display = "block";  

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 6000); // Change photo every **3 seconds**
}
