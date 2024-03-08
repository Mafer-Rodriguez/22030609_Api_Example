const db = require("../db.js");

const Book = db.book;

const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id; //obtengo el id del libro que quiero actualizar
    const updateBook = req.body; //datos actualizados del libro

    const book = await Book.findByPk(bookId); //busco el libro por id
    if(!book){
      res.status(404).json({message: "Book not found"});

    }
    book.title = updateBook.title;//actualizo el titulo
    book.publication_date = updateBook.publication_date;//actualizo la fecha de publicacion
    book.genre_id = updateBook.genre_id;//actualizo el id del genero
    book.stok = updateBook.stok;//actualizo el stock
    await book.save();//guardo los cambios

    res.json(book);//devuelvo el libro actualizado como repuesta 
  }catch (error){
    res.status(500).json({message: error.message});
  }
};

const deleteBook = async (req, res)=>{
  try{
    const bookId = req.params.id;//obtengo el id del libro que quiero eliminar

    const book = await book.findByPk(bookId);//busco el libro por id
    if(!book){
      res.status(404).json({message: "Book not found"});
    }
    await book.destroy();//elimino el libro
    res.json({message: "Book deleted"});//devuelvo un mensaje como respuesta
  }catch (error){
    res.status(500).json({message: error.message});
  }
};

const updateBookPatch = async (req, res) => {
  try {
    const bookId = req.params.id; //obtengo el id del libro que quiero actualizar
    const updateBook = req.body; //datos actualizados del libro

    const book = await Book.findByPk(bookId); //busco el libro por id
    if(!book){
      res.status(404).json({message: "Book not found"});

    }
    book.title = updateBook.title;//actualizo el titulo
    book.publication_date = updateBook.publication_date;//actualizo la fecha de publicacion
    book.genre_id = updateBook.genre_id;//actualizo el id del genero
    book.stok = updateBook.stok;//actualizo el stock
    await book.save();//guardo los cambios

    res.json(book);//devuelvo el libro actualizado como repuesta 
  }catch (error){
    res.status(500).json({message: error.message});
  }
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook

};