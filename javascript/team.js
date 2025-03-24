// Grab elements from html doco
const teamWhiteLine = document.getElementById("teamWhiteLine");

// check for scroll event
document.addEventListener('scroll', () => {
  var whitelinegrowth = ((2*window.scrollY) / 1150) * 100 -  200
  if (window.scrollY > 0 && whitelinegrowth < 0) {
    teamWhiteLine.style.left = (whitelinegrowth).toString() + "vw";
    console.log(window.scrollY);
    console.log(whitelinegrowth);

  } else if (window.scrollY > 0 && whitelinegrowth > 0) {
    teamWhiteLine.style.left = (-whitelinegrowth).toString() + "vw";
    console.log(window.scrollY);
    console.log(whitelinegrowth);

  }

});
