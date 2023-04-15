const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  myChain: [],
  addLink(value) {
    if (value === undefined) {
      // this.myChain.push(`( )~~`);
      this.myChain.push(`( )`);
    } else {
      // this.myChain.push(`( ${value} )~~`);
      this.myChain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.myChain.length ||
      typeof position !== 'number' ||
      !Number.isInteger(position)
    ) {
      this.myChain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.myChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.myChain.reverse();
    return this;
  },
  getLength() {
    return this.myChain.length;
  },
  finishChain() {
    // let lastElementChain = this.myChain.pop();
    // this.myChain.push(lastElementChain.slice(0, -2));
    // return this.myChain.join('');
    // return this.myChain.join('~~');
    const result = this.myChain.map((el) => `${el}`).join('~~');
    this.myChain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
