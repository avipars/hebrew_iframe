function reload() {
  var first = document.getElementById("input").value;
  var argument = first;
  if (first.length > 0) {
    document.getElementById("frame1").src =
      "https://context.reverso.net/translation/hebrew-english/" + argument;
    document.getElementById("frame2").src =
      "https://www.morfix.co.il/" + argument;
    return true;
  } else {
    alert("Please enter text");
    return false;
  }
}
//pressed enter
function fnsearch() {
  if (event.keyCode == 13) {
    event.preventDefault();
    reload();
    return true;
  } else {
    return false;
  }
}

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

//functionality to enable sticky header
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
