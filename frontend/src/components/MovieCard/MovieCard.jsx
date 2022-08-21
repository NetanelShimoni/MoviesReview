import React from "react";

export default function MovieCard() {
  return (
    <div className="grid grid-rows-3 text-white font-semibold text-lg   max-w-sm h-40 bg-black border-2 border-green-600-700 ">
      <div className="grid grid-cols-2  p-2  ">
        <img src="./logo.jpg" className="h-9 pl-4 " />
        <div>
          <p className="relative right-20 "> name of Movies</p>
          <p className="relative text-amber-100 right-20">18/02/1995</p>
        </div>
      </div>

      <div className="pt-3 p-2">
        <p>JANNER</p>
      </div>
      <div className="grid grid-cols-2 p-2">
        <p>bb</p>
        <button className="text-green-400 outline-pink-500">
          More Information
        </button>
      </div>
    </div>
  );
}
