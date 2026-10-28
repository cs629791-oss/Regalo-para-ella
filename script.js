


const herName = "Joisdy";
const myName = "David";




const gift = document.getElementById("gift");

const welcomeScreen = document.getElementById("welcome");
const letterScreen = document.getElementById("letter-screen");
const memoriesScreen = document.getElementById("memories-screen");
const finalScreen = document.getElementById("final-screen");

const memoriesBtn = document.getElementById("memories-btn");
const finalBtn = document.getElementById("final-btn");
const restartBtn = document.getElementById("restart-btn");

const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("music");

const heartsContainer = document.getElementById("hearts-container");




document.getElementById("her-name").textContent = herName;
document.getElementById("my-name").textContent = myName;




function showScreen(screenToShow) {

  const screens = [
    welcomeScreen,
    letterScreen,
    memoriesScreen,
    finalScreen
  ];

  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  screenToShow.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



let giftOpened = false;

gift.addEventListener("click", () => {

  if (giftOpened) return;

  giftOpened = true;

  gift.classList.add("open");

  createHearts(25);

  setTimeout(() => {

    showScreen(letterScreen);

  }, 1200);

});



memoriesBtn.addEventListener("click", () => {

  showScreen(memoriesScreen);

  createHearts(15);

});


finalBtn.addEventListener("click", () => {

  showScreen(finalScreen);

  createHearts(30);

});


restartBtn.addEventListener("click", () => {

  giftOpened = false;

  gift.classList.remove("open");

  showScreen(welcomeScreen);

});



let musicPlaying = false;

musicBtn.addEventListener("click", async () => {

  if (!musicPlaying) {

    try {

      music.volume = 0.7;

      await music.play();

      musicPlaying = true;

      musicBtn.textContent = "♫";
      musicBtn.classList.add("playing");

    } catch (error) {

      console.error("Error al reproducir:", error);

      alert(
        "No se pudo reproducir la música. " +
        "Comprueba que el archivo musica.mp3 esté en la carpeta assets."
      );

    }

  } else {

    music.pause();

    musicPlaying = false;

    musicBtn.textContent = "♪";
    musicBtn.classList.remove("playing");

  }

});



function createHearts(amount = 10) {

  for (let i = 0; i < amount; i++) {

    setTimeout(() => {

      const heart = document.createElement("span");

      heart.classList.add("floating-heart");

      heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

      heart.style.left = Math.random() * 100 + "%";

      heart.style.fontSize =
        (Math.random() * 20 + 12) + "px";

      heart.style.animationDuration =
        (Math.random() * 4 + 5) + "s";

      heartsContainer.appendChild(heart);

      setTimeout(() => {

        heart.remove();

      }, 10000);

    }, i * 100);

  }

}


setInterval(() => {

  if (Math.random() > 0.4) {

    createHearts(1);

  }

}, 1800);
