const express = require("express");
const cors = require("cors");
const path = require("path");
require('dotenv').config()

const { postKayak, deleteKayak } = require("./controller");

const app = express();

app.get ('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../home.css'))
})

app.get ('/styles2', (req, res) => {
    res.sendFile(path.join(__dirname, '../list.css'))
})

app.get ('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../homefront.js'))
})

app.get ('/js2', (req, res) => {
    res.sendFile(path.join(__dirname, '../listfront.css'))
})



app.use(cors());

app.use(express.json());

app.post("/kayak", postKayak)

app.delete(`/kayak/:id`, deleteKayak)

app.listen(4000, () => console.log("Server runnning on port 4000"))