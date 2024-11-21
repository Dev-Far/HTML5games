const aside = document.getElementById("music-section");
// aside.style.translate = 0;


// Create the background audio
const audio1 = new Audio('./music/Game_Music.mp3'); // Replace with your music file path
const audio2 = new Audio('./music/vintage-movie-piano-252205.mp3'); // Replace with your music file path
audio1.loop = true;
audio2.volume = 0.3;
audio1.loop = true;
audio1.volume = 0.3;

function playAudio1() {
    audio1.play();
    audio2.pause();
    aside.classList.toggle("open");
    console.log(aside.classList); // Check if "open" is toggled
}
function playAudio2() {
    audio2.play();
    audio1.pause();
    aside.classList.toggle("open");
    console.log(aside.classList); // Check if "open" is toggled
}

function pauseAudio() {
    audio1.pause();
    audio2.pause();
    // aside.classList.toggle("open");
    // console.log(aside.classList); // Check if "open" is toggled
}

window.addEventListener("DOMContentLoaded", playAudio1);

// Get the button elements
const playButton = document.getElementById("play");
const leaderboardButton = document.getElementById("leaderboard");
const supportButton = document.getElementById("support");
const loginButton = document.getElementById("login");

// Create the button SFX audio
const buttonSFX = new Audio("./music/SFX/buttonSFX.mp3"); // Replace with your sound file

buttonSFX.volume = 1.0; // Set the volume to maximum

console.log(playButton, leaderboardButton, supportButton, loginButton);

const buttonSFX = new Audio("./music/SFX/Button.mp3"); // Replace with your sound file

// Add event listeners to all buttons
[playButton, leaderboardButton, supportButton, loginButton].forEach(button => {
    button.addEventListener("click", () => {
        console.log("Button clicked!"); // Debugging log
        buttonSFX.currentTime = 0; // Reset the audio to the start
        buttonSFX.play();
    });
    
});

playButton.addEventListener("click", () => {
    setTimeout(() => {
        window.open('./Games/index.html');
    }, 500)
} );

// playButton.addEventListener("click", () => {
//     window.open('./Games/click-the-target/index.html');
// } );

// playButton.addEventListener("click", () => {
//     window.open('./Games/click-the-target/index.html');
// } );
// playButton.addEventListener("click", () => {
//     window.open('./Games/click-the-target/index.html');
// } );



