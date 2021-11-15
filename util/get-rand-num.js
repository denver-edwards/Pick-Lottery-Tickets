export const lotterygames = {
  Cash4Life: {
    closetime: "08:45 PM",
    drawtime: "09:00 PM",
    drawdays: "Daily",
    min: 1,
    max: 60,
    ballmax: 4,
    draws: 5,
    allowrepeat: false,
    price: "$2",
    odds: "1 in 7.76",
    link: "https://nylottery.ny.gov/draw-game?game=cash4life",
  },
  MegaMillions: {
    closetime: "10:45 PM",
    drawtime: "11:00 PM",
    drawdays: "Tues, Fri",
    min: 1,
    max: 70,
    ballmax: 25,
    draws: 5,
    allowrepeat: false,
    price: "$2",
    odds: "1 in 24",
    link: "https://nylottery.ny.gov/draw-game?game=megamillions",
  },
  Powerball: {
    closetime: "10:00 PM",
    drawtime: "10:59 PM",
    drawdays: "Mon, Wed, Sat",
    min: 1,
    max: 69,
    ballmax: 26,
    draws: 5,
    allowrepeat: false,
    price: "$2",
    odds: "1 in 24.90",
    link: "https://nylottery.ny.gov/draw-game?game=powerball",
  },
  Pick10: {
    closetime: "08:00 PM",
    drawtime: "08:30 PM",
    drawdays: "Daily",
    min: 1,
    max: 80,
    ballmax: null,
    draws: 10,
    allowrepeat: false,
    price: "$1",
    odds: "1 in 17",
    link: "https://nylottery.ny.gov/draw-game?game=pick10",
  },
  Win4: {
    closetime: "02:15 PM | 10:20 PM",
    drawtime: "02:30 PM | 10:30 PM",
    drawdays: "Daily",
    min: 0,
    max: 9,
    ballmax: null,
    draws: 4,
    allowrepeat: true,
    price: "$0.50 or $1",
    odds: "Depends on the method",
    link: "https://nylottery.ny.gov/draw-game?game=win4",
  },
  Take5: {
    closetime: "02:15 PM | 10:20 PM",
    drawtime: "02:30 PM | 10:30 PM",
    drawdays: "Daily",
    min: 1,
    max: 39,
    ballmax: null,
    draws: 5,
    allowrepeat: false,
    price: "$1",
    odds: "1 in 8.77",
    link: "https://nylottery.ny.gov/draw-game?game=take5",
  },
  Numbers: {
    closetime: "02:15 PM | 10:20 PM",
    drawtime: "02:30 PM | 10:30 PM",
    drawdays: "Daily",
    min: 0,
    max: 9,
    ballmax: null,
    draws: 3,
    allowrepeat: true,
    price: "$0.50 or $1",
    odds: "Depends on the method",
    link: "https://nylottery.ny.gov/draw-game?game=numbers",
  },
};

export function getRandomInt(game, min, max) {
  const randomBuffer = new Uint32Array(1);

  window.crypto.getRandomValues(randomBuffer);

  let randomNumber = randomBuffer[0] / (0xffffffff + 1);

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(randomNumber * (max - min + 1)) + min;
}

export default function makeTicket(game, tickets) {
  switch (game) {
    case "Cash4Life":
      game = lotterygames["Cash4Life"];
      break;
    case "MegaMillions":
      game = lotterygames["MegaMillions"];
      break;
    case "Powerball":
      game = lotterygames["Powerball"];
      break;
    case "Pick10":
      game = lotterygames["Pick10"];
      break;
    case "Win4":
      game = lotterygames["Win4"];
      break;
    case "Take5":
      game = lotterygames["Take5"];
      break;
    case "Numbers":
      game = lotterygames["Numbers"];
      break;
  }

  var wholeticket = [];

  for (let j = 0; j < tickets; j++) {
    var listofNums = [];

    // Draw each number
    for (let i = 0; i < game.draws; i++) {
      let temp = getRandomInt(game, game.min, game.max);

      // exclude duplicate numbers
      if (game.allowrepeat == false) {
        while (i > 0 && listofNums.includes(temp)) {
          temp = getRandomInt(game, game.min, game.max);
        }
      }

      if (temp < 10) temp = "0" + temp;

      listofNums.push(temp + " ");
    }

    listofNums.sort((a, b) => a - b);

    // Creates Game Ball if needed
    if (game.ballmax != null) {
      let gameball = getRandomInt(game, 1, game.ballmax); // assumes game ball min = 1

      if (gameball < 10) gameball = "0" + gameball;
      listofNums.push(gameball);
    }

    wholeticket.push(listofNums);
  }

  return wholeticket;
}
