console.log ("Sanity Check");

//SORT OVERLAY
function openOverlay(x){
  document.getElementById("sortOverlay").style.border = "2px solid #838383";
  document.getElementById("sortOverlay").style.width = "250px";
  if(x === 1){
  	//marginLeft: 0 is for smaller screen widths
  	document.getElementById("sortOverlay").style.marginLeft = "0";
  	var mostRecentHeight = document.getElementById("mostRecent").offsetHeight;
  	document.getElementById("sortOverlay").style.height = mostRecentHeight + "px";

  }

  if(x === 2){
  	document.getElementById("sortOverlay").style.marginLeft = "0";
  	var allTopicsHeight = document.getElementById("allTopics").offsetHeight;
  	document.getElementById("sortOverlay").style.height = allTopicsHeight + "px";
  }
}

function closeOverlay(){
	document.getElementById("sortOverlay").style.width = "0";
	document.getElementById("sortOverlay").style.border = "0";
}




/* SAY SOMETHING FORM */

function clickDrop(x){
  if(x == 1){
    document.getElementById("topicDrop").classList.toggle("showTopic");
  }else if(x == 2){
    document.getElementById("contactListDrop").classList.toggle("showTopic");
  }
}

function replaceButton(id){
  if (id == "SCIENCE LAB" || id == "COMPUTER LAB" || id=="CAFETERIA"){
    document.getElementById("whatTopic").innerHTML = (id);
  }else if(id == "PRINCIPAL" || id == "COUNSELOR" || id == "MAIN OFFICE" || id == "JANITOR"){
    document.getElementById("whatContact").innerHTML = (id);
  }
}


window.onclick = function(event){
	var dropdowns = document.getElementsByClassName("dropdown-content");
	if (!event.target.matches(".button1")){
		for (var i = 0; i < dropdowns.length; i++) {
			dropdowns[i].classList.remove("showTopic");
			console.log('hello')
		}
	}
}