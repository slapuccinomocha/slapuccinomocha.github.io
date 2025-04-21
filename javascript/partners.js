// get document vars
const scrollers = document.querySelectorAll(".partnersTitleBG");

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
    const scrollerInner = scroller.querySelector(".innerPartners");
    const scrollerCont = Array.from(scrollerInner.children);

    scrollerCont.forEach((item) => {
      const dupItem = item.cloneNode(true);
      dupItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(dupItem);
    });
  });
}

// carousel swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 2,
    slideShadows: false,
    scale: 1,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

$("footer h2").on("click", function () {
  $(this).next("ul").toggleClass("active");
  $("footer h2").toggleClass("footerDrop");
});
