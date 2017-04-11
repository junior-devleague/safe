console.log ("Sanity Check");




/*Dropdown menu for sort*/

function showDropdownMenu(){
	document.getElementById("myDropdown").classList.toggle("showSort")
}

window.onclick = function(event) {
	if (!event.target.matches('#sortOverlay')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showSort')) {
        openDropdown.classList.remove('showSort');
      }
    }
  }
}