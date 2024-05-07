// itemSection show hide faq 

const itemFaqs = document.querySelectorAll('.itemDescSection .faq');

itemFaqs.forEach(function (itemFaq) {
    const btn = itemFaq.querySelector(".icons");
  
    const showHideFaq = () => {
        itemFaqs.forEach(function (item) {
        if (item !== itemFaq) {
          item.classList.remove("showfaq");
        }
      });
  
      itemFaq.classList.toggle("showfaq");
    };
  
    btn.addEventListener("click", showHideFaq);
  });