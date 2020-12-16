const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        brand: { type: DataTypes.STRING, allowNull: true },
        price: { type: DataTypes.INTEGER, allowNull: false },
        currency_unit: { type: DataTypes.STRING, allowNull: false },
        purchase_date: { type: DataTypes.DATE, allowNull: false },
        expiry_date: { type: DataTypes.DATE, allowNull: false },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        merchant: {type: DataTypes.STRING, allowNull: true },
        location: { type: DataTypes.STRING, allowNull: true },
        website: { type: DataTypes.STRING, allowNull: true },
        phone_number: { type: DataTypes.INTEGER, allowNull: true }
    };

    return sequelize.define('Product', attributes);
}