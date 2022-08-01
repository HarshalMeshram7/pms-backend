/* 
* This file is used for configure the tables   
*/

const dbConfig = require('../../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DBNAME, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    "logging": false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully...!!!');
    } catch (error) {
        console.error('Unable to connect database:', error);
    }
})();

const db = {};

db.Sequelize = sequelize;

db.users = require("./users.schema")(sequelize, Sequelize);

//add relation for stations
// db.station.belongsTo(db.func_class, { foreignKey: 'FK_functional_classification_code', targetKey: 'func_class_id' });


console.log('*** Table relationship added...');


module.exports = db;