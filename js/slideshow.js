
// Slideshow specific code
function initDesktopSlideshow() {
    const slides = document.querySelectorAll('.desktop-slideshow .slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 5000; // Change every 5 seconds

    setInterval(() => {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');

        // Calculate next slide index
        currentSlide = (currentSlide + 1) % slides.length;

        // Add active class to next slide
        slides[currentSlide].classList.add('active');
    }, slideInterval);
}

// Call initDesktopSlideshow when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDesktopSlideshow);
} else {
    initDesktopSlideshow();
}
