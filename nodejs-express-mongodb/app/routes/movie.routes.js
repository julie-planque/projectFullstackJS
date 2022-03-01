module.exports = app => {
    const movies = require("../controllers/movie-db.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", movies.create);
    // Retrieve all Movies
    router.get("/", movies.findAll);
    // Retrieve all published Movies
    router.get("/published", movies.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", movies.findOne);
    // Update a Tutorial with id
    router.put("/:id", movies.update);
    // Delete a Tutorial with id
    router.delete("/:id", movies.delete);
    // Delete all Movies
    router.delete("/", movies.deleteAll);
    app.use('/api/movies', router);
  };
  