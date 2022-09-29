import React, { useState } from "react";
import ReactCardFLip from "react-card-flip";
import FlipCardFront from "../FlipCardFront/FlipCardFront";
import FlipCardBack from "../FlipCardBack/FlipCardBack";
import { useDispatch, useSelector } from "react-redux";
import { setIdCard } from "../../store/actions/dataActions";
import { getCardId } from "../../store/selectors/dataSelector";
import Modal from "../Modal/Modal";

export default function MovieCard(movie) {
  const dispatch = useDispatch();
  const [isFlipped, setIsFlipped] = useState(false);
  const cardId = useSelector(getCardId);
  const handleOnClickOnCard = () => {
    setIsFlipped(!isFlipped);
    dispatch(setIdCard(""));
  };
  return (
    <>
      <ReactCardFLip isFlipped={isFlipped} flipDirection={"horizontal"}>
        <div
          onClick={handleOnClickOnCard}
          className={`  cursor-pointer font-bold rounded-2xl  w-40  h-64 dark:hover:shadow-blue-300  shadow-2xl h-fit m-6 dark:border-b dark:border-t  hover:border-4 dark:hover:border-4`}
          style={cardId.length > 0 ? { zIndex: "0" } : {}}
          // hidden={cardId.length > 0}
        >
          <FlipCardFront movie={movie?.movie} />
        </div>
        <div
          onClick={handleOnClickOnCard}
          // hidden={cardId !== movie.movie.id && cardId.length > 0}
          // style={
          //   cardId === movie.movie.id
          //     ? {
          //         position: "absolute",
          //         justifyContent: "center",
          //         alignItems: "center",
          //         // left: "50%",
          //         right: "50%",
          //         zIndex: 111,
          //       }
          //     : {}
          // }
          className={
            // cardId === movie.movie.id
            //   ? `dark:text-amber-100 dark:shadow-blue-800 cursor-pointer rounded-2xl shadow-2xl  m-6 `
            `dark:text-amber-100 dark:shadow-blue-800 cursor-pointer rounded-2xl w-40 shadow-2xl h-52 m-6 `
          }
        >
          <FlipCardBack movie={movie?.movie} />
        </div>
      </ReactCardFLip>
    </>
  );
}
