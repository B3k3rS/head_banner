const burgerMenuButton = document.querySelector('li.menu_button')
const headerNavMenu = document.querySelectorAll('.header_nav > ul > li')

burgerMenuButton.addEventListener('click',()=> {
    headerNavMenu.forEach((link,id)=> {
        if(id == 0) return 0;

        if (link.style.display != "inline-block") {
            link.style.display = "inline-block";
        }
        else {
            link.style.display = "none";
        }
        
    })
})