
let noclick = document.querySelectorAll('.no-click');
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (noclick.length>0) {
    noclick.forEach(function(item, index){
        item.addEventListener('click', function(e){
            e.preventDefault();

            if (viewportWidth < 1025) {
                //.menu li:hover > .submenu
                //let submenu = document.querySelectorAll('.menu li > .submenu');
                item.nextElementSibling.classList.toggle('menu-open');
            }
        });
    });
}

