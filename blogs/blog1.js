const readMore = document.getElementById("readmorebar");
const blog1Main = document.getElementById("blog1Main");
const blog1H1 = document.getElementById("blog1H1");
const blog1H4 = document.getElementById("blog1H4");

const rate = 0.8; // lower = faster fade

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
      blog1Main.style.opacity = 0;
      blog1Main.style.overflow = "hidden";
      blog1H1.style.opacity = 0;
      blog1H4.style.opacity = 0;
    } else {
      blog1Main.style.opacity = 1;
      blog1Main.style.overflowY = "scroll";
      setTimeout(function () {
        blog1H1.style.opacity = 1;
      }, 1000);
      setTimeout(function () {
        blog1H4.style.opacity = 1;
      }, 1500);
    }
  });
};
const observer = new IntersectionObserver(callback);
observer.observe(readMore);
