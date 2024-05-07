// bestSeller Carousel

/*
const arrows = document.querySelectorAll('.bestSellers .arrow');
const items = document.querySelectorAll(".bestSellers .items");

items.forEach(item => {
  const itemWidth = item.querySelector('.item').offsetWidth;
  const scrollWith = item.scrollWidth - item.clientWidth;

  const showHideIcon = () => {
    arrows[0].style.display = item.scrollLeft === 0 ? "none" : "block";
    arrows[1].style.display = item.scrollLeft === scrollWith ? "none" : "block";

    arrows[2].style.display = item.scrollLeft === 0 ? "none" : "block";
    arrows[3].style.display = item.scrollLeft === scrollWith ? "none" : "block";
  }
  
  arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
          item.scrollLeft += arrow.id === "left" ? -itemWidth : itemWidth;
  
          setTimeout(showHideIcon, 60);
  
      })
  })
})
*/




// infinite 

const arrows = document.querySelectorAll('.bestSellers .arrow');
const items = document.querySelectorAll('.bestSellers .items');

items.forEach(item => {
  const itemWidth = item.querySelector('.item').offsetWidth;
  const ScrollWidth = item.scrollWidth - item.clientWidth;

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (arrow.id === 'left') {
        if (item.scrollLeft === 0) {
          item.scrollLeft = ScrollWidth;
        } else {
          item.scrollLeft -= itemWidth;
        }
      } else {
        if (item.scrollLeft >= ScrollWidth) {
          item.scrollLeft = 0;
        } else {
          item.scrollLeft += itemWidth;
        }
      }
    });
  });
});






