import React, { useState } from "react";
import ReactCardFLip from "react-card-flip";
import FlipCardFront from "../FlipCardFront/FlipCardFront";
import FlipCardBack from "../FlipCardBack/FlipCardBack";

export default function MovieCard(movie) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleOnClickOnCard = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFLip isFlipped={isFlipped} flipDirection={"horizontal"}>
      <div
        onClick={handleOnClickOnCard}
        className={
          "cursor-pointer font-bold rounded-2xl   dark:hover:shadow-blue-300  w-40  h-64 shadow-2xl h-fit m-6  hover:border-2 dark:hover:border-2"
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
        <FlipCardBack movie={movie?.movie} />
      </div>
    </ReactCardFLip>
    // </div>
  );
}
