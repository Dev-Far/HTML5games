// Create the background audio
const audio = new Audio('music/Game_Music.mp3'); // Replace with your music file path
audio.loop = true;
audio.volume = 0.5;

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

window.addEventListener('load', playAudio);

// Get the button elements
const playButton = document.getElementById("play");
const leaderboardButton = document.getElementById("leaderboard");
const supportButton = document.getElementById("support");
const loginButton = document.getElementById("login");

// Create the button SFX audio
const buttonSFX = new Audio("music/Button.mp3"); // Replace with your sound file

// Add event listeners to all buttons
[playButton, leaderboardButton, supportButton, loginButton].forEach(button => {
  button.addEventListener("click", () => {
    buttonSFX.currentTime = 0; // Reset the audio to the start
    buttonSFX.play();
  });
});

// playButton.addEventListener("click", () => {
//     window.open('https://pixelskimmergames.netlify.app/Games/click-the-target/index.html')
// } )
