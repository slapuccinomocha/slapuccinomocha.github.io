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

// function for generating pop-up window with relevant information.
function generate_popup(eventID) {
  // retrieve popup window and body
  const mainbody = document.getElementById("mainbody");
  const popUpWindow = document.getElementById("eventsPopUpFader");

  // retrieve all cards from button that was pressed
  const eventCard = document.querySelector(eventID);

  // once known which event button was triggered retrieve info related to that event
  const eventIMG = eventCard.querySelector("img");
  const eventName = eventCard.querySelector("h2");
  const eventLoc = eventCard.querySelectorAll("h5")[0];
  const eventTime = eventCard.querySelectorAll("h5")[1];
  const eventPrice = eventCard.querySelectorAll("h5")[2];
  const eventAnchor = eventCard.querySelector("a");
  const eventDesc = eventCard.querySelector("p");

  // name, location, price, event description from popupwindow
  const popupIMG = popUpWindow.querySelector("img");
  const popupName = popUpWindow.querySelector("h2");
  const popupLoc = popUpWindow.querySelectorAll("h5")[0];
  const popupTime = popUpWindow.querySelectorAll("h5")[1];
  const popupPrice = popUpWindow.querySelectorAll("h5")[2];
  const popupAnchor = popUpWindow.querySelector("a");
  const popupDesc = popUpWindow.querySelector("p");
  console.log(popupDesc);

  // allocate each piece of information to relevant field in popup
  popupIMG.src = eventIMG.src;
  popupName.innerText = eventName.innerText;
  popupLoc.innerText = eventLoc.innerText;
  popupTime.innerText = eventTime.innerText;
  popupPrice.innerText = eventPrice.innerText;
  popupAnchor.setAttribute("href", eventAnchor.href);
  popupAnchor.innerText = eventAnchor.innerText;
  popupDesc.innerText = eventDesc.innerText;

  // prevent scrolling by overflowing hidden on body
  mainbody.style.overflow = "hidden";

  // display popup window
  popUpWindow.style.display = "flex";
}

function close_popup() {
  // retrieve exit button from popup
  const popUpWindow = document.getElementById("eventsPopUpFader");
  const mainbody = document.getElementById("mainbody");

  // hide popUpWindow
  mainbody.style.overflow = "initial";
  popUpWindow.style.display = "none";
}
