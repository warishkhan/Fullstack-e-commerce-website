const dotenv = require("dotenv");
const express = require("express");

//REST OBJECT
const app = express();
const path = require("path");
//DOTENV
dotenv.config({ path: "./.env" });

//middlewares
app.use(express.json());
// routes
require("./database/conn");
app.use(require("./router/auth"));

//Port
const port = process.env.PORT || 6010;

app.get("/", (req, res) => {
  res.send("hello I m the best in the world");
});

//listen
app.listen(port, () => {
  console.log(`ser is running on the port ${port}`);
});
