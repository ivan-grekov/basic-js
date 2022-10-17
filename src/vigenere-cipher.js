const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const arrOfMessage = message.toUpperCase().split("");
    message = message.toUpperCase().split(" ").join("");

    key = key.padEnd(message.length, key).toUpperCase();

    let cipher = "";

    for (let i = 0; i < arrOfMessage.length; i++) {
      if (arrOfMessage[i] === " ") {
        cipher += arrOfMessage[i];
        arrOfMessage.splice(i, 1);
      }
      if (
        arrOfMessage[i].charCodeAt() < "A".charCodeAt() ||
        arrOfMessage[i].charCodeAt() > "Z".charCodeAt()
      ) {
        cipher += arrOfMessage[i];
      } else {
        let uniCode =
          ((arrOfMessage[i].charCodeAt() + key[i].charCodeAt()) % 26) + 65;

        cipher += String.fromCharCode(uniCode);
      }
    }

    return this.mode ? cipher : cipher.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const arrOfMessage = message.toUpperCase().split("");

    message = message.toUpperCase().split(" ").join("");

    key = key.padEnd(message.length, key).toUpperCase();

    let cipher = "";

    for (let i = 0; i < arrOfMessage.length; i++) {
      if (arrOfMessage[i] === " ") {
        cipher += arrOfMessage[i];
        arrOfMessage.splice(i, 1);
      }

      if (
        arrOfMessage[i].charCodeAt() < "A".charCodeAt() ||
        arrOfMessage[i].charCodeAt() > "Z".charCodeAt()
      ) {
        cipher += arrOfMessage[i];
      } else {
        let uniCode =
          ((arrOfMessage[i].charCodeAt() + 26 - key[i].charCodeAt()) % 26) + 65;
        cipher += String.fromCharCode(uniCode);
      }
    }

    return this.mode ? cipher : cipher.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
