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

// index that holds the current director
var dirIndex = Math.floor((window.scrollY - offset) / 200 + 0);

// current ports
const portArray = [
  "exec team: ",
  "digitals: ",
  "media team: ",
  "marketing: ",
  "hr: ",
  "partnerships: ",
  "events: ",
  "operations: ",
];

// array to hold positions + names
const exec = [
  "President | VPI: Arsh",
  "Treasurer: Kavya",
  "VP Externals: Aivy",
  "VP Creatives: Indira",
  "VP Marketing: Falguni",
];

// array just for names (when changing src for IMGs)
const execIMG = ["Arsh", "Kavya", "Aivy", "Indira", "Falguni"];

const digitals = ["Aryan", "Ashna", "Aarnav"];
const media = ["John", "Charlie"];
const marketing = ["Kai", "Ishaan", "Zoe"];
const hr = ["Ashton", "Alex"];
const partnerships = ["Mohnish", "Melina"];
const events = ["Stephen", "Roop", "Jaskirat"];
const operations = ["Kalvin", "Neera"];

// Director array to hold each port, (nested)
const directorArray = [
  exec,
  digitals,
  media,
  marketing,
  hr,
  partnerships,
  events,
  operations,
];

// array for all directors as one non-nested array
const fullteam = directorArray.flat();

// array for
const fullteamIMG = [
  execIMG,
  digitals,
  media,
  marketing,
  hr,
  partnerships,
  events,
  operations,
].flat();

// adjust name scroller based on scrolll position
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
  if (window.scrollY > offset) {
    // Ensures each portfolio switches every 1000 pixels scrolled after 800 pixels
    const portIndex = Math.floor((window.scrollY - offset) / 1000);

    // total number of directors we have scrolled past
    var sum = 0;
    for (var i = 0; i < portIndex; i++) {
      sum = sum + directorArray[i].length;
    }

    // selected director assignment
    console.log(dirIndex);
    var checker = 0;
    checker = Math.floor(
      (window.scrollY - (offset + portIndex * 1000)) /
        (1000 / directorArray[portIndex].length) +
        sum,
    );

    if (dirIndex != checker) {
      dirIndex = Math.floor(
        (window.scrollY - (offset + portIndex * 1000)) /
          (1000 / directorArray[portIndex].length) +
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
    teamIMG.src = "./images/ourteam/" + fullteamIMG[dirIndex] + ".jpg";
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
