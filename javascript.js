//var i = 0; 			// Start Point
//var images = [];	// Images Array
//var time = 4000;	// Time Between Switch
	 
// Image List
//images[0] = "Slike/dec1.jpg";
//images[1] = "Slike/dec2.jpg";
//images[2] = "Slike/dec3.jpg";
//images[3] = "Slike/dec4.jpg";

// Change Image
//function changeImg(){
//	document.slide.src = images[i];

	// Check If Index Is Under Max
//	if(i < images.length - 1){
	  // Add 1 to Index
//	  i++; 
//	} else { 
		// Reset Back To O
//		i = 0;
//	}

	// Run function every x seconds
//	setTimeout("changeImg()", time);
//}

//Svatov
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
