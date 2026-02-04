

// === Slide/Carousel Section JS Code html Code index.html below Nav ===


let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

function showSlide(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

function plusSlides(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlide(slideIndex);
}

// Auto slide
function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
    setTimeout(autoSlide, 3000);
}

// Initialize
showSlide(slideIndex);
autoSlide();

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
        
//         dots[i].className = dots[i].className.replace(" active", "");
        
//     }
//     slides[slideIndex - 1].style.display = "block";
//     // dots[i].style.backgroundColor= "red";
//     dots[slideIndex - 1].className += " active";
// }

// //Auto Slide   if you need auto slide ,remove the commit "//"

// var slideIndexx = 0;
// showSlidess();

// function showSlidess() {
//     var i;
//    var slides = document.getElementsByClassName("mySlides");
//    var dots = document.getElementsByClassName("dot");
//    //console.log(slides);
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    for (i = 0; i < dots.length; i++) {
        
//         dots[i].className = dots[i].className.replace(" active", "");
        
//     }
//    slideIndexx++;
//    if (slideIndexx > slides.length) { slideIndexx = 1 }
//    slides[slideIndexx - 1].style.display = "block";
//    dots[slideIndexx - 1].className += " active";
//    setTimeout(showSlidess, 3000); // Change image every 2.5 seconds
// }
