const scrollers = document.querySelectorAll(".contactScroller");

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

addAnimation();

function addAnimation() {
  console.log(scrollers);
  scrollers.forEach((scroller) => {
    const scrollerInner = scroller.querySelector(".contactInnerScroll");
    const scrollerCont = Array.from(scrollerInner.children);

    scrollerCont.forEach((item) => {
      const dupItem = item.cloneNode(true);
      dupItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(dupItem);
    });
  });
}

$("footer h2").on("click", function () {
  $(this).next("ul").toggleClass("active");
  $(this).closest("h2").toggleClass("footerdrop");
});
