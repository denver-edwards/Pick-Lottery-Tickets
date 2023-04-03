import { integer, browserCrypto } from "random-js";

export function getRandomInt(min, max) {
  const engine = browserCrypto;
  const distribution = integer(min, max);
  return distribution(engine);
}

export function generateTicket(min, max, numofballs, repeat, ballmin, ballmax) {
  var listofNums = [];

  // Draw each number
  for (let i = 0; i < numofballs; i++) {
    let temp = getRandomInt(min, max);

    // exclude duplicate numbers
    if (repeat == false) {
      while (i > 0 && listofNums.includes(temp)) {
        temp = getRandomInt(min, max);
      }
    }

    if (temp < 10) temp = "0" + temp;
    listofNums.push(temp);
    listofNums.sort((a, b) => a - b);
  }

  // Creates Game Ball if needed
  if (ballmin.length > 0) {
    let gameball = getRandomInt(ballmin, ballmax);

    if (gameball < 10) gameball = "0" + gameball;
    listofNums.push(gameball);
  }

  return listofNums;
}
