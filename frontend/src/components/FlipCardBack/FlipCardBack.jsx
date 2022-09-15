import React from "react";

export default function FlipCardBack(movie) {
  console.log("FlipCardBack", movie.movie.release);
  return (
    <div className={"w-36 h-fit "}>
      <div className={"justify-center flex pt-2 "}>
        <p> Released: {movie.movie.release} </p>
        {/*  <img*/}
        {/*    src={movie.movie.img}*/}
        {/*    className={*/}
        {/*      "w-28 flex justify-content items-center justify-items-center"*/}
        {/*    }*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div className={"text-gray-600 ml-2 dark:text-amber-100 pt-1"}>*/}
        {/*  <p>{movie.movie.name}</p>*/}
        {/*  <p>{movie.movie.janer}</p>*/}
      </div>
    </div>
  );
}
