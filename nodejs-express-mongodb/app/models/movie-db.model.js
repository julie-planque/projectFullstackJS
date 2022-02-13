module.exports = (sequelize, Sequelize) => {
    const MovieDb = sequelize.define("movie-db", {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      image: {
          type: Sequelize.STRING
      }
    });
    return MovieDb;
  };