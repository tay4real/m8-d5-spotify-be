const express = require("express")
const axios = require("axios")

const albumsRouter = express.Router()

const config = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8be2f0c65mshfad5043cb400d5dp12eb36jsn70f4e3e3750f",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
}

albumsRouter.get("/:id", async (req, res, next) => {
  try {
    let response = await axios.get(
      "https://deezerdevs-deezer.p.rapidapi.com/album/" + req.params.id,
      config
    )
    console.log(response.data)
    res.send(response.data)
  } catch (error) {
    console.log(error)
  }
})

module.exports = albumsRouter
