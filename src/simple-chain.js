const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  resChain: [],
  getLength() {
    return this.resChain.length;
  },
  addLink(value) {
    if (
      value ||
      value === null ||
      isNaN(value) ||
      value === 0 ||
      value === false
    ) {
      this.resChain.push(`( ${value} )`);
    } else {
      this.resChain.push("( )");
    }
    return this;
  },
  removeLink(position) {
    if (
      typeof position == "number" &&
      Number.isInteger(position) &&
      this.resChain.length >= position &&
      position > 0
    ) {
      this.resChain.splice(position - 1, 1);
    } else {
      this.resChain = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.resChain.reverse();
    return this;
  },
  finishChain() {
    let simpleChain = this.resChain.join("~~");
    this.resChain = [];
    return simpleChain;
  },
};

module.exports = {
  chainMaker,
};
