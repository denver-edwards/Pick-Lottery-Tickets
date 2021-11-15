import Head from "next/head";
import { useState, useEffect } from "react";

import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";

import makeTicket, { lotterygames } from "./../util/get-rand-num.js";

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
        <ModalHeader toggler={() => setShowModal(false)}>
          <span className="px-6">{title}</span>
        </ModalHeader>
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
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-sm">
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
              (game === "Pick10"
                ? " bg-green-300 rounded-xl text-green-800"
                : "")
            }
          >
            <input
              type="radio"
              className="form-radio"
              name="Pick10"
              value="4"
              checked={game === "Pick10"}
              onChange={onValueChange}
            />
            <span className="m-2">Pick 10</span>
          </label>

          <label
            className={
              "inline-flex items-center mr-2 px-4 hover:text-green-900" +
              (game === "Win4" ? " bg-green-300 rounded-xl text-green-800" : "")
            }
          >
            <input
              type="radio"
              className="form-radio"
              name="Win4"
              value="5"
              checked={game === "Win4"}
              onChange={onValueChange}
            />
            <span className="m-2">Win 4</span>
          </label>

          <label
            className={
              "inline-flex items-center mr-2 px-4 hover:text-green-900" +
              (game === "Take5"
                ? " bg-green-300 rounded-xl text-green-800"
                : "")
            }
          >
            <input
              type="radio"
              className="form-radio"
              name="Take5"
              value="6"
              checked={game === "Take5"}
              onChange={onValueChange}
            />
            <span className="m-2">Take 5</span>
          </label>

          <label
            className={
              "inline-flex items-center mr-2 px-4 hover:text-green-900" +
              (game === "Numbers"
                ? " bg-green-300 rounded-xl text-green-800"
                : "")
            }
          >
            <input
              type="radio"
              className="form-radio"
              name="Numbers"
              value="7"
              checked={game === "Numbers"}
              onChange={onValueChange}
            />
            <span className="m-2">Numbers</span>
          </label>
        </div>

        <hr className="my-4" />

        {/* info about each game(number range, closing time, drawing time, current lottery) + link to specific nylottery*/}
        {/*add anim*/}
        <div className="flex flex-row">
          <div className="w-4/5">
            <div>
              <span className="text-green-600">{lotterygames[game].draws}</span>{" "}
              Numbers to choose from: {lotterygames[game].min}-
              {lotterygames[game].max}
            </div>
            {lotterygames[game].ballmax != null ? (
              <div>
                1 Lottery ball to choose from: 1-{lotterygames[game].ballmax}
              </div>
            ) : null}
          </div>
          <div id="time" className="block w-1/5">
            <p className="rounded-xl bg-blue-200 px-2 mb-2">
              Draw Days: &nbsp;{lotterygames[game].drawdays}
            </p>
            <p className="rounded-xl bg-blue-200 px-2 mb-2">
              Closing time: &nbsp;{lotterygames[game].closetime}
            </p>
            <p className="rounded-xl bg-blue-200 px-2">
              Drawing time: {lotterygames[game].drawtime}
            </p>
          </div>
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
          <div className="float-right pr-8 text-green-400 font-medium hover:text-green-800">
            <a>Show history</a>
          </div>
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
