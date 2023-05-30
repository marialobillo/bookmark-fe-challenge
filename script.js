const tabsArray = Array.from(document.querySelectorAll(".tab"));
const contentArray = Array.from(document.querySelectorAll(".content"));

const faqs = document.querySelectorAll(".faq");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");

const btn = document.getElementById("hamburger-btn");
const menu = document.getElementById("mobile-menu");
const logo = document.getElementById("logo-img");

const btn_contact = document.getElementById("contact-button");
const input_email = document.getElementById("email");
const check_icon = document.getElementById("check-icon");

// Contact form
btn_contact.addEventListener("click", (event) => {
    event.preventDefault();
    if (!input_email.value || !isValidEmail(input_email.value)) {
        input_email.classList.add("border-redish");
        check_icon.classList.remove("hidden");
    } else {
        input_email.classList.remove("border-redish");
        check_icon.classList.add("hidden");
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// tabs on features section
tabsArray.forEach((tab) => {
    tab.addEventListener("click", () => {
        target = tab;
        tabsArray.forEach((tab) => {
            tab.classList.remove("border-b-4");
            tab.classList.remove("border-redish");
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
        target.classList.add("border-redish");
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
            arrow.classList.remove("text-redish");
        });
        faq.classList.toggle("active");
        if(!answers[index].classList.contains("max-h-300")) {
          answers[index].classList.add("max-h-300");
          answers[index].classList.remove("max-h-0");
        } else {
          answers[index].classList.remove("max-h-300");
          answers[index].classList.add("max-h-0");
        }
        arrows[index].classList.toggle("rotate-180");
        arrows[index].classList.add("text-redish");
        
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
        btn.innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='15'>
                <path
                    fill="#FFF"
                    fill-rule="evenodd"
                    d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
                />
            </svg>`;
        
        btn.style.color = "white";
    } else {
        // mobile menu is closed
        logo.setAttribute("src", "./images/logo-bookmark.svg");
    }
});
