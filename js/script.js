const image = document.querySelector('img');
const music = document.querySelector('audio');

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progressContainer = document.getElementById('progress-container')
const progressBar = document.getElementById("progress");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const playBtn = document.getElementById("play");

let isPlaying = false;
let songIndex = 0;

const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto Design'
    },
    {
        name: 'jacinto-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design'
    },
    {
        name: 'jacinto-3',
        displayName: 'Goodnight, Disco Queen',
        artist: 'Jacinto Design'
    },
    {
        name: 'metric-1',
        displayName: 'Frint Row',
        artist: 'Jacinto Design'
    }
];

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

function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

function prevSong() {
    songIndex--;
    if(songIndex < 0 ){
        songIndex = songs.length-1
    }
    loadSong(songs[songIndex]);
    playMusic();
}
function nextSong() {
    songIndex++;
    if(songIndex > songs.length-1 ){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playMusic();
}

playBtn.addEventListener('click', ()=>{
    isPlaying ? pauseMusic() : playMusic();
});

prevBtn.addEventListener('click', prevSong);

nextBtn.addEventListener('click', nextSong);

