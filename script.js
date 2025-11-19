const audio = document.getElementById('music');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const repeatBtn = document.getElementById('repeat-btn');
const status = document.getElementById('status');

let repeatEnabled = true;

playBtn.addEventListener('click', () => {
  audio.play();
  status.textContent = 'Playing...';
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
  status.textContent = 'Paused.';
});

repeatBtn.addEventListener('click', () => {
  repeatEnabled = !repeatEnabled;
  status.textContent = repeatEnabled ? 'Repeat ON' : 'Repeat OFF';
});

audio.addEventListener('ended', () => {
  if (repeatEnabled) {
    audio.currentTime = 0;
    audio.play();
    status.textContent = 'Repeating...';
  } else {
    status.textContent = 'Playback finished.';
  }
});
