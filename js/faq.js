
// Help Center Show Hide FAQ

const faqs = document.querySelectorAll(".helpSection .faq");

faqs.forEach(function (faq) {
  const btn = faq.querySelector(".faqArrow");

  const showHideFaq = () => {
    faqs.forEach(function (item) {
      if (item !== faq) {
        item.classList.remove("showfaq");
      }
    });

    faq.classList.toggle("showfaq");
  };

  btn.addEventListener("click", showHideFaq);
});