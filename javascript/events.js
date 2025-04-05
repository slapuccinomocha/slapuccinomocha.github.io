var controller = ScrollMagic.Controller();

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

// loop through all event cards and fade them in
$("eventsCard").each(function () {
  // build tween
  var tween = TweenMax.from($(this), 0.3, {
    autoAlpha: 0,
    scale: 0.2,
    y: "+=30",
    ease: Linear.easeNone,
  });
  // build scroll scene
  var scene = new ScrollMagic.Scene({
    triggerElement: this,
  })
    .setTween(tween)
    .addTo(controller);
});
