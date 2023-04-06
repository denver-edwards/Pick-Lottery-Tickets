import Image from "next/image";
import Link from "next/link";
import { Select, Option } from "@material-tailwind/react";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import Footer from "./../components/Footer.js";
import Modal from "./../components/Modal.js";
import { generateTicket } from "./../util/get-rand-num.js";
import { nationwidegame, stategame } from "./../util/games.js";

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

  const LotteryGame = ({ game }) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <div className="p-6 h-72 bg-lucky">
        <div className="p-6 h-60 bg-white rounded-lg shadow-md">
          <div className="h-12 relative">
            <Image
              src={game.imagesrc}
              alt={game.name + " Logo"}
              layout="fill"
              objectFit="contain"
              quality={100}
              draggable="false"
            />
          </div>

          <button
            className="bg-green-400 rounded-3xl py-2 px-4 block hover:bg-green-700"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <span className="text-white">Generate Ticket</span>
            <IoIosArrowForward className="inline-block" />
          </button>

          {showModal ? (
            <Modal
              name={game.name}
              ticket={generateTicket(
                game.min,
                game.max,
                game.numberofballs,
                game.repeating,
                game.hasball,
                game.ballmin,
                game.ballmax
              )}
              hasball={game.hasball}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ) : null}

          <Link href={game.link}>
            <a className="text-blue-500 hover:text-blue-800">
              Visit the Official Website
            </a>
          </Link>

          <div className="w-60">
            <div className="float-left">
              <span className="block">Draw Time</span>
              <span>{game.drawtime}</span>
            </div>
            <div className="float-right">
              <span className="block">Draw Date</span>
              <span>{game.drawdate}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const NationWideGames = () => {
    return (
      <>
        {Object.values(nationwidegame).map((game, index) =>
          game ? <LotteryGame key={index} game={game} /> : null
        )}
      </>
    );
  };

  return (
    <>
      {/*<div className="header-bg h-60"></div>*/}
      <div className="min-h-screen flex flex-col ">
        <Selection />
        <NationWideGames />
        <div className="flex-grow bg-lucky">
          {state
            ? Object.values(stategame[state]).map((game, index) =>
                game ? <LotteryGame key={index} game={game} /> : null
              )
            : null}
        </div>
        <Footer />
      </div>
    </>
  );
}
