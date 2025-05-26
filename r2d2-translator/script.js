const morseCodeDict = {
  'A': '.-',    'B': '-...',  'C': '-.-.',
  'D': '-..',   'E': '.',     'F': '..-.',
  'G': '--.',   'H': '....',  'I': '..',
  'J': '.---',  'K': '-.-',   'L': '.-..',
  'M': '--',    'N': '-.',    'O': '---',
  'P': '.--.',  'Q': '--.-',  'R': '.-.',
  'S': '...',   'T': '-',     'U': '..-',
  'V': '...-',  'W': '.--',   'X': '-..-',
  'Y': '-.--',  'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....',
  '6': '-....', '7': '--...', '8': '---..',
  '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..',
  "'": '.----.', '!': '-.-.--', '/': '-..-.',
  '(': '-.--.',  ')': '-.--.-', '&': '.-...',
  ':': '---...', ';': '-.-.-.', '=': '-...-',
  '+': '.-.-.',  '-': '-....-', '_': '..--.-',
  '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
  ' ': '/'
};

const reverseMorseDict = Object.fromEntries(
  Object.entries(morseCodeDict).map(([k, v]) => [v, k])
);

function encodeMessage() {
  const text = document.getElementById('inputText').value.toUpperCase();
  const encoded = text.split('').map(char => morseCodeDict[char] || '?').join(' ');
  document.getElementById('outputText').value = encoded;

  animateR2D2();
  c3poComplain("Oh my circuits! Another message?");
}

function decodeMessage() {
  const code = document.getElementById('inputText').value.trim();
  const decoded = code.split(' / ').map(word =>
    word.split(' ').map(char => reverseMorseDict[char] || '?').join('')
  ).join(' ');
  document.getElementById('outputText').value = decoded;

  animateR2D2();
  c3poComplain("I'm fluent in over six million forms of communication… unfortunately.");
}

function clearFields() {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
  c3poComplain("Finally, some peace and quiet.");
}

function playBeep() {
  const morse = document.getElementById('outputText').value;
  if (!morse) return;

  let delay = 0;
  for (const char of morse) {
    if (char === '.') {
      setTimeout(() => {
        playDot();
        blinkLight();
      }, delay);
      delay += 200;
    } else if (char === '-') {
      setTimeout(() => {
        playDash();
        blinkLight();
      }, delay);
      delay += 400;
    } else if (char === ' ') {
      delay += 200;
    } else if (char === '/') {
      delay += 400;
    }
  }

  animateR2D2();
  c3poComplain("Beeping again? How utterly primitive.");
}

function blinkLight() {
  const light = document.getElementById('light');
  light.style.opacity = 1;
  setTimeout(() => {
    light.style.opacity = 0;
  }, 150);
}

function animateR2D2() {
  const r2d2 = document.getElementById('r2d2');
  r2d2.style.transform = 'scale(1.3)';
  setTimeout(() => r2d2.style.transform = 'scale(1)', 300);
}

function c3poComplain(msg) {
  const c3po = document.getElementById('c3po');
  c3po.textContent = `C-3PO: ${msg}`;
}
