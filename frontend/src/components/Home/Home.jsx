import React from "react";
import MovieCard from "../MovieCard/MovieCard";

export default function Home() {
  const elements = [
    { name: "Lion King", img: "./lionKing.jpg", janer: "comedy" },
    { name: "Lion King", img: "./movie_test.jpg", janer: "action" },
  ];

  return (
    // <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500  md:bg-gradient-to-r">
    <div className={"flex flex-row"}>
      {elements.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
    // </div>
  );
}
