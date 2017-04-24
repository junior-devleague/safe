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
  if (id == "SCIENCE LAB" || id == "COMPUTER LAB" || id == "CAFETERIA"){
    document.getElementById("whatTopic").innerHTML = (id);
  }else if(id == "PRINCIPAL" || id == "COUNSELOR" || id == "MAIN OFFICE" || id == "JANITOR"){
    document.getElementById("whatContact").innerHTML = (id);
  }
}

window.onclick = function(event){
	var dropdowns = document.getElementsByClassName("dropdown-content");
	if (!event.target.matches(".button")){
		for (var i = 0; i < dropdowns.length; i++) {
			dropdowns[i].classList.remove("showTopic");
		}
	}else if (event.target.matches("#whatTopic")){
    dropdowns[1].classList.remove("showTopic");
  }
}

//NEW AND IMPROVED EXPANSION ~ZEDRICK & MS TORNEROS <3
/*var expandTopic = function(div){ //anonymous function
  //console.log(div);
  div.parentElement.parentElement.parentElement.style.height = "400px";
  //var attribute = this.getAttribute("data-myattribute");
  //alert(attribute);
}*/

//REDONE EXPANSION ~ZAK (TOOK FOREVER, BUT BASICALLY TAKES INTO ACCOUNT ALL CLICKS OPENING/CLOSING TOPICS)
var openCloseTopic = function(commentDiv){
  var topicDiv =  commentDiv.parentElement.parentElement.parentElement;
  //console.log(topicDiv);
  var currentlyOpenComBox;
  //diplays comment box at bottom of topic
  for(var i = 0; i < topicDiv.childNodes.length; i++){
    //console.log(topicDiv.childNodes[i]);
    if(topicDiv.childNodes[i].tagName == "TEXTAREA"){
      currentlyOpenComBox = topicDiv.childNodes[i];
    }
  }

  //When user clicks on "view comments", expand div
  if(event.target == commentDiv){
    //this closes others div if you click on "view comments" and another div is already open
    var topicClass = document.getElementsByClassName("topic");
    //console.log(topicClass);
    for(var i = 0; i < topicClass.length; i++){
      //console.log(topicClass[i].clientHeight)
      if(topicClass[i].clientHeight == "400"){ //if any topic is already open close it
        //console.log(topicClass[i]);
        //this keeps only one topic open at all times
        currentlyOpenComBox.style.display = "none";
        topicClass[i].style.height = "145px";
      }
    }

    //console.log("clicked on comment div");
    topicDiv.style.height = "400px";
    currentlyOpenComBox.style.display = "block";
  }
  //When the user clicks anywhere outside of the topic, close it
  else{
    //checks to see if user is clicking inside topic div
    if(topicDiv.contains(event.target) && topicDiv.style.height == "400px"){ //this could be put as an else if statement also...
      //console.log("clicked on topic div");
      topicDiv.style.height = "400px";
    }
    else{
      //console.log("clicked off topic div");
      topicDiv.style.height = "145px";
      currentlyOpenComBox.style.display = "none";
    }
  }
}

//checks all clicks on window
var openTopic;
window.addEventListener("click", function(){
  openCloseTopic(openTopic); //closeTopic's parameter becomes "this" (the current open div)
},
false)

var commentClass = document.getElementsByClassName("comments");
//console.log(commentClass);
for(var i = 0; i < commentClass.length; i++){
  commentClass[i].addEventListener("click", function(){
    openCloseTopic(this);
    openTopic = this; //makes "this" global
  }, 
  false);
  //classname[i].style.height.test.parentElement = "500px";
}