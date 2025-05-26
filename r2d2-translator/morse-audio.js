const context = new (window.AudioContext || window.webkitAudioContext)();

function beep(duration = 150, frequency = 600) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
  }, duration);
}

function playDot() {
  beep(150, 800);
}

function playDash() {
  beep(400, 600);
}
