//-----[GLOBALS]-----//
var toggled = false;

function toggleNav(){
	if(toggled == false){
		$("#navLinks").animate({width:"toggle"},500, "linear");
		$("#navBtn").html(">");

		toggled = true;
	}else if(toggled == true){
		$("#navLinks").animate({width: "toggle"},500, "linear");
		$("#navBtn").html("<");
		toggled = false;
	}
}

function accordion(){
	var acc = document.getElementsByClassName("accordion");
	
	for(var i = 0;i<acc.length;i++){
		acc[i].addEventListener("click", function(){
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if(panel.style.maxHeight){
				panel.style.maxHeight = null;
			}else{
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
}

function openCity(evt, cityName, id){
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent" + id);
	for(i = 0;i<tabcontent.length;i++){
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks" + id);
	for(i = 0;i<tablinks.length;i++){
		tablinks[i].className = tablinks[i].className.replace("act", "");
	}
	document.getElementById(cityName + id).style.display = "block";
	evt.currentTarget.className += " act";
}

function openCityTab(cityName, ele, color, id){
	var i, tabcontent, tablinks, tabcontentUnderTab;
	tabcontent = document.getElementsByClassName("tabcontent" + id);
	for(i = 0;i<tabcontent.length;i++){
		tabcontent[i].style.display = "none";
	}

	tabcontentUnderTab = document.getElementsByClassName("tabcontent" + id + "_underTab");
	for(i = 0;i<tabcontentUnderTab.length;i++){
		tabcontentUnderTab[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablink" + id);
    for (i = 0; i < tablinks.length; i++) {
    	tablinks[i].className = tablinks[i].className.replace(" act", "");
    }

    document.getElementById(cityName + id + "_underTab").style.display = "block";
    document.getElementById(cityName + id).style.display = "block";
    ele.className += " act";
}

function turnOff(id){
	var tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent" + id);
	for(i = 0;i<tabcontent.length;i++){
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks" + id);
	for(i = 0;i<tablinks.length;i++){
		tablinks[i].className = tablinks[i].className.replace("act", "");
	}
}

function turnOffTab(id){
	var tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent" + id + "_underTab");
	for(i = 0;i<tabcontent.length;i++){
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink" + id);
	for(i = 0;i<tablinks.length;i++){
		tablinks[i].className = tablinks[i].className.replace("act", "");
	}
}