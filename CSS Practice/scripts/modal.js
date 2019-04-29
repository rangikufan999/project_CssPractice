
/*
	These should be obtained in a function that has an "this" argument to specify the image being clicked
	OR
	gather all images with classname modalImg and assign them their on onclicks
	OR
	get ids srcs and attributes within onclick before running modal execution
*/
var modal = document.getElementById("myModal"); //Get Modal By Id

//Get Image and insert it into the modal use alt text as caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

//Get span element that closes the modal
var span = document.getElementsByClassName("close")[0];

/*
	loop through span elements and add onclick function
*/

//When User clicks on span, close the modal
span.onclick = function(){
	modal.style.display = "none";
}