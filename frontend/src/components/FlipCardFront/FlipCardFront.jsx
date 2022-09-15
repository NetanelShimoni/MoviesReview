import React, { useState } from "react";

export default function FlipCardFront(movie) {
  return (
    <div className={"w-36 h-fit "}>
      <div className={"justify-center flex"}>
        <img
          src={movie.movie.img}
          className={
            "w-28 flex justify-content items-center justify-items-center"
          }
        />
      </div>
      <div className={"text-gray-600 ml-2  pb-3 dark:text-amber-100 pt-1"}>
        <p>{movie.movie.name}</p>
        <p>{movie.movie.janer}</p>
      </div>
    </div>
  );
}
