const tabsArray = Array.from(document.querySelectorAll(".tab"))
const contentArray = Array.from(document.querySelectorAll('.content'))

const faqs = document.querySelectorAll('.faq');

const btn = document.getElementById('hamburger-btn');
const menu = document.getElementById('mobile-menu');
const logo = document.getElementById('logo-img');


// tabs on features section
tabsArray.forEach(tab => {
    tab.addEventListener("click", () => {
        target = tab
        tabsArray.forEach(tab => {
            tab.classList.remove("border-b-4")
            tab.classList.remove("border-red-500")
        })

        const currentTab = tabsArray.indexOf(target)
        contentArray.forEach(content =>{
            if(contentArray.indexOf(content) === currentTab){
                content.classList.remove("hidden")
            } else if (contentArray.indexOf(content) !== currentTab){
                content.classList.add("hidden")
            }
        })

        target.classList.add("border-b-4")
        target.classList.add("border-red-500")
    })
})


// Faq menu accordion
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});


// Mobile menu
btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')

    if (menu.classList.contains('flex')) {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg')
    } else {
        logo.setAttribute('src', './images/logo-bookmark.svg')
    }
})


