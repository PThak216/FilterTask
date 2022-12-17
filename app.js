const dotenv = require("dotenv");
const express = require("express");
const app = express();
const path = require("path");

dotenv.config({ path: "./config.env" });
require("./DB/conn");

app.use(express.json());

app.use(require("./router/auth"));

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listning At ${PORT}`);
});
