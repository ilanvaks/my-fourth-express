import express from "express";

const PORT = 3060

const app = express()

app.get("/", (req, res) => {
  res.send("hello there.")
})

app.get("/jonathon", (req, res) => {
  res.send("WE love jonathon 🐐")
})

app.get("/Aaron", (req, res) => {
  res.send("Aaron 💅")
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})