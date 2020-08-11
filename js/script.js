const music = document.querySelector('audio');
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const playBtn = document.getElementById("play");

let isPlaying = false;

function playMusic(){
    isPlaying = true;
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title', 'pause');
    music.play();
}

function pauseMusic(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause','fa-play');
    playBtn.setAttribute('title', 'play');
    music.pause();
}

playBtn.addEventListener('click', ()=>{
    isPlaying ? pauseMusic() : playMusic();
});