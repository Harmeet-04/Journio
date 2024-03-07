document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            if (i === index) {
                slides[i].style.transform = "translateX(0)";
            } else {
                slides[i].style.transform = "translateX(100%)";
            }
        }
    }

    function nextSlide() {
        console.log("Current Slide:", currentSlide);
        showSlide(currentSlide);
        currentSlide = (currentSlide + 1) % slides.length;
        console.log("Next Slide:", currentSlide);
        if (currentSlide === 2) {
            console.log("Resetting current slide to 0");
            currentSlide = 0; // Reset current slide index to 0
        }
    }

    setInterval(nextSlide, 3000); // Change slide every 2 seconds
});
