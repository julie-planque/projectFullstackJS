module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "juju",
    DB: "moviedb",
    dialect: "mysql",
    pool: {
      max: 5, // maximum number of connection in pool
      min: 0,
      acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
      idle: 10000 // maximum time, in milliseconds, that a connection can be idle before being released
    }
  };