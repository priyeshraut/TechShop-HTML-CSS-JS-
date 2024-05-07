// showHeader and ShowHide moveToTop link
let lastScrollY = window.scrollY;
const header = document.querySelector('header');
const firstPage = document.querySelector('main > *');
const topLink = document.querySelector('.moveToTop')


const headerHeight = header.getBoundingClientRect().height;


window.addEventListener('scroll', () => {
  const scrollHeight = window.scrollY;
  const firstPagelHeight = firstPage.getBoundingClientRect().height;
  
  
  if (lastScrollY < window.scrollY  ) {
    header.style.top = -headerHeight+"px";
  } else {
    header.style.top = "0"
  }
  lastScrollY = window.scrollY;


  if (scrollHeight > firstPagelHeight) {
    topLink.classList.remove("show-link");
  } else {
    topLink.classList.add("show-link");
  }
})



// hamburger

const hamburger = document.querySelector("#hamburger");
const hamClose = document.querySelector("#hamClose");
const aside = document.querySelector(".hamburgerMobileView");

const showAside = () => {
  aside.classList.add("showAside");
};

const closeAside = () => {
  aside.classList.remove("showAside");
};

hamburger.addEventListener("click", showAside);
hamClose.addEventListener("click", closeAside);



// Updating footer year

const footerYear = document.querySelector("footer .year");

const Day = new Date();
const Year = Day.getFullYear();

footerYear.innerHTML = Year;
