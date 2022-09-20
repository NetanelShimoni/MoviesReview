import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getCardId } from "../../store/selectors/dataSelector";
import Modal from "../Modal/Modal";
import { setIdCard } from "../../store/actions/dataActions";

export default function Home() {
  const elements = [
    {
      id: "1",
      name: "The Lion King",
      img: "./lionKing.jpg",
      janer: "comedy",
      release: "2015",
    },
    {
      id: "2",
      name: "Lion King",
      img: "./movie_test.jpg",
      janer: "action",
      release: "2019",
    },
    {
      id: "3",
      name: "Lion King",
      img: "./movie_test.jpg",
      janer: "action",
      release: "2019",
    },
    {
      id: "4",
      name: "Lion King",
      img: "./movie_test.jpg",
      janer: "action",
      release: "2019",
    },
    {
      id: "5",
      name: "Lion King",
      img: "./movie_test.jpg",
      janer: "action",
      release: "2019",
    },
    {
      id: "6",
      name: "Lion King",
      img: "./movie_test.jpg",
      janer: "action",
      release: "2019",
    },
    {
      id: "7",
      name: "Lion King",
      img: "./movie_test.jpg",
      janer: "action",
      release: "2019",
    },
    {
      id: "8",
      name: "Lion King",
      img: "./movie_test.jpg",
      janer: "action",
      release: "2019",
    },
    {
      id: "9",
      name: "Lion King",
      img: "./movie_test.jpg",
      janer: "action",
      release: "2019",
    },
    {
      id: "10",
      name: "Lion King",
      img: "./movie_test.jpg",
      janer: "action",
      release: "2019",
    },
    {
      id: "11",
      name: "Lion King",
      img: "./movie_test.jpg",
      janer: "action",
      release: "2019",
    },
    {
      id: "12",
      name: "Lion King",
      img: "./movie_test.jpg",
      janer: "action",
      release: "2019",
    },
    {
      id: "13",
      name: "Lion King",
      img: "./movie_test.jpg",
      janer: "action",
      release: "2019",
    },
    ,
  ];
  const dispatch = useDispatch();
  const cardId = useSelector(getCardId);
  const [cardClicked, setCardClicked] = useState({});
  useEffect(() => {
    setCardClicked(elements?.find((elem) => elem?.id === cardId) ?? {});
  }, [cardId]);

  return (
    // <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500  md:bg-gradient-to-r">
    <>
      <div className={"grid grid-cols-6 "}>
        {elements.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Modal
        isOpen={cardId.length > 0}
        title={cardClicked.name}
        onClickConfirm={() => dispatch(setIdCard(""))}
      />
    </>
    // </div>
  );
}
