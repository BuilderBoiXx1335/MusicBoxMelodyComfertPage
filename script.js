const audio = document.getElementById('audio');

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}

function repeatSong() {
  audio.currentTime = 0;
  audio.play();
}
