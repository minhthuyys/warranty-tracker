const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        merchant_name: { type: DataTypes.STRING, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false },
        website: { type: DataTypes.STRING, allowNull: false },
        phone_number: { type: DataTypes.INTEGER, allowNull: false }      
    };

    return sequelize.define('Merchant', attributes);
}