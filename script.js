const tabsArray = Array.from(document.querySelectorAll(".tab"))
const contentArray = Array.from(document.querySelectorAll('.content'))


tabsArray.forEach(tab => {
    tab.addEventListener("click", () => {
        target = tab
        tabsArray.forEach(t => {
            t.classList.remove("font-semibold")
            t.classList.remove("border-b-4")
            t.classList.remove("border-red-500")
        })

        const currentTab = tabsArray.indexOf(target)
    
        contentArray.forEach(content =>{
            if(contentArray.indexOf(content) === currentTab){
                content.classList.remove("hidden")
            } else if (contentArray.indexOf(content) !== currentTab){
                content.classList.add("hidden")
            }
        })

        target.classList.add("font-semibold")
        target.classList.add("border-b-4")
        target.classList.add("border-red-500")
    })
})


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

