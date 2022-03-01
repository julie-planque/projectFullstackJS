module.exports = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "YES",
    DB: "movies_db",
    dialect: "mysql",
    port: "3306",
    pool: {
      max: 5, // maximum number of connection in pool
      min: 0,
      acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
      idle: 10000 // maximum time, in milliseconds, that a connection can be idle before being released
    }
  };