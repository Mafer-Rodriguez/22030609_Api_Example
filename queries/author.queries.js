const db = require("../db.js");

const Author = db.author;

const getAuthors = async (req, res) => {
    try {
        const authors = await authors.findAll();
        res.json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createAuthor = async (req, res) => {
    try {
        const author = await author.create(req.body);
        res.json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateAuthor = async (req, res) => {
    try {
        const authorId = req.params.id;
        const updateAuthor = req.body;

        const author = await author.findByPk(authorId);//findByPk es un metodo que busca un registro por su id
        if (!author) {
            res.status(404).json({ message: "Author not found" });
        }
        author.name = updateAuthor.name;
        author.lastname = updateAuthor.lastname;
        author.birthdate = updateAuthor.birthdate;
        await author.save();

        res.json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const deleteAuthor = async (req, res) => {
    try {
        const authorId = req.params.id;//obtengo el id del author que quiero eliminar

        const author = await author.findByPk(author);//busco el author por id
        if (!author) {
            res.status(404).json({ message: "Author not found" });
        }
        await author.destroy();//elimino el autor 
        res.json({ message: "Author deleted" });//devuelvo un mensaje como respuesta
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAuthorPatch = async (req, res) => {
    try {
        const authorId = req.params.id; //obtengo el id del author que quiero actualizar
        const updateAuthor = req.body; //datos actualizados del autor 

        const author = await author.findByPk(authorId);
        if (!author) {
            res.status(404).json({ message: "Book not found" });

        }
        author.name = updateAuthor.name;//actualizo el nombre
        author.lastname = updateAuthor.lastname;//actualizo el apellido
        author.birthdate = updateAuthor.birthdate;//actualizo la fecha de nacimiento
        await author.save();//guardo los cambios

        res.json(author);//devuelvo el libro actualizado como repuesta 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




module.exports = {
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor,
    updateAuthorPatch
}