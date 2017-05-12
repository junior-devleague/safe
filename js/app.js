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
var currentlyOpenComBox;
var openCloseTopic = function(commentDiv){
  var topicDiv = commentDiv.parentElement.parentElement.parentElement;
  //console.log(topicDiv);

  //diplays comment box at bottom of topic
  if(currentlyOpenComBox == null){
    for(var i = 0; i < topicDiv.childNodes.length; i++){
      //console.log(topicDiv.childNodes[i]);
      if(topicDiv.childNodes[i].tagName == "SPAN"){
        currentlyOpenComBox = topicDiv.childNodes[i];
        //console.log(currentlyOpenComBox)
      }
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

    for(var i = 0; i < topicDiv.childNodes.length; i++){
      //console.log(topicDiv.childNodes[i]);
      if(topicDiv.childNodes[i].tagName == "SPAN"){
        currentlyOpenComBox = topicDiv.childNodes[i];
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

//VOTE SYSTEM

var click = 0;
var upVote = function voteUpPost(z){
  var z = this
  var idOfSpan = z.previousSibling.previousSibling.firstChild.nextSibling;
  // console.log(z.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.lastChild)
  // console.log(z.parentElement.parentElement.firstChild.nextSibling.lastChild.previousSibling)
  click++
  if (z.className == 'numberUp'){
    var imgD = z.parentElement.parentElement.lastChild.previousSibling.lastChild.previousSibling
    var spanD1 = z.parentElement.parentElement.lastChild.previousSibling.firstChild.nextSibling.firstChild.nextSibling
    idOfSpan.innerHTML =  +idOfSpan.innerHTML + 1
    imgD.removeEventListener("click", upVote)
    imgD.addEventListener("click", function(){subtractNum(this)}, {once:true})
  }else if (z.className == 'numberDown'){
    var spanU1 = z.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.lastChild
    var imgU = z.parentElement.parentElement.firstChild.nextSibling.lastChild.previousSibling
    idOfSpan.innerHTML = +idOfSpan.innerHTML + 1
    imgU.removeEventListener("click", upVote)
    imgU.addEventListener("click", function(){subtractNum(this)}, {once:true})
  }
}

function subtractNum(y){
  var idOfSpan = y.previousSibling.previousSibling.firstChild.nextSibling;
  if (y.className == 'numberUp'){
    var imgD = y.parentElement.parentElement.lastChild.previousSibling.lastChild.previousSibling
    var spanD1 = y.parentElement.parentElement.lastChild.previousSibling.firstChild.nextSibling.firstChild.nextSibling

    idOfSpan.innerHTML =  +idOfSpan.innerHTML + 1
    spanD1.innerHTML = +spanD1.innerHTML - 1
    imgD.addEventListener("click", function(){
        subtractNum(this)
      }, {once:true})

  }else if (y.className == 'numberDown'){
    var spanU1 = y.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.lastChild
    var imgU = y.parentElement.parentElement.firstChild.nextSibling.lastChild.previousSibling

    idOfSpan.innerHTML = +idOfSpan.innerHTML + 1
    spanU1.innerHTML = +spanU1.innerHTML - 1
    imgU.addEventListener("click", function(){
        subtractNum(this)
      }, {once:true})
  }
}

for (var i = 0; i < document.getElementsByClassName("numberUp").length; i++) {
  document.getElementsByClassName("numberUp")[i].addEventListener("click", upVote, {once:true})
  document.getElementsByClassName("numberDown")[i].addEventListener("click", upVote, {once:true})
}

//LOCAL STORAGE

// creates a function that generates a empty object that will be saved to localStorage
(function(){
  var user = {
    id: 0,
    comment: "",
  }

  //creates object that contains methods for localStorage handling
  var handler = {
    //saves user inputs as one entry to local storage
    saveEntry: function (){
      var inputs = document.querySelectorAll(".addComment");
      user.id = inputs[0].value;
      user.comment = inputs[1].value;

      //converts object into JSON and store in localStorage
      //setItem = method on storage
      localStorage.setItem("user_" + localStorage.length, JSON.stringify(user));

      //reloads the page
      location.reload();
      
    },


    //displays user entries
    displayEntry: function(){
      if (localStorage.length > 0){
        var render = "<div>";
        render += "<div id='entry_container'>Entries:</div>";
        // += adds on to the render
        for (i = 0; i < localStorage.length; i++){
          //gets the key
          var key = localStorage.key(i);
           //gets data from key
          var entry = localStorage.getItem(key); 
          //parses data back into object
          var data = JSON.parse(entry); //research JSON.parse
          render += "<ul>";
          render += data.comment;
          render += "</ul>";
        }
        render += "</div>";
        display_container.innerHTML = render;
      }
    },
    
    clearEverything: function(){
      localStorage.clear();
      location.reload();
    }
  };

  // Save Button Function
  var save = document.querySelectorAll('.sendBox');
  // console.log(save);
  save.forEach(function(element) {
  element.addEventListener('click', handler.saveEntry);
  console.log(element);
  });
  

  // window.onload = function () {
  //   handler.displayEntry();
  // };


})();


// Allow the image to become a button
// Button (aka image) is in class "addComment"
// Uncaught TypeError: save.forEach is not a function
// 1 : User input to local storage
// 2 : Local Storage to Comment Box
// 3 : Reduce Height of Comment Box
// 4 : Add in one more Comment Box
// 5 : Remove text area
