const Cash4Life = { max: 60, ballmax: 4, draws: 5 };
const MegaMillions = { max: 70, ballmax: 25, draws: 5 };
const Powerball = { max: 69, ballmax: 26, draws: 5 };

export function getRandomInt(game, max) {
  const randomBuffer = new Uint32Array(1);

  window.crypto.getRandomValues(randomBuffer);

  let randomNumber = randomBuffer[0] / (0xffffffff + 1);

  let min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(randomNumber * (max - min + 1)) + min;
}

export default function makeTicket(game, tickets) {
  switch (game) {
    case "Cash4Life":
      game = Cash4Life;
      break;
    case "MegaMillions":
      game = MegaMillions;
      break;
    case "Powerball":
      game = Powerball;
      break;
    default:
  }

  var wholeticket = [];

  for (let j = 0; j < tickets; j++) {
    var listofNums = [];

    for (let i = 0; i < game.draws; i++) {
      let temp = getRandomInt(game, game.max);

      while (i > 0 && listofNums.includes(temp)) {
        temp = getRandomInt(game, game.max);
      }

      if (temp < 10) {
        temp = "0" + temp;
      }

      listofNums.push(temp + " "); //make regular nums
    }

    listofNums.sort((a, b) => a - b);

    let gameball = getRandomInt(game, game.ballmax);

    if (gameball < 10) {
      gameball = "0" + gameball;
    }

    listofNums.push(gameball); //make power ball num
    wholeticket.push(listofNums);
  }

  return wholeticket;
}
