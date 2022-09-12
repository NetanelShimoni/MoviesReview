import React, { useState } from "react";
import ReactCardFLip from "react-card-flip";
import FlipCardFront from "../FlipCardFront/FlipCardFront";

export default function MovieCard(movie) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleOnClickOnCard = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    // <div className=" h-fit">
    <ReactCardFLip isFlipped={isFlipped} flipDirection={"horizontal"}>
      <div
        onClick={handleOnClickOnCard}
        className={
          "cursor-pointer rounded-2xl dark:shadow-blue-800  w-40 shadow-2xl h-fit m-6"
        }
      >
        <FlipCardFront movie={movie?.movie} />
      </div>
      <div
        onClick={handleOnClickOnCard}
        className={
          "dark:text-amber-100 dark:shadow-blue-800 cursor-pointer rounded-2xl w-40 shadow-2xl h-52 m-6"
        }
      >
        {" "}
        This is backCard
        <button onClick={handleOnClickOnCard}>CLick to flip</button>
      </div>
    </ReactCardFLip>
    //</div>
    // <div className="mdc-card__actions">
    //   <button className="mdc-button mdc-card__action mdc-card__action--button">
    //     <div className="mdc-button__ripple"></div>
    //     <span className="mdc-button__label">Action 1</span>
    //   </button>
    //   <button className="mdc-button mdc-card__action mdc-card__action--button">
    //     <div className="mdc-button__ripple"></div>
    //     <span className="mdc-button__label">Action 2</span>
    //   </button>
    // </div>
    // <div className="bg-black grid grid-cols-2 text-white font-semibold text-lg max-w-sm h-40 ">
    //   <img className="w-20 pt-4" src="./movie_test.jpg" />
    //   <div className="grid grid-rows-3">
    //     <p>SuperPets</p>
    //     <p>bbb</p>
    //     <p>ccc</p>
    //   </div>
    // </div>
    // <div className="grid grid-rows-3 text-white font-semibold text-lg   max-w-sm h-40 bg-black border-2 border-green-600-700 ">
    //   <div className="grid grid-cols-2  p-2  ">
    //     <img src="./logo.jpg" className="h-9 pl-4 " />
    //     <div>
    //       <p className="relative right-20 "> name of Movies</p>
    //       <p className="relative text-amber-100 right-20">18/02/1995</p>
    //     </div>
    //   </div>
    //
    //   <div className="pt-3 p-2">
    //     <p>JANNER</p>
    //   </div>
    //   <div className="grid grid-cols-2 p-2">
    //     <p className="text-center">bb</p>
    //     <button className="text-green-400 outline-pink-500">
    //       More Information
    //     </button>
    //   </div>
    // </div>
  );
}
