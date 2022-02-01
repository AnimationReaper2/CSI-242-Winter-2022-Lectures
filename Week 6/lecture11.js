//Install Node: https://nodejs.org/en/download/
//Install and connect JEST: $ npm i --global jest

function add(x, y) {
    return x + y;
}

const TOYS = ["doll", "top", "iPad"];

function getRandomToy() {
  let idx = Math.floor(
      Math.random() * TOYS.length);
  return {
    toy: {
      name: TOYS[idx],
      price: 34.99,
    },
  };
}

function getCartTotal(cart, discount=0){

}

module.exports = { getRandomToy, add, getCartTotal };

