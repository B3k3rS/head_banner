let slider = document.querySelector(".head_banner")
let slides = ["./images/slideshow_1.png","./images/slideshow_2.png"]
let slideIndex = 0


const sliderInterval = setInterval(() => {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slider.style.backgroundImage = `url(${slides[slideIndex]})`
},10000)
