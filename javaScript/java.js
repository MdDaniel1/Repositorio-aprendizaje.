const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const btnEncrypt = document.getElementById('btn-encrypt');
const btnDecrypt = document.getElementById('btn-decrypt');
const encodedDiv = document.getElementById('msj-encript');

function encryptText() {
  const input = inputText.value.toLowerCase(); 
  let output = '';

  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case 'e':
        output += 'enter';
        break;
      case 'i':
        output += 'imes';
        break;
      case 'a':
        output += 'ai';
        break;
      case 'o':
        output += 'ober';
        break;
      case 'u':
        output += 'ufat';
        break;
      default:
        output += input[i];
    }
  }

  outputText.value = output;
  encodedDiv.style.display = 'block'; 
}

function decryptText() {
  const input = inputText.value.toLowerCase(); 
  let output = '';

  let i = 0;
  while (i < input.length) {
    switch (input[i]) {
      case 'e':
        if (input.slice(i, i + 5) === 'enter') {
          output += 'e';
          i += 4;
        } else {
          output += input[i];
        }
        break;
      case 'i':
        if (input.slice(i, i + 4) === 'imes') {
          output += 'i';
          i += 3;
        } else {
          output += input[i];
        }
        break;
      case 'a':
        if (input.slice(i, i + 2) === 'ai') {
          output += 'a';
          i += 1;
        } else {
          output += input[i];
        }
        break;
      case 'o':
        if (input.slice(i, i + 4) === 'ober') {
          output += 'o';
          i += 3;
        } else {
          output += input[i];
        }
        break;
      case 'u':
        if (input.slice(i, i + 4) === 'ufat') {
          output += 'u';
          i += 3;
        } else {
          output += input[i];
        }
        break;
      default:
        output += input[i];
    }
    i++;
  }

  outputText.value = output;
  encodedDiv.style.display = 'block'; 
}

btnEncrypt.addEventListener('click', encryptText);
btnDecrypt.addEventListener('click', decryptText);
