// console.log ("Sanity Check");

//SORT OVERLAY ~ZAK
function openOverlay(x){
  document.getElementById("sortOverlay").style.border = "2px solid #838383";
  document.getElementById("sortOverlay").style.width = "250px";
  if(x === 1){
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

//SAY SOMETHING FORM ~CHRISTIAN
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
		}
	}else if (event.target.matches("#whatTopic")){
    dropdowns[1].classList.remove("showTopic");
  }
}
console.log(event)
//NEW AND IMPROVED EXPANSION ~ZEDRICK & MS TORNEROS <3
var commentClass = document.getElementsByClassName("comments");
console.log(commentClass);

var myFunction = function expand(test){
  console.log(test);
  console.log(test.parentElement.parentElement.parentElement.style.height = "500px");
  // var attribute = this.getAttribute("data-myattribute");
  // alert(attribute);
};

for(var i = 0; i < commentClass.length; i++){
    commentClass[i].addEventListener('click', function(){
      console.log(this);
      myFunction(this);
    }, 
    false);
    // classname[i].style.height.test.parentElement = "500px";
}