const audio = document.getElementById('audio');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

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

// Format time as mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}

// Update duration once metadata is loaded
audio.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audio.duration);
  progressBar.max = Math.floor(audio.duration);
});

// Update progress bar and current time
audio.addEventListener('timeupdate', () => {
  progressBar.value = Math.floor(audio.currentTime);
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

// Seek when user drags progress bar
progressBar.addEventListener('input', () => {
  audio.currentTime = progressBar.value;
});
