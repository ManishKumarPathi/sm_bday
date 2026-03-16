let currentSlide = 1;
const totalSlides = 10;

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
    updateSlideCounter();
});

// Change slide function
function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    } else if (currentSlide < 1) {
        currentSlide = totalSlides;
    }
    
    showSlide(currentSlide);
    updateSlideCounter();
}

// Go to specific slide
function goToSlide(slideNumber) {
    currentSlide = slideNumber;
    showSlide(currentSlide);
    updateSlideCounter();
}

// Show slide function
function showSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all indicators
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Show current slide
    if (slides[slideNumber - 1]) {
        slides[slideNumber - 1].classList.add('active');
    }
    
    // Highlight current indicator
    if (indicators[slideNumber - 1]) {
        indicators[slideNumber - 1].classList.add('active');
    }
}

// Update slide counter
function updateSlideCounter() {
    const currentSlideElement = document.querySelector('.current-slide');
    if (currentSlideElement) {
        currentSlideElement.textContent = currentSlide;
    }
}

// Scroll to gallery function
function scrollToGallery() {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        gallery.scrollIntoView({ behavior: 'smooth' });
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

const slideshowContainer = document.querySelector('.slideshow-container');

if (slideshowContainer) {
    slideshowContainer.addEventListener('touchstart', function(event) {
        touchStartX = event.changedTouches[0].screenX;
    });
    
    slideshowContainer.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeSlide(1);
        } else {
            // Swipe right - previous slide
            changeSlide(-1);
        }
    }
}

// Optional: Auto-play functionality (commented out by default)
/*
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Start autoplay when page loads
startAutoPlay();

// Stop autoplay when user interacts
slideshowContainer.addEventListener('mouseenter', stopAutoPlay);
slideshowContainer.addEventListener('mouseleave', startAutoPlay);
*/
