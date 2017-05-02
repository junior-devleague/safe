// console.log ("Sanity Check")

//SORT OVERLAY
function openOverlay(x){
  document.getElementById("sortOverlay").style.border = "2px solid #838383"
  document.getElementById("sortOverlay").style.width = "250px"
  if(x === 1){
  	//marginLeft: 0 is for smaller screen widths
  	document.getElementById("sortOverlay").style.marginLeft = "0"
  	var mostRecentHeight = document.getElementById("mostRecent").offsetHeight
  	document.getElementById("sortOverlay").style.height = mostRecentHeight + "px"

  }

  if(x === 2){
  	document.getElementById("sortOverlay").style.marginLeft = "0"
  	var allTopicsHeight = document.getElementById("allTopics").offsetHeight
  	document.getElementById("sortOverlay").style.height = allTopicsHeight + "px"
  }
}

function closeOverlay(){
	document.getElementById("sortOverlay").style.width = "0"
	document.getElementById("sortOverlay").style.border = "0"
}

//Single Topic View
// Expand Function

//When click on topic, expand topic
// function expand() {
//     var exp = document.querySelectorAll(".topic")
//     var i
//     for (i = 0 i < exp.length i++) {
//         exp[i].style.height = "500px"
//     }
//     console.log(this)
// }

//NEW AND IMPROVED EXPANSION ~ZEDRICK & MS TORNEROS <3
/*var classname = document.getElementsByClassName("topic")*/
var commentClass = document.getElementsByClassName("comments")
console.log(commentClass)

var myFunction = function expand(test) {
  console.log(test)
  console.log(test.parentElement.parentElement.parentElement.style.height = "500px")
    // var attribute = this.getAttribute("data-myattribute")
    // alert(attribute)
}

for (var i = 0 i < commentClass.length i++) {
    commentClass[i].addEventListener('click', function(){
      console.log(this)
      myFunction(this)
    }, 
    false)
    // classname[i].style.height.test.parentElement = "500px"
}

//Have a function where if div topic is clicked on it changes class name to another SPECIFIC name

//Have another function that would look for that SPECIFIC name and make it the only on that expands to fix the problem of having all of them expand

//function that reverts the topic's div name back to the old name 



//Click Topic

//Change Height 100% (Click off collapses)

//Unhides description









/*Turn this code from JQuery to Javascript:
$(function(){
    var wrapHeight = $(".product-description .desc-wrap").height()
    var descHeight = $(".product-description").height()
    if (wrapHeight <= descHeight) {
        $(".product-description .desc-fade").hide()
        $(".product-description .open-link").hide()
    }
    
    $(".product-description .open-link").click(function() {
        $(this).hide()
        $(".product-description .desc-fade").hide()
        $(".product-description").animate({height: wrapHeight}, 1000)
 
$ stands for 
 */

var mockData = [
  {topic: "Cafeteria",
  entries:[
    {
      title: "Better Lunches",
      description: "lorem impsum",
      date: "Feb 4th, 2017", 
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
      }
    },

    {
      title: "Food was Spoiled",
      description: "lorem impsum",
      date: "March 9th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
      }
    },

    {
      title: "Lunch is too Expensive",
      description: "lorem impsum",
      date: "Feb 26th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
      }
    }
  ]
},

  {topic: "Music Room",
  entries:[
    {
      title: "Need New Instruments",
      description: "lorem impsum",
      date: "Feb 9th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
      }
    },

    {
      title: "Room too Small",
      description: "lorem impsum",
      date: "Apr 18th, 2017",
      comments:
      {
        comment1: "lorem impsum",
      }
    }, 

    {
      title: "AC is Broken",
      description: "lorem impsum",
      date: "Jan 9th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
      }
    }
  ]
},

  {topic: "Gym"
entries:[
    {
      title: "Need New Equipment",
      description: "lorem impsum",
      date: "March 11th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
      }
    },

    {
      title: "Build New Bleachers",
      description: "lorem impsum",
      date: "Feb 8th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
      }
    },

    {
      title: "Rewax the Floors",
      description: "lorem impsum",
      date: "Apr 28th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
      }
    }
  ]
},

  {topic: "track and field"
  entries: [
    {
      title: "Need New Hurdles",
      description: "lorem impsum",
      date: "Jan 4th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
      }
    },

    {
      title: "Fix Field",
      description: "lorem impsum",
      date: "March 3rd, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum", 
        comment3: "lorem impsum",
      }
    },

    {
      title: "Redo Jumping Pit",
      description: "lorem impsum",
      date: "Jan 26th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
      }
    }  
  ]
},

  {topic: "computer lab"
  entries:[
    {
      title: "New Computers",
      description: "lorem impsum",
      date: "Feb 26th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
      }
    },

    {
      title: "No Internet",
      description: "lorem impsum",
      date: "March 24th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
      }
    },

    {
      title: "Exposed Wiring",
      description: "lorem impsum",
      date: "May 1st, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
      }
    }
  ]
},

  {topic: "science lab"
  entries: [
    {
      title: "New Beakers",
      description: "lorem impsum",
      date: "Apr 30th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
      }
    },

    {
      title: "Need New Viles",
      description: "lorem impsum",
      date: "March 19th,2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
      }
    },

    {
      title: "The Textbooks SUCK!!",
      description: "lorem impsum",
      date: "Feb 3rd, 2017",
      comments:
      {
        comment1: "lorem impsum", 
        comment2: "lorem impsum",
        comment3: "lorem impsum",
      }
    }
  ]
},

  {topic: "library"
  entries:[
    {
      title: "Books too Old",
      description: "lorem impsum",
      date: "Jan 13th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
      }
    },

    {
      title: "It's too COLD IN HERE!",
      description: "lorem impsum",
      date: "March 13th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
      }
    },

    {
      title: "Not Enough Places too Sit",
      description: "lorem impsum",
      date: "March 28th,2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
      }
    }
  ]
},

  {topic: "main office"
  entries:[
    {
      title: "Not Enough Space",
      description: "lorem impsum",
      date: "May 1st, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
      }
    },

    {
      title: "Rude Office Attendents",
      description: "lorem impsum",
      date: "Jan 17th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
      }
    },

    {
      title: "Teacher's Mailboxes too Small",
      description: "lorem impsum",
      date: "Feb 16th,2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
      }
    }
  ]
},

  {topic: "Parking Lot",
  entries:[
    {
      title: "Pot Holes in the Parking Lot",
      description: "lorem impsum",
      date: "Mar 17th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
        comment4: "lorem impsum",
      }
    },

    {
      title: "Not Enough Parking Stalls",
      description: "lorem impsum",
      date: "Apr 20th, 2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
        comment3: "lorem impsum",
        comment4: "lorem impsum",
      }
    },

    {
      title: "Need Handicap Stalls",
      description: "lorem impsum",
      date: "Apr 10th,2017",
      comments:
      {
        comment1: "lorem impsum",
        comment2: "lorem impsum",
      }
    }
  }
]

