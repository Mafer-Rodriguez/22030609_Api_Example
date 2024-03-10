const db = require("../db.js");

const book_author = db.book_author;

const getBookAuthor = async (req, res) => {
    try {
        const book_author = await book_author.findAll();
        res.json(book_author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBookAuthor = async (req, res) => {
    try {
        const book_author = await book_author.create(req.body);
        res.json(book_author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBookAuthor = async (req, res) => {
    try {
        const book_authorId = req.params.id;
        const updateBookAuthor = req.body;

        const book_author = await book_author.findByPk(book_authorId);
        if (!book_author) {
            res.status(404).json({ message: "Book_author not found" });
        }
        book_author.book_id = updateBookAuthor.book_id;
        book_author.author_id = updateBookAuthor.author_id;
        await book_author.save();

        res.json(book_author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteBookAuthor = async (req, res) => {
    try {
        const book_authorId = req.params.id;

        const book_author = await book_author.findByPk(book_authorId);
        if (!book_author) {
            res.status(404).json({ message: "Book_author not found" });
        }
        await book_author.destroy();
        res.json({ message: "Book_author deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getBookAuthor,
    createBookAuthor,
    updateBookAuthor,
    deleteBookAuthor
}