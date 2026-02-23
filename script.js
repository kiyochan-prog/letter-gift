

function goToScreen(num) {
  if (num === 6) {
  startConfetti();
}
if (num === 5) {
  startBalloons();
}
if (num === 2) {
  startFlyingLetters();
}
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  // Show selected screen safely
  const target = document.getElementById("screen" + num);
  if (target) {
    target.classList.add("active");
  }

  // If loading screen (example: screen3)
  if (num === 3) {
    startLoading();
  }
}


/* =========================
   LOADING ANIMATION
========================= */

function startLoading() {
  let percent = 0;
  const display = document.getElementById("percent");

  if (!display) return; // Safety check

  const interval = setInterval(() => {
    percent++;
    display.innerText = percent + "%";

    if (percent >= 100) {
      clearInterval(interval);
      goToScreen(5); // FINAL SCREEN NUMBER (change if needed)
    }
  }, 40);
}


/* =========================
   SHAKE NO BUTTON
========================= */

function shake(btn) {
  btn.style.transform = "translateX(8px)";
  setTimeout(() => btn.style.transform = "translateX(-8px)", 100);
  setTimeout(() => btn.style.transform = "translateX(0)", 200);
}


/* =========================
   CALENDAR FUNCTIONS
========================= */

function birthday() {
  alert("🎉 HAPPY BIRTHDAY 🎉\nYou found the special day!");
}

function smallMsg() {
  const messages = [
    "Thodi pagal hai kya ",
    " Bhaaggg👀",
    "Wrong date 😆"
  ];

  const random = messages[Math.floor(Math.random() * messages.length)];
  alert(random);
}

function runAway(btn) {
  btn.style.position = "relative";
  btn.style.left = Math.random() * 120 + "px";
  btn.style.top = Math.random() * 60 + "px";
}


function startConfetti() {
  const container = document.querySelector(".confetti-container");

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Random position
    confetti.style.left = Math.random() * 100 + "vw";

    // Random color
    const colors = ["#ff4da6", "#ffd166", "#06d6a0", "#118ab2", "#ffffff"];
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // Random animation duration
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";

    container.appendChild(confetti);
  }
}

function startBalloons() {
  const container = document.querySelector(".balloon-container");

  const colors = ["#ff4da6", "#ffd166", "#06d6a0", "#118ab2", "#ff6f91"];

  for (let i = 0; i < 15; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    balloon.style.animationDuration = 5 + Math.random() * 5 + "s";

    container.appendChild(balloon);
  }
}



function startFlyingLetters() {
  const container = document.querySelector(".letters-container");
  if (!container) return;

  const chars = "HAPPYBIRTHDAY❤️";

  setInterval(() => {
    const letter = document.createElement("div");
    letter.classList.add("flying-letter");

    letter.innerText =
      chars[Math.floor(Math.random() * chars.length)];

    letter.style.left = Math.random() * 100 + "vw";
    letter.style.fontSize = 16 + Math.random() * 20 + "px";
    letter.style.animationDuration = 4 + Math.random() * 3 + "s";

    container.appendChild(letter);

    setTimeout(() => {
      letter.remove();
    }, 6000);
  }, 500);
}
