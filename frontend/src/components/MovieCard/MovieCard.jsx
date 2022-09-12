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
  );
}
