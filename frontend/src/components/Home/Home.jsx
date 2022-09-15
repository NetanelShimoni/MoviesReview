import React from "react";
import MovieCard from "../MovieCard/MovieCard";

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
    ,
  ];

  return (
    // <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500  md:bg-gradient-to-r">
    <div className={"grid grid-cols-6 "}>
      {elements.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    // </div>
  );
}
