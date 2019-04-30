var slideIndex = 1;

// Next/previous controls
function plusSlides(n){
	showSlides(slideIndex += n);
}

//Thumbnail Image Controls
function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var slideInfoArr = document.getElementsByClassName("slideInfo");
	var dots = document.getElementsByClassName("dot");
	if(n > slides.length){slideIndex = 1}
	if(n < 1){slideIndex = slides.length}

	for(i = 0;i<slides.length;i++){
		slides[i].style.display = "none";
	}

	for(i = 0;i<dots.length;i++){
		dots[i].className = dots[i].className.replace(" act", "");
	}

	for(i = 0;i<slideInfoArr.length;i++){
		slideInfoArr[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "inline-block";
	slides[slideIndex-1].style.verticalAlign = "top";

	slideInfoArr[slideIndex-1].style.display = "inline-block";
	slideInfoArr[slideIndex-1].style.verticalAlign = "top";
	dots[slideIndex-1].className += " act";
}

//===============LIGHTBOX SCRIPT============//



function openModal(){
	document.getElementById("modal").style.display = "block";
}

function closeModal(){
	document.getElementById("modal").style.display = "none";
}

var sldInd = 1;

//NEXT PREVIOUS CONTROLS

function addSld(n){
	showSld(sldInd  += n);
}

function currentSld(n){
	showSld(sldInd = n);
}

function showSld(n){
	var i;
	var sld = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if(n > sld.length){sldInd = 1}
	if(n < 1){sldInd = sld.length}

	for(i = 0;i<sld.length;i++){
		sld[i].style.display = "none";
	}

	for(i = 0;i<dots.length;i++){
		dots[i].className = dots[i].className.replace(" acti", "");
	}

	sld[sldInd-1].style.display = "block";
	dots[sldInd-1].className += " acti";
	captionText.innerHTML = dots[sldInd-1].alt;
}
