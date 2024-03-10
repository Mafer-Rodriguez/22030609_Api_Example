const db = require("../db.js");

const Genre = db.genre;

const getGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createGenre = async (req, res) => {
  try {
    const genre = await Genre.create(req.body);
    res.json(genre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateGenre = async (req, res) => {
  try {
    const genreId = req.params.id; //obtengo el id del genero que quiero actualizar
    const updateGenre = req.body; //datos actualizados del genero

    const genre = await Genre.findByPk(genreId); //busco el genero por id
    if (!genre) {
      res.status(404).json({ message: "Genre not found" });
      return;

    }
    genre.name = updateGenre.name;//actualizo el nombre
    await genre.save();//guardo los cambios

    res.json(genre);//devuelvo el genero actualizado como repuesta 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteGenre = async (req, res) => {
  try {
    const genreId = req.params.id;//obtengo el id del genero que quiero eliminar

    const genre = await Genre.findByPk(genreId);//busco el genero por id
    if (!genre) {
      res.status(404).json({ message: "Genre not found" });
      return;
    }
    await genre.destroy();//elimino el genero
    res.json({ message: "Genre deleted" });//devuelvo un mensaje como respuesta
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateGenrePatch = async (req, res) => {
  try {
    const genreId = req.params.id; //obtengo el id del genero que quiero actualizar
    const updateGenre = req.body; //datos actualizados del genero

    const genre = await Genre.findByPk(genreId); //busco el genero por id
    if (!genre) {
      res.status(404).json({ message: "Genre not found" });
      return;

    }
    genre.name = updateGenre.name;//actualizo el nombre
    await genre.save();//guardo los cambios

    res.json(genre);//devuelvo el genero actualizado como repuesta 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getGenres,
  createGenre,
  updateGenre,
  deleteGenre,
  updateGenrePatch
};