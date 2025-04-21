// Grab elements from html doco
const teamWhiteLine = document.getElementById("teamWhiteLine");

// side menu toggle
function sidebar_toggle() {
  var x = document.getElementById("sidebar");
  var y = document.getElementById("sidebar-icon");
  var h = document.getElementsByClassName("body");

  if (x.style.width === "100%") {
    x.style.width = "0%";
    y.src = "images/sidebar-icon.png";
  } else {
    x.style.width = "100%";
    y.src = "images/exit-icon.png";
  }
}

// check for scroll event
document.addEventListener("scroll", () => {
  var whitelinegrowth = ((2 * window.scrollY) / 1150) * 100 - 200;
  if (window.scrollY > 0 && whitelinegrowth < 0) {
    teamWhiteLine.style.left = whitelinegrowth.toString() + "vw";
    console.log(window.scrollY);
    console.log(whitelinegrowth);
  } else if (window.scrollY > 0 && whitelinegrowth > 0) {
    teamWhiteLine.style.left = (-whitelinegrowth).toString() + "vw";
    console.log(window.scrollY);
    console.log(whitelinegrowth);
  } else if (window.scrollY == 0) {
    teamWhiteLine.style.left = "-200vw";
    console.log(window.scrollY);
  }
});

$("footer h2").on("click", function () {
  $(this).next("ul").toggleClass("active");
  $("footer h2").toggleClass("footerdrop");
});
