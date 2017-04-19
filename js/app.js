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

//Single Topic View
// Expand Function

//When click on topic, expand topic
// function expand() {
 /*   var exp = document.querySelectorAll(".topic");
    var i;
    for (i = 0; i < exp.length; i++) {
        exp[i].style.height = "500px";
    }*/
//     console.log(this);
// }

//ATTEMPT
// var classname = document.getElementsByClassName("topic");

// var myFunction = function expand() {
//     var attribute = this.getAttribute("data-myattribute");
//     alert(attribute);
// };

// for (var i = 0; i < classname.length; i++) {
//     classname[i].addEventListener('click', myFunction, false);
// }

//Have a function where if div topic is clicked on it changes class name to another SPECIFIC name

//Have another function that would look for that SPECIFIC name and make it the only on that expands to fix the problem of having all of them expand

//function that reverts the topic's div name back to the old name 



//Click Topic

//Change Height 100% (Click off collapses)

//Unhides description









/*Turn this code from JQuery to Javascript:
$(function(){
    var wrapHeight = $(".product-description .desc-wrap").height();
    var descHeight = $(".product-description").height();
    if (wrapHeight <= descHeight) {
        $(".product-description .desc-fade").hide();
        $(".product-description .open-link").hide();
    }
    
    $(".product-description .open-link").click(function() {
        $(this).hide();
        $(".product-description .desc-fade").hide();
        $(".product-description").animate({height: wrapHeight}, 1000);
 
$ stands for 
 */