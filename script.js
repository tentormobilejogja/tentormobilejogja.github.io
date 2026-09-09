let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function moveSlide(step) {
    if (slides.length === 0) return;
    currentSlide += step;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
}

// Inisialisasi Auto Slide jika ada slider di halaman
if (slides.length > 0) {
    setInterval(() => {
        moveSlide(1);
    }, 5000);
}