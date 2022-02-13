module.exports = (sequelize, Sequelize) => {
    const MovieDb = sequelize.define("movie-db", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return MovieDb;
  };