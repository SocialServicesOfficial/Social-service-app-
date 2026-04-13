const displayNumber = document.getElementById('displayNumber');
const callStatus = document.getElementById('callStatus');
const callTimer = document.getElementById('callTimer');
const dialpad = document.getElementById('dialpad');
const clearBtn = document.getElementById('clearBtn');
const callBtn = document.getElementById('callBtn');
const endBtn = document.getElementById('endBtn');
const muteBtn = document.getElementById('muteBtn');
const speakerBtn = document.getElementById('speakerBtn');

let dialed = '+91';
let inCall = false;
let muted = false;
let speaker = false;
let timer = 0;
let timerInterval;

const renderNumber = () => {
  displayNumber.textContent = dialed;
};

const formatTime = (seconds) => {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  return `${min}:${sec}`;
};

const setInCallState = (state) => {
  inCall = state;
  endBtn.disabled = !state;
  muteBtn.disabled = !state;
  speakerBtn.disabled = !state;
  callBtn.disabled = state;
};

const startTimer = () => {
  timer = 0;
  callTimer.textContent = '00:00';
  timerInterval = setInterval(() => {
    timer += 1;
    callTimer.textContent = formatTime(timer);
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  callTimer.textContent = '00:00';
};

dialpad.addEventListener('click', (event) => {
  const key = event.target.closest('button')?.dataset.key;
  if (!key || inCall) return;
  if (dialed.length < 16) {
    dialed += key;
    renderNumber();
  }
});

clearBtn.addEventListener('click', () => {
  if (inCall) return;
  dialed = '+91';
  renderNumber();
  callStatus.textContent = 'Ready to call';
});

callBtn.addEventListener('click', () => {
  if (dialed.length <= 3) {
    callStatus.textContent = 'Please enter number';
    return;
  }

  callStatus.textContent = `Calling ${dialed}...`;
  setInCallState(true);

  setTimeout(() => {
    if (!inCall) return;
    callStatus.textContent = `Connected with ${dialed}`;
    startTimer();
  }, 1400);

  const telLink = `tel:${dialed.replace(/\s+/g, '')}`;
  window.location.href = telLink;
});

endBtn.addEventListener('click', () => {
  if (!inCall) return;
  setInCallState(false);
  stopTimer();
  callStatus.textContent = 'Call ended';
});

muteBtn.addEventListener('click', () => {
  muted = !muted;
  muteBtn.textContent = muted ? 'Unmute' : 'Mute';
});

speakerBtn.addEventListener('click', () => {
  speaker = !speaker;
  speakerBtn.textContent = speaker ? 'Speaker On' : 'Speaker';
});

renderNumber();
