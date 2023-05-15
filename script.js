const tabsArray = Array.from(document.querySelectorAll(".tab"))
const contentArray = Array.from(document.querySelectorAll('.content'))

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
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

