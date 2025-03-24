const readMore = document.getElementById("read-more-button");
const fabsocTitle = document.getElementById("fabsocTitle");
const uniPara = document.getElementById("uniPara");
const scrapbookLink = document.getElementById("scrapbookLink");
const joinButton = document.getElementById("joinButton");
const readmorebar = document.getElementById("readmorebar");

const rate = 0.8; // lower = faster fade

fabsocTitle.style.opacity = 0;
uniPara.style.opacity = 0;
scrapbookLink.style.opacity = 0;
joinButton.style.opacity = 0;

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

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    readMore.style.opacity = (10 / window.scrollY) * rate;
  } else {
    readMore.style.opacity = 1;
  }
});

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      fabsocTitle.style.opacity = 0;
      uniPara.style.opacity = 0;
      scrapbookLink.style.opacity = 0;
      setTimeout(function () {
        joinButton.style.opacity = 0;
      }, 0000);
      console.log(fabsocTitle.style.opacity);
    } else {
      fabsocTitle.style.opacity = 1;
      uniPara.style.opacity = 1;
      setTimeout(function () {
        scrapbookLink.style.opacity = 1;
      }, 1000);
      setTimeout(function () {
        joinButton.style.opacity = 1;
      }, 2000);
      console.log(fabsocTitle.style.opacity);
    }
  });
};
const observer = new IntersectionObserver(callback);
const observed = document.getElementById("fblogo");
observer.observe(observed);
