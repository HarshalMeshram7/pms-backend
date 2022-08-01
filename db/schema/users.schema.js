/* 
* User table schema 
*/

module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        organization: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },
        {
            indexes: [
                // Create a unique index on user_id
                {
                    unique: false,
                    fields: ['user_id']
                }]
        },
        {
            timestamps: true
        },
    );

    return user;
}   