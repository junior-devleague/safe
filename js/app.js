console.log ("Sanity Check");

//SORT OVERLAY
function openOverlay(){
  var mostRecentHeight = document.getElementById("mostRecent").offsetHeight;
  //console.log(mostRecentHeight);
  document.getElementById("sortOverlay").style.height = mostRecentHeight + "px";
	document.getElementById("sortOverlay").style.width = "250px";
}

function closeOverlay(){
	document.getElementById("sortOverlay").style.width = "0";
}