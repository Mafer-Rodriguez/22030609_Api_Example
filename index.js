const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { getUsers, createUser } = require("./queries/user.queries");
const { getBooks, createBook , updateBook,deleteBook,updateBookPatch} = require("./queries/book.queries");
const {getAuthors,createAuthor,updateAuthor,deleteAuthor,updateAuthorPatch} = require("./queries/author.queries");

app.use(bodyParser.json());

//usuarios

app.get("/user", (req, res) => {
  getUsers(req, res);
});

app.post("/user", (req, res) => {
  createUser(req, res);
});



//libros
app.get("/book", (req, res) => {
  getBooks(req, res);
});

app.post("/book", (req, res) => {
  createBook(req, res);
});

app.put("/book/:id",( req , res )=>{
  updateBook(req, res);
});

app.delete("/book/id",(req,res) =>{
  deleteBook(req,res);
})

app.patch("/book/:id",(req,res)=>{
  updateBookPatch(req,res);
});

//author 
app.get("/author",(req,res)=>{
  getAuthors(req,res);

});
app.post("/author",(req,res)=>{
  createAuthor(req,res);
});

app.put("/author/:id",(req,res)=>{
  updateAuthor(req,res);
});

app.delete("/author/:id",(req,res)=>{
  deleteAuthor(req,res);
});

app.patch("/author/:id",(req,res)=>{
  updateAuthorPatch(req,res);

});


//para que el servidor escuche en el puerto 3000
app.listen(port, () => {
  console.log(` app running on port ${port}`);
})
