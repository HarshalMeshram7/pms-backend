/*Local DB*/
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "postgres",
  DBNAME: "postgres",
  dialect: "postgres",
  PORT: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}