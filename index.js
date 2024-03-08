const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { getUsers, createUser } = require("./queries/user.queries");
const { getBooks, createBook , updateBook} = require("./queries/book.queries");

app.use(bodyParser.json());

app.get("/user", (req, res) => {
  getUsers(req, res);
});

app.post("/user", (req, res) => {
  createUser(req, res);
});

app.get("/book", (req, res) => {
  getBooks(req, res);
});

app.post("/book", (req, res) => {
  createBook(req, res);
});

app.put("/book/:id",( req , res )=>{
  updateBook(req, res);
});

app.listen(port, () => {
  console.log(` app running on port ${port}`);
})
