
// Banner Carousel

const images = [
    {
        source: "./img/carousel/carousel_01.webp",
        img: "./img/carousel/carouselScreen_01.webp"
    },
    {
        source: "./img/carousel/carousel_02.webp",
        img: "./img/carousel/carouselScreen_02.webp"
    },
    {
        source: "./img/carousel/carousel_03.webp",
        img: "./img/carousel/carouselScreen_03.webp"
    }
];

const image = document.querySelector('.carouselItem img');
const source = document.querySelector('.carouselItem source');

let slide = 0;

const changeImg = () => {
    // Fade out before changing image
    image.style.opacity = 0;

    setTimeout(() => {
        // Change the image once fade-out is complete
        image.src = images[slide].img;
        source.srcset = images[slide].source;

        // Change image to the left infinite
        slide < images.length - 1 ? slide++ : slide = 0;

        // Fade back in after image change
        image.style.opacity = 1;

        // Set a timeout to change to the next image
        setTimeout(changeImg, 2000);
    }, 500); // Wait for half a second before changing the image
};

window.onload = changeImg;
