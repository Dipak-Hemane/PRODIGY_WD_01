// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Change active state of navigation items based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // Offset by 50px to adjust for fixed header
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    // Remove active class from all menu items
    document.querySelectorAll('#main-nav ul li').forEach(li => {
        li.classList.remove('active');
    });

    // Add active class to the current menu item
    document.querySelector(`#main-nav ul li a[href="#${currentSectionId}"]`).parentNode.classList.add('active');
});

// Change navigation menu style on scroll
window.addEventListener('scroll', function() {
    const nav = document.getElementById("main-nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
