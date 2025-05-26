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
}

function decodeMessage() {
  const code = document.getElementById('inputText').value.trim();
  const decoded = code.split(' / ').map(word =>
    word.split(' ').map(char => reverseMorseDict[char] || '?').join('')
  ).join(' ');
  document.getElementById('outputText').value = decoded;
}

function clearFields() {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
}

function playBeep() {
  const morse = document.getElementById('outputText').value;
  if (!morse) return;

  let delay = 0;
  for (const char of morse) {
    if (char === '.') {
      setTimeout(() => playDot(), delay);
      delay += 200;
    } else if (char === '-') {
      setTimeout(() => playDash(), delay);
      delay += 400;
    } else if (char === ' ') {
      delay += 200;
    } else if (char === '/') {
      delay += 400;
    }
  }
}