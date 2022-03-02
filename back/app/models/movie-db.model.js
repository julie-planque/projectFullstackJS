module.exports = (sequelize, Sequelize) => {
    const moviedb = sequelize.define("movie-dbs", {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
      title: {
        type: Sequelize.STRING
      },
      actors: {
        type: Sequelize.STRING
      },
      productors : {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(1234)
      },
      date : {
        type: Sequelize.DATE
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      url: {
          type: Sequelize.STRING
      }
    });
    return moviedb;
  };