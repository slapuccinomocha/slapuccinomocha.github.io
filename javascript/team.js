// Grab elements from html doco
const aryanIMG = document.getElementById("aryan");
const ashnaIMG = document.getElementById("ashna");
const aarnavIMG = document.getElementById("aarnav");
const teamIMG = document.getElementById("teamimg");
const teamHead = document.getElementById("teamTextHead");
const teamBody = document.getElementById("teamTextBody");

var lines = [];
for (var i = 1; i <= 5; i++) {
  lines[i - 1] = document.getElementById("line" + i.toString());
}

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

// scroll for team show
document.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    // Ensures each portfolio switches every 1000 pixels scrolled after 800 pixels
    const portIndex = Math.floor((window.scrollY - 800) / 1000);

    // index that holds the current director
    var dirIndex = Math.floor((window.scrollY - 800) / 200 + 0);

    // total number of directors we have scrolled past
    var sum = 0;
    for (var i = 0; i < portIndex; i++) {
      sum = sum + directorArray[i].length;
    }

    // selected director assignment
    dirIndex = Math.floor(
      (window.scrollY - (800 + portIndex * 1000)) /
        (1000 / directorArray[portIndex].length) +
        sum,
    );

    // allocate port heading
    if (portIndex >= 0 && portIndex < portArray.length) {
      teamHead.textContent = portArray[portIndex];
    }

    // allocate each line of text to a name
    if (lines.length >= 5) {
      lines[0].textContent = fullteam[dirIndex - 2] || "";
      lines[1].textContent = fullteam[dirIndex - 1] || "";
      lines[2].textContent = fullteam[dirIndex] + " <" || "";
      lines[3].textContent = fullteam[dirIndex + 1] || "";
      lines[4].textContent = fullteam[dirIndex + 2] || "";
    }

    // allocate image to name.jpg
    teamIMG.src = "./images/ourteam/" + fullteamIMG[dirIndex] + ".jpg";
  }
});
