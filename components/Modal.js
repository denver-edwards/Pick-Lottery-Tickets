import { useState } from "react";

export default function Modal({
  name,
  ticket,
  hasball,
  showModal,
  setShowModal,
}) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-6 border-b border-solid border-grey-300 rounded-t">
              <h3
                className="text-3xl font-semibold text-grey-800"
                id="modal-title"
              >
                {name} Ticket
              </h3>
              {/*  <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>*/}
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {ticket.map((x, index, arr) => (
                  <span
                    key={index}
                    className={
                      hasball && arr.length - 1 === index
                        ? "mx-2 p-3 bg-green-600 shadow-xl text-white rounded-full"
                        : "mx-2 p-3 bg-white shadow-xl text-green-600 rounded-full"
                    }
                  >
                    {x}
                  </span>
                ))}
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end pb-4 rounded-b">
              <button
                className="text-grey-700 hover:text-grey-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Save
              </button>
              <button
                className="text-red-500 hover:text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
