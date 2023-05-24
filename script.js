const tabsArray = Array.from(document.querySelectorAll(".tab"));
const contentArray = Array.from(document.querySelectorAll(".content"));

const faqs = document.querySelectorAll(".faq");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");
console.log(arrows)

const btn = document.getElementById("hamburger-btn");
const menu = document.getElementById("mobile-menu");
const logo = document.getElementById("logo-img");

// tabs on features section
tabsArray.forEach((tab) => {
  tab.addEventListener("click", () => {
    target = tab;
    tabsArray.forEach((tab) => {
      tab.classList.remove("border-b-4");
      tab.classList.remove("border-red-500");
    });

    const currentTab = tabsArray.indexOf(target);
    contentArray.forEach((content) => {
      if (contentArray.indexOf(content) === currentTab) {
        content.classList.remove("hidden");
      } else if (contentArray.indexOf(content) !== currentTab) {
        content.classList.add("hidden");
      }
    });

    target.classList.add("border-b-4");
    target.classList.add("border-red-500");
  });
});

// Faq menu accordion
faqs.forEach((faq, index) => {
  faq.addEventListener("click", () => {
    // close all answers
    answers.forEach((answer) => {
      answer.classList.add("max-h-0");
    });
    // close all arrows
    arrows.forEach((arrow) => { 
      arrow.classList.remove("rotate-180");
      arrow.classList.add("rotate-0");
      arrow.classList.remove("text-red-500");
    });
    faq.classList.toggle("active");
    answers[index].classList.remove("max-h-0");
    answers[index].classList.add("max-h-300");
    arrows[index].classList.toggle("rotate-180");
    arrows[index].classList.toggle("text-red-500");
  });
});

// Mobile menu
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");

  if (menu.classList.contains("flex")) {
    // mobile menu is open
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
    btn.innerHTML = 'X';
    btn.style.color = 'white';
  } else {
    // mobile menu is closed
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
});
