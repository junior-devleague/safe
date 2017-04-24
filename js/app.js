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
/*Problems may occur:
    one like/dislike per computer
*/
var likes = 0;
var dislike = 0;
var clicks = 0;


function voteUpPost(){
  var upArrow = document.getElementsByClassName("upArrow");
  var downArrow = document.getElementsByClassName("downArrow");
  likes++;
  clicks++;
  if(clicks == 1){
    document.getElementById("u1").innerHTML = likes
    upArrow[0].style.pointerEvents = 'none'
  }else if(clicks == 2){
    document.getElementById("u1").innerHTML = likes
    dislike--;
    document.getElementById("d1").innerHTML = dislike
    upArrow[0].style.pointerEvents = 'none'
    downArrow[0].style.pointerEvents = 'auto'
    clicks = 1;
  }
}

function voteDownPost(){
  var upArrow = document.getElementsByClassName("upArrow");
  var downArrow = document.getElementsByClassName("downArrow");
  dislike++;
  clicks++;
  if(clicks == 1){
    document.getElementById("d1").innerHTML = dislike
    downArrow[0].style.pointerEvents = 'none'
  }else if(clicks == 2){
    document.getElementById("d1").innerHTML = dislike
    likes--;
    document.getElementById("u1").innerHTML = likes
    downArrow[0].style.pointerEvents = 'none'
    upArrow[0].style.pointerEvents = 'auto'
    clicks = 1;
  }
}