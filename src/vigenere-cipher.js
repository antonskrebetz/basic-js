class VigenereCipheringMachine {
  constructor(type = true) {
      this.type = type;
      
  }

  encrypt(message, key) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (!message || !key) throw new Error('Error');

    let mesPos, keyPos, count = 0, result = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    for (let i = 0; i < message.length; i++) {
      mesPos = letters.indexOf(message[i]);
      if (mesPos === -1) {
          result.push(message[i]);
          continue;
      }
      keyPos = letters.indexOf(key[count % key.length]);
      result.push(letters[(mesPos + keyPos) % 26]);
      count++;
    }
    return this.type ? result.join('') : result.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (!encryptedMessage || !key) throw new Error('Error');

    let mesPos, keyPos, count = 0, result = [];
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < encryptedMessage.length; i++) {
      mesPos = letters.indexOf(encryptedMessage[i]);
      if (mesPos === -1) {
          result.push(encryptedMessage[i]);
          continue;
      }
      keyPos = letters.indexOf(key[count % key.length]);
      result.push(letters[(mesPos - keyPos + 26) % 26]);
      count++;
    }
    return this.type ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;