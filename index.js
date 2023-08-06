const menuBar = document.querySelector('nav .menu-bar');
const menu = document.querySelector('nav .menu');
menuBar.addEventListener('click', function(){
  menu.classList.toggle('active');
});