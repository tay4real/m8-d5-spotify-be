const express = require("express");
const axios = require("axios");

const artistsRouter = express.Router();

artistsRouter.get("/:id", async (req, res, next) => {
  try {
    const response = await axios(
      `${process.env.DEEZER_BASE_URL}/artist/${req.params.id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
          "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
        },
      }
    );

    if (response) {
      res.send(response.data);
    } else {
      const errMessage = new Error("Artist not found");
      res.statusCode.send(errMessage);
    }
  } catch (error) {
    next(error);
  }
});

artistsRouter.get("/search/:query", async (req, res, next) => {
  try {
    const response = await axios(
      `${process.env.DEEZER_BASE_URL}/search?q=/${req.params.query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
          "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
        },
      }
    );

    if (response) {
      res.send(response.data);
    } else {
      const errMessage = new Error(`${req.params.search} Not Found`);
      res.statusCode.send(errMessage);
    }
  } catch (error) {
    next(error);
  }
});



module.exports = artistsRouter;
