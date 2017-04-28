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
var dislike = 0;
var likes = 1;

for (var i = 0; i <= document.getElementsByClassName("numberUp").length - 1; i++) {
  document.getElementsByClassName("numberUp")[i].addEventListener("click", function(){voteUpPost(this)},{once:true})
  document.getElementsByClassName("numberDown")[i].addEventListener("click", function(){voteUpPost(this)},{once:true})
  console.log(i)
}
//MAKE ONE FUNCTION
// If img clicked remove event listener
  var clicks = 0;
function voteUpPost(z){
  var idOfSpanUp = z.previousSibling.previousSibling.firstChild.nextSibling;
  // var idOfSpanDown = z.parentElement.parentElement.lastChild.previousSibling.firstChild.nextSibling.lastChild
  // var imgDownArrow = z.parentElement.parentElement.lastChild.previousSibling.lastChild.previousSibling
  var imgUpArrow = z
  clicks++;
  console.log(z.parentElement.getElementsByTagName('IMG')[0])
  console.log(z)
    idOfSpanUp.innerHTML = +idOfSpanUp.innerHTML + 1
    // console.log
    // idOfSpanUp.innerHTML = +idOfSpanUp.innerHTML + 1
    // idOfSpanDown.innerHTML = +idOfSpanDown.innerHTML - 1
    // imgDownArrow.addEventListener("click",function(){voteDownPost(this)},{once:true})
    // clicks = 1
}

// function voteDownPost(y){
//   var idOfSpanUp = y.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.lastChild
//   var idOfSpanDown = y.parentElement.parentElement.lastChild.previousSibling.firstChild.nextSibling.lastChild
//   var imgDownArrow = y
//   var imgUpArrow = y.parentElement.parentElement.firstChild.nextSibling.lastChild.previousSibling
//   // var clicks = 0
//   console.log(y.parentElement.parentElement.firstChild.nextSibling.lastChild.previousSibling)

//   if (clicks == 1) {
//     idOfSpanDown.innerHTML = +idOfSpanDown.innerHTML + 1
//   }else if(clicks == 2){
//     idOfSpanDown.innerHTML = +idOfSpanDown.innerHTML + 1
//     idOfSpanUp.innerHTML = +idOfSpanUp.innerHTML - 1
//     imgUpArrow.addEventListener("click",function(){voteUpPost(this)},{once:true})
//     clicks = 1
//   }
// }
function test(){
  var upArrow = document.getElementsByClassName("numberUp");
  var downArrow = document.getElementsByClassName("numberDown");
  likes++
  document.getElementsByClassName('numberUp').innerHTML = "+" + likes

}