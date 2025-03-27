// Grab elements from html doco
const aryanIMG = document.getElementById("aryan");
const ashnaIMG = document.getElementById("ashna");
const aarnavIMG = document.getElementById("aarnav");
const teamIMG = document.getElementById("4execs");
const teamHead = document.getElementById("teamTextHead");
const teamBody = document.getElementById("teamTextBody");

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

// scroll for execs show
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 800 && window.scrollY < 1100) {
    teamHead.textContent = "exec team:";
    teamIMG.src = "./images/ourteam/execsPNG1.png";
    teamBody.innerHTML =
      "president | VPI: Arsh <br /> Treasury: Kavya <br />VPE: Aivy <br /> VPC: Indira <br /> welfare: Alex";
  } else if (window.scrollY >= 1100 && window.scrollY < 1300) {
    teamIMG.src = "./images/ourteam/execsPNG3.png";
  } else if (window.scrollY >= 1300 && window.scrollY < 1500) {
    teamIMG.src = "./images/ourteam/execsPNG4.png";
  } else if (window.scrollY >= 1500 && window.scrollY < 1700) {
    teamHead.textContent = "exec team:";
    teamIMG.src = "./images/ourteam/execsPNG2.png";
    teamBody.innerHTML =
      "president | VPI: Arsh <br /> Treasury: Kavya <br />VPE: Aivy <br /> VPC: Indira <br /> welfare: Alex";
  } else if (window.scrollY >= 1700 && window.scrollY < 1900) {
    teamIMG.src = "./images/ourteam/aryan.png";
    teamHead.textContent = "digitals team:";
    teamBody.innerHTML = "Aryan <br> Aarnav <br> Ashna";
  } else if (window.scrollY >= 1900 && window.scrollY < 2100) {
    teamIMG.src = "./images/ourteam/aarnav.png";
  } else if (window.scrollY >= 2100 && window.scrollY < 2300) {
    teamIMG.src = "./images/ourteam/ashna.png";
  } else if (window.scrollY >= 1900 && window.scrollY < 2100) {
    teamIMG.src = "./images/ourteam/aryan2.jpeg";
  } else if (window.scrollY >= 1900 && window.scrollY < 2100) {
    teamIMG.src = "./images/ourteam/aryan2.jpeg";
  } else if (window.scrollY >= 1900 && window.scrollY < 2100) {
    teamIMG.src = "./images/ourteam/aryan2.jpeg";
  }
});
