import Image from "next/image";
import Link from "next/link";
import { Select, Option } from "@material-tailwind/react";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import Footer from "./../components/Footer.js";

import { generateTicket } from "./../util/get-rand-num.js";

const nationwidegame = {
  megamillions: {
    name: "MegaMillions",
    imagesrc: "/logo/logo-megamillion.png",
    link: "https://www.megamillions.com/",
    drawtime: "11:00 PM",
    drawdate: "Tue & Fri",
    numberofballs: "5",
    min: "1",
    max: "70",
    repeating: false,
    ballmin: "1",
    ballmax: "25",
    cost: "$2",
    odds: "1 in 24.00",
  },
  powerball: {
    name: "Powerball",
    imagesrc: "/logo/logo-powerball.png",
    link: "https://www.powerball.com/games/home",
    drawtime: "10:59 PM",
    drawdate: "Mon, Wed & Sat",
    numberofballs: "5",
    min: "1",
    max: "69",
    repeating: false,
    ballmin: "1",
    ballmax: "26",
    cost: "$2",
    odds: "1 in 24.90",
  },
};

const stategame = {
  ny: {
    cash4life: {
      name: "Cash4Life",
      imagesrc: "/logo/logo-cash4life.png",
      link: "https://nylottery.ny.gov/draw-game?game=cash4life",
      drawtime: "9:00 PM",
      drawdate: "Daily",
      numberofballs: "5",
      min: "1",
      max: "60",
      repeating: false,
      ballmin: "1",
      ballmax: "4",
      cost: "$2",
      odds: "1 in 7.76",
    },
    numbers: {
      name: "Numbers",
      imagesrc: "/logo/logo-numbers.png",
      link: "https://nylottery.ny.gov/draw-game?game=numbers",
      drawtime: "2:15 PM & 10:20 PM",
      drawdate: "Daily",
      numberofballs: "3",
      min: "0",
      max: "9",
      repeating: true,
      ballmin: "",
      ballmax: "",
      cost: "$0.50 or $1",
      odds: "",
    },
    pick10: {
      name: "Pick10",
      imagesrc: "/logo/logo-pick10.png",
      link: "https://nylottery.ny.gov/draw-game?game=pick10",
      drawtime: "8:30 PM",
      drawdate: "Daily",
      numberofballs: "10",
      min: "1",
      max: "80",
      repeating: false,
      ballmin: "",
      ballmax: "",
      cost: "$1",
      odds: "1 in 17.00",
    },
    take5: {
      name: "Take5",
      imagesrc: "/logo/logo-take5.png",
      link: "https://nylottery.ny.gov/draw-game?game=take5",
      drawtime: "2:15 PM & 10:20 PM",
      drawdate: "Daily",
      numberofballs: "5",
      min: "1",
      max: "39",
      repeating: false,
      ballmin: "",
      ballmax: "",
      cost: "$1",
      odds: "1 in 8.77",
    },
    win4: {
      name: "Win4",
      imagesrc: "/logo/logo-win4.png",
      link: "https://nylottery.ny.gov/draw-game?game=win4",
      drawtime: "2:15 PM & 10:20 PM",
      drawdate: "Daily",
      numberofballs: "4",
      min: "0",
      max: "9",
      repeating: true,
      ballmin: "",
      ballmax: "",
      cost: "$0.50 or $1",
      odds: "",
    },
    nylotto: {
      name: "NYLotto",
      imagesrc: "/logo/logo-nylotto.png",
      link: "https://nylottery.ny.gov/draw-game?game=lotto",
      drawtime: "8:15 PM",
      drawdate: "Wed & Sat",
      numberofballs: "6",
      min: "1",
      max: "59",
      ballmin: "",
      ballmax: "",
      cost: "$1",
      odds: "1 in 92.05",
    },
  },
  nj: {
    njlot: {
      name: "Temp",
      imagesrc: "/logo/logo-cash4life.png",
      link: "https://nylottery.ny.gov/draw-game?game=cash4life",
      drawtime: "5PM",
      drawdate: "3PM",
      numberofballs: "6",
      min: "1",
      max: "59",
      ballmin: "",
      ballmax: "",
      cost: "$1",
      odds: "1 in 92.05",
    },
  },
};

export default function Home() {
  const [state, setState] = useState("");
  function handleState(e) {
    setState(e.target.value);
  }

  const Selection = () => {
    return (
      <div className="h-12 p-4 my-8">
        <div className="font-bold text-purple-700 inline-block">
          Lottery Selection
        </div>
        <div className="w-60 inline-block float-right">
          <select
            name="state"
            onChange={(e) => handleState(e)}
            value={state}
            className="border rounded-3xl py-2 px-12"
          >
            <option value="">Select State</option>
            <option value="ny">New York</option>
            <option value="nj">New Jersey</option>
          </select>
        </div>
      </div>
    );
  };

  const LotteryGame = ({
    name,
    imagesrc,
    link,
    drawtime,
    drawdate,
    priority,
  }) => {
    let game = "";

    if ((name == "Powerball") | (name == "MegaMillions")) {
      game = nationwidegame[name.toLowerCase()];
    } else {
      game = stategame[state][name.toLowerCase()];
    }

    return (
      <div className="p-6 h-72 bg-lucky">
        <div className="p-6 h-60 bg-white rounded-lg shadow-md">
          <div className="h-12 relative">
            <Image
              src={imagesrc}
              alt={name + " Logo"}
              layout="fill"
              objectFit="contain"
              quality={100}
              draggable="false"
              priority={priority}
            />
          </div>

          <button
            className="bg-green-400 rounded-3xl py-2 px-4 block hover:bg-green-700"
            onClick={() =>
              console.log(
                generateTicket(
                  game.min,
                  game.max,
                  game.numberofballs,
                  game.repeating,
                  game.ballmin,
                  game.ballmax
                )
              )
            }
          >
            <span className="text-white">Generate Ticket</span>
            <IoIosArrowForward className="inline-block" />
          </button>
          <Link href={link}>
            <a className="text-blue-500 hover:text-blue-800">
              Visit the Official Website
            </a>
          </Link>

          <div className="w-60">
            <div className="float-left">
              <span className="block">Draw Time</span>
              <span>{drawtime}</span>
            </div>
            <div className="float-right">
              <span className="block">Draw Date</span>
              <span>{drawdate}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const NationWideGames = () => {
    return (
      <>
        <LotteryGame
          name="MegaMillions"
          imagesrc="/logo/logo-megamillion.png"
          link="https://www.megamillions.com/"
          drawtime="11:00 PM"
          drawdate="Tue & Fri"
          priority="true"
        />
        <LotteryGame
          name="Powerball"
          imagesrc="/logo/logo-powerball.png"
          link="https://www.powerball.com/games/home"
          drawtime="10:59 PM"
          drawdate="Mon, Wed & Sat"
        />
      </>
    );
  };

  return (
    <>
      <div className="header-bg h-96">Header</div>
      <Selection />
      <NationWideGames />

      {state
        ? Object.values(stategame[state]).map((game, index) =>
            game ? (
              <LotteryGame
                key={index}
                name={game.name}
                imagesrc={game.imagesrc}
                link={game.link}
                drawtime={game.drawtime}
                drawdate={game.drawdate}
              />
            ) : null
          )
        : null}
      <Footer />
    </>
  );
}
