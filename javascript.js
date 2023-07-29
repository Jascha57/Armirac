// Run function when page loads
window.onload=changeImg;

 const imgBx = document.querySelector('.imgBx');
const slides = imgBx.getElementsByTagName('img');
var i = 0;
var interval = 5000;

setInterval(function(){
    slides[i].classList.remove('active');
    slides[i].classList.add('hide');
    i = (i + 1) % slides.length;
    slides[i].classList.remove('hide');
    slides[i].classList.add('active');
}, interval);
