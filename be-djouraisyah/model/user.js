const dbConection = require('./dbConnection');
const sequelize = require('sequelize');

const registration = dbConection.define("registration", {
    id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true
    },
    user_name: {
        type: sequelize.DataTypes.STRING
    },
    email: {
        type: sequelize.DataTypes.STRING
    },
    password: {
        type: sequelize.DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = registration;