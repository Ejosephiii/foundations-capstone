const express = require("express");
const cors = require("cors");
const path = require("path");

const { postKayak, deleteKayak } = require("./controller");

const app = express();

app.use(cors());

app.use(express.json());

app.post("/kayak", postKayak)

app.delete(`/kayak/:id`, deleteKayak)

app.listen(4000, () => console.log("Server runnning on port 4000"))