// itemPageCarousel


const arrows = document.querySelectorAll('.bestSellers .arrow');
const items = document.querySelector('.bestSellers .items');


  const itemWidth = items.querySelector('.item').offsetWidth;
  const ScrollWidth = items.scrollWidth - items.clientWidth;

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (arrow.id === 'left') {
        if (items.scrollLeft === 0) {
          items.scrollLeft = ScrollWidth;
        } else {
          items.scrollLeft -= itemWidth;
        }
      } else {
        if (items.scrollLeft >= ScrollWidth) {
          items.scrollLeft = 0;
        } else {
          items.scrollLeft += itemWidth;
        }
      }
    });
  });
