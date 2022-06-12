// const swiper = new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable : true,
  
//     }
// });

document.addEventListener('DOMContentLoaded', function() {




    document.querySelectorAll('.work-nav__btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (e) {
            const path = e.currentTarget.dataset.path;
            document.querySelectorAll('.work-nav__btn').forEach(function (btn) {
                btn.classList.remove('work-nav__btn--active')
            });
            e.currentTarget.classList.add('work-nav__btn--active');
            document.querySelectorAll('.work__content').forEach(function (tabsBtn) {
                tabsBtn.classList.remove('work__content--active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('work__content--active');
        });
    });



});

// $( function() {
//     $( "#accordion" ).accordion({
//       collapsible: true,
//       heightStyle: 'content'
//     });
//   } );
var details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
	details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
	var details = event.target.parentNode.children;
	for(i=0;i<details.length;i++) {
		if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
		details[i].removeAttribute("open");
	}
}




//burger

const burgerBtn = document.querySelector('.header__burger');

const menuClose = document.querySelector('.menu-close');

const menuBurger = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', () =>{
    menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () =>{
    menuBurger.classList.remove('burger-active');
});


const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

});


document.querySelector(".header__form-open").addEventListener("click", function() {
    document.querySelector(".header__form-content").classList.add("header__form-content__active");
    this.classList.add("active");
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".header__form-content");
    if (!target.closest(".header__form-container") || target.closest(".header__form-close")) {
    form.classList.remove("header__form-content__active");
      form.querySelector(".header__form-input").value = "";
      document.querySelector(".header__form-open").classList.remove("active")
    }
  });