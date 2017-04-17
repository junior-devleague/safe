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
var expand = function() {
	var wrapHeight = document.getElementByClass(".topic .description").height();
	var descHeight = document.getElementByClass(".topic").height();
	if (wrapHeight <= descHeight) {
		document.getElementByClass(".topic .description")
	}

}

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