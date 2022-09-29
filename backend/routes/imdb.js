const express = require("express");
const imdb = require("imdb-api");
const cli = new imdb.Client({ apiKey: "c76f220c" });

const router = express.Router();

router.get("/getRatingsByName", (req, res) => {
  try {
    const { movieName } = req?.query ?? undefined;
    const allMovies = [];
    if (movieName) {
      cli
        .search({ name: `${movieName}` })
        .then((search) => {
          for (const result of search.results) {
            console.log("result: ", result);
            if (result.type === "movie") {
              allMovies.push(result);
            }
          }
          res.send({ allMovies });
        })
        .catch((e) => {
          res.sendStatus(400);
        });
    }
  } catch (e) {
    res.sendStatus(400);
  }
});

router.get("/getRatingsById", async (req, res) => {
  try {
    const { id } = req?.query ?? undefined;
    if (id) {
      const { rating } = await cli.get({ id: `${id}` });
      res.send({ rating });
    }
  } catch (e) {
    res.sendStatus(400);
  }
});

module.exports = router;
