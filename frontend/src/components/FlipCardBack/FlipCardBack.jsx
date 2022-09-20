import React from "react";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setIdCard } from "../../store/actions/dataActions";
import { getCardId } from "../../store/selectors/dataSelector";
import Modal from "../Modal/Modal";

export default function FlipCardBack(movie) {
  console.log("FlipCardBack", movie.movie.release);
  const dispatch = useDispatch();
  const cardId = useSelector(getCardId);
  const handleOnClickOnCard = (e, id) => {
    e.stopPropagation();
    dispatch(setIdCard(id));
  };
  console.log("1!!@!@@@!@", cardId);
  return (
    <div
      className={"w-36 ml-3 h-fit "}
      // style={{ height: "-webkit-fill-available" }}
    >
      <div className={"justify-center flex pt-2 flex-col "}>
        <p> Released: {movie.movie.release} </p>
        {/*  <img*/}
        {/*    src={movie.movie.img}*/}
        {/*    className={*/}
        {/*      "w-28 flex justify-content items-center justify-items-center"*/}
        {/*    }*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div className={"text-gray-600 ml-2 dark:text-amber-100 pt-1"}>*/}
        <p>{movie.movie.name}</p>
        <p>{movie.movie.janer}</p>
        {cardId !== movie.movie.id && (
          <div className={"relative top-24 "} style={{ color: "orange" }}>
            <Divider
              sx={{
                bgcolor: "#fff",
              }}
            />
            <p onClick={(e) => handleOnClickOnCard(e, movie.movie.id)}>
              More info ...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
