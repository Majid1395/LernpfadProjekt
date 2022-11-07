const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
// Display Mobile Menu
const mobileMenu = ()=>{
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}
menu.addEventListener('click',mobileMenu);


let totop = document.getElementById("totopbutton");
totop.addEventListener('click',function(){

  window.scrollTo({
    top : 0,
    behavior :"smooth"
  });
});

const getStarted = document.querySelector(".get__started__button__container");
getStarted.addEventListener('click',function(){
  location.replace("../html/app.html")
})

