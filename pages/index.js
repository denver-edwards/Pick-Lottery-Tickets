import Head from "next/head";
import { useState, useEffect } from "react";

import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";

import makeTicket from "./../util/get-rand-num.js";

export default function Home() {
  const [game, setGame] = useState("Cash4Life");
  const [tickets, setTickets] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();

  const [showModal, setShowModal] = useState(false);

  function onValueChange(e) {
    setGame(e.target.name);
  }
  function handleTickets(e) {
    setTickets(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTitle(tickets + " Ticket for " + game);

    // circle/bubble around each nuber
    setDescription(makeTicket(game, tickets));
  }

  function TicketModal({ title, description }) {
    return (
      <Modal
        size="regular"
        active={showModal}
        toggler={() => setShowModal(false)}
      >
        <ModalHeader toggler={() => setShowModal(false)}>{title} </ModalHeader>
        <ModalBody>
          <div className="text-center">
            {description
              ? description.map((item, index) => {
                  console.log("item", item);
                  return (
                    <div key={index} className="block">
                      {item}
                    </div>
                  );
                })
              : null}
          </div>
        </ModalBody>
        <ModalFooter>
          <button onClick={(e) => setShowModal(false)}>Close</button>
        </ModalFooter>
      </Modal>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form onSubmit={handleSubmit}>
        <div>
          <label
            className={
              "inline-flex items-center mr-2 px-4 hover:text-green-900" +
              (game === "Cash4Life"
                ? " bg-green-400 rounded-xl text-green-800"
                : "")
            }
          >
            <input
              type="radio"
              className="form-radio"
              name="Cash4Life"
              value="1"
              checked={game === "Cash4Life"}
              onChange={onValueChange}
            />
            <span className="m-2">Cash 4 Life</span>
          </label>

          <label
            className={
              "inline-flex items-center mr-2 px-4 hover:text-green-900" +
              (game === "MegaMillions"
                ? " bg-green-300 rounded-xl text-green-800"
                : "")
            }
          >
            <input
              type="radio"
              className="form-radio"
              name="MegaMillions"
              value="2"
              checked={game === "MegaMillions"}
              onChange={onValueChange}
            />
            <span className="m-2">Mega Millions</span>
          </label>

          <label
            className={
              "inline-flex items-center mr-2 px-4 hover:text-green-900" +
              (game === "Powerball"
                ? " bg-green-300 rounded-xl text-green-800"
                : "")
            }
          >
            <input
              type="radio"
              className="form-radio"
              name="Powerball"
              value="3"
              checked={game === "Powerball"}
              onChange={onValueChange}
            />
            <span className="m-2">Powerball</span>
          </label>

          <label
            className={
              "inline-flex items-center mr-2 px-4 hover:text-green-900" +
              (game === "NumbersEve"
                ? " bg-green-300 rounded-xl text-green-800"
                : "")
            }
          >
            <input
              type="radio"
              className="form-radio"
              name="NumbersEve"
              value="4"
              checked={game === "NumbersEve"}
              onChange={onValueChange}
            />
            <span className="m-2">Numbers Eve</span>
          </label>
        </div>

        <hr className="my-4" />

        {/* info about each game(number range, closing time, drawing time, current lottery) + link to specific nylottery*/}
        {/*add anim*/}
        <div>
          <span>Text</span>

          <div id="time" className="float-right">
            <span>Closing time | </span>
            <span>Drawing time</span>
          </div>

          <div>Numbers to choose from(range)</div>
        </div>

        <hr className="my-4" />

        <div>
          <label htmlFor="number" className="pr-2">
            Number of tickets (1-10):
          </label>
          <input
            type="number"
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id=""
            name="number"
            min="1"
            max="10"
            value={tickets}
            onChange={handleTickets}
          />
        </div>

        <div className="text-center">
          <button
            className="bg-green-500 text-white rounded py-2 px-4 my-4"
            onClick={() => setShowModal(true)}
          >
            Get Numbers
          </button>
        </div>
        {showModal ? (
          <TicketModal title={title} description={description} />
        ) : null}
      </form>
    </div>
  );
}
