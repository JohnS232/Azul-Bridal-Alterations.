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
menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#Home');
    const aboutMenu = document.querySelector('#About');
    const servicesMenu = document.querySelector('#Services');
    const contactMenu = document.querySelector('#Contact');
    const galleryMenu = document.querySelector('#Gallery'); 
    let scrollPos = window.scrollY;

    if (window.innerWidth > 960) {
        if (scrollPos < 600) {
            homeMenu.classList.add('highlight');
            aboutMenu.classList.remove('highlight');
            servicesMenu.classList.remove('highlight');
            galleryMenu.classList.remove('highlight');
            contactMenu.classList.remove('highlight');
        } else if (scrollPos >= 600 && scrollPos < 1400) {
            aboutMenu.classList.add('highlight');
            homeMenu.classList.remove('highlight');
            servicesMenu.classList.remove('highlight');
            galleryMenu.classList.remove('highlight');
            contactMenu.classList.remove('highlight');
        } else if (scrollPos >= 1400 && scrollPos < 2345) {
            servicesMenu.classList.add('highlight');
            aboutMenu.classList.remove('highlight');
            galleryMenu.classList.remove('highlight');
            contactMenu.classList.remove('highlight');
        } else if (scrollPos >= 2345 && scrollPos < 3000) { 
            galleryMenu.classList.add('highlight');
            servicesMenu.classList.remove('highlight');
            contactMenu.classList.remove('highlight');
        } else if (scrollPos >= 3000) { 
            contactMenu.classList.add('highlight');
            galleryMenu.classList.remove('highlight');
            servicesMenu.classList.remove('highlight');
        }
    }

    if (elem && (window.innerWidth < 960 || scrollPos < 600)) {
        elem.classList.remove('highlight');
    }
};

// Add event listeners for scroll and click to trigger highlightMenu
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking on a link
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

// Add event listeners to hide mobile menu on link click or logo click
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

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