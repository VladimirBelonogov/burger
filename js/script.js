const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()){
    document.body.classList.add('touch');
    let menuArrows = document.querySelectorAll('.menu__arrow');	

    if (menuArrows.length > 0) {
        menuArrows.forEach(menuArrow => {
            menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('open');
			});
        });
	}
} else {
    document.body.classList.add('desktop');
}

const scrollItems = document.querySelectorAll('.menu__link[data-scroll]');

if(scrollItems.length > 0){
    scrollItems.forEach(scrollitem => {
        scrollitem.addEventListener('click', scrollToMenuClick)
        })

    function scrollToMenuClick (e) {
        const scrollItem = e.target;
        if (scrollItem.dataset.scroll && document.querySelector(scrollItem.dataset.scroll)){
            const scrollBlock = document.querySelector(scrollItem.dataset.scroll);
            const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('close')) {
				document.body.classList.remove('lock');
				iconMenu.classList.remove('close');
				menuBody.classList.remove('open');
			}

            window.scrollTo({
                top: scrollBlockValue,
                behavior: "smooth"
            });
        }

        e.preventDefault();
    }
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('close');
		menuBody.classList.toggle('open');
	});
}