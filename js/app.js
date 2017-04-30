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


/*Vote System*/


/*Most Likes go on top of div (Either shifts on top/ fade in fade out)*/



/*When up arrow clicks add plus one to the number above the arrow img,
it compare number and change position
the image then becomes unclickable/locks.
The counter of likes starts at 0 and add +1.
target the Id and change the innerHTML.*/



/*When down arrow clicks add plus one,
 check if its equal to the number of downvote
  then fade out if it exceed the number*/
//////////////////////////////////////////////////////

//MAKE ONE FUNCTION
// If img clicked remove event listener

var click = 0;
function voteUpPost(z){
  var idOfSpan = z.previousSibling.previousSibling.firstChild.nextSibling;
  // console.log(z.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.lastChild)
  console.log(z.parentElement.parentElement.firstChild.nextSibling.lastChild.previousSibling)
  //console.log(z.parentElement.getElementsByTagName('IMG')[0])
  	// z.addEventListener("click", function(){voteUpPost(this)},{once:true})
  click++
  if (z.className == 'numberUp'){
    var imgD = z.parentElement.parentElement.lastChild.previousSibling.lastChild.previousSibling
  	var spanD1 = z.parentElement.parentElement.lastChild.previousSibling.firstChild.nextSibling.firstChild.nextSibling
  	idOfSpan.innerHTML =  +idOfSpan.innerHTML + 1
  	if(click == 2){
  		spanD1.innerHTML = +spanD1.innerHTML - 1
  		click = 0
      imgD.addEventListener("click", function(){
        subtractNum(this)
      }, {once:true})
  	}
  }else if (z.className == 'numberDown'){
  	var spanU1 = z.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.lastChild
    var imgU = z.parentElement.parentElement.firstChild.nextSibling.lastChild.previousSibling
  	idOfSpan.innerHTML = +idOfSpan.innerHTML + 1
  	if (click == 2) {
  		spanU1.innerHTML = +spanU1.innerHTML - 1
  		click = 0
      imgU.addEventListener("click", function(){
        subtractNum(this)
      }, {once:true})
  	}
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

// function changeVote(y){
// 	var idOfSpan = y.previousSibling.previousSibling.firstChild.nextSibling;

// 	idOfSpan.innerHTML = +idOfSpan.innerHTML + 1
// }

for (var i = 0; i < document.getElementsByClassName("numberUp").length; i++) {
  document.getElementsByClassName("numberUp")[i].addEventListener("click", function(){
  	voteUpPost(this)
  }, {once:true})

  document.getElementsByClassName("numberDown")[i].addEventListener("click", function(){
  	voteUpPost(this)
  }, {once:true})
}