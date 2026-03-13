// Grab elements from html doco
const aryanIMG = document.getElementById("aryan");
const ashnaIMG = document.getElementById("ashna");
const aarnavIMG = document.getElementById("aarnav");
const teamIMG = document.getElementById("teamimg");
const teamHead = document.getElementById("teamTextHead");
const teamBody = document.getElementById("teamTextBody");
const teamheaderL = document.getElementById("teamheaderL");
const teamheaderR = document.getElementById("teamheaderR");

function writeIt() {
  console.log("jQuery Version " + $().jquery + " loaded.");
}

var lines = [];
for (var i = 1; i <= 5; i++) {
  lines[i - 1] = document.getElementById("line" + i.toString());
}
var offset = 1000;

// index that holds the current director (22 total)
var dirIndex = Math.floor((window.scrollY - offset) / 200 + 0);

// current ports
const portArray = [
  "exec team: ",
  "creatives: ",
  "hr: ",
  "partnerships: ",
  "events: ",
];

// array to hold positions + names
const exec = [
  "President: Kavya",
  "Treasurer: Melina",
  "VP Externals: Daniel Li",
  "VP Internals: Ishaan",
  "VP Creatives: Akshan",
  "Arc Delegate: Sarah",
  "Welfare Officer: Aarnav",
  "Secretary: Aryan",
];

// array just for names (when changing src for IMGs)
const execIMG = [
  "Kavya",
  "Melina",
  "Daniel",
  "Ishaan",
  "Akshan",
  "Sarah",
  "Aarnav",
  "Aryan",
];

const creatives = ["Ryan", "Diya", "Eric", "Tamzid", "YiRanne"];
const hr = ["Tia", "Kelly", "Stephanie"];
const partnerships = ["Jason", "Audrey", "Angus"];
const events = ["Tara", "Bhargav", "Alex"];

// Director array to hold each port, (nested)
const directorArray = [exec, creatives, hr, partnerships, events];

// array for all directors as one non-nested array
const fullteam = directorArray.flat();

// array for
const fullteamIMG = [execIMG, creatives, hr, partnerships, events].flat();

// adjust name scroller based on scroll position
function nameAdjust() {
  if (lines.length >= 5) {
    for (var i = 0; i < 5; i++) {
      // Fade text element out
      // $("#line" + (i + 1).toString()).fadeOut(200);
      lines[i].textContent = fullteam[dirIndex + (i - 2)] || "";
      // $("#line" + (i + 1).toString()).fadeIn(200);
    }
    // lines[0].textContent = fullteam[dirIndex - 2] || "";
    // lines[1].textContent = fullteam[dirIndex - 1] || "";
    // lines[2].textContent = fullteam[dirIndex] + " <" || "";
    // lines[3].textContent = fullteam[dirIndex + 1] || "";
    // lines[4].textContent = fullteam[dirIndex + 2] || "";
  }
}

// side menu toggle
function sidebar_toggle() {
  var x = document.getElementById("sidebar");
  var y = document.getElementById("sidebar-icon");

  if (x.style.width === "100%") {
    x.style.width = "0%";
    y.src = "images/sidebar-icon.png";
  } else {
    x.style.width = "100%";
    y.src = "images/exit-icon.png";
  }
}

// throtller event to prevent to much scroll addEventListener
const throttle = (fn, delay) => {
  // Capture the current time
  let time = Date.now();

  // Here's our logic
  return () => {
    if (time + delay - Date.now() <= 0) {
      // Run the function we've passed to our throttler,
      // and reset the `time` variable (so we can check again).
      fn();
      time = Date.now();
    }
  };
};

// scroll to view directors
function directorScroll() {
  if (window.scrollY) {
    // Ensures each portfolio switches every 1000 pixels scrolled after 800 pixels
    const portIndex = Math.floor((window.scrollY - offset) / 1600);
    // total number of directors we have scrolled past
    var sum = 0;
    for (var i = 0; i < portIndex; i++) {
      sum = sum + directorArray[i].length;
    }

    // selected director assignment
    console.log(dirIndex);
    console.log(window.scrollY);
    var checker = 0;
    checker = Math.floor(
      (window.scrollY - (offset + portIndex * 1600)) /
        (1600 / directorArray[portIndex].length) +
        sum,
    );
    nameAdjust();

    if (dirIndex != checker) {
      dirIndex = Math.floor(
        (window.scrollY - (offset + portIndex * 1600)) /
          (1600 / directorArray[portIndex].length) +
          sum,
      );
      nameAdjust();
    }

    // allocate port heading
    if (portIndex >= 0 && portIndex < portArray.length) {
      teamHead.textContent = portArray[portIndex];
    }

    // allocate each line of text to a name and fade between names

    // allocate image to name.jpg
    teamIMG.src = "./images/ourteam/2026/" + fullteamIMG[dirIndex] + ".jpg";
  }
}

writeIt();

// scroll for team show
document.addEventListener(
  "scroll",
  throttle(() => {
    // scroll for team header animation
    // director scroll show
    directorScroll();
  }, 500),
);

var place = 0;
var cur_place = 25;

$("#upBut").click(function () {
  if (place == 0) {
    place = cur_place;
  } else {
    place--;
  }
  $("#externalPart").animate({ scrollTop: 50 * place + "px" }, 800);
});

$("#downBut").click(function () {
  if (place == cur_place) {
    place = cur_place;
  } else {
    place++;
  }
  $("#externalPart").animate({ scrollTop: 50 * place + "px" }, 800);
});

var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
    // downscroll code
    if (place == cur_place) {
      place = cur_place;
    } else {
      place++;
    }
    $("#externalPart").animate({ scrollTop: 50 * place + "px" }, 800);
  } else {
    // upscroll code
    if (place == 0) {
      place = cur_place;
    } else {
      place--;
    }
    $("#externalPart").animate({ scrollTop: 50 * place + "px" }, 800);
  }
  lastScrollTop = st;
});

$("footer h2").on("click", function () {
  $(this).next("ul").toggleClass("active");
  $(this).closest("h2").toggleClass("footerdrop");
});
