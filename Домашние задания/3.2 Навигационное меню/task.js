const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const subMenu = link.nextElementSibling;

        if (subMenu && subMenu.classList.contains('menu_sub')) {
            event.preventDefault();

            const activeMenus = link.closest('.menu').querySelectorAll('.menu_active');
            activeMenus.forEach((activeMenu) => {
                if (activeMenu !== subMenu) {
                    activeMenu.classList.remove('menu_active');
                }
            });

            subMenu.classList.toggle('menu_active');
        }
    });
});
