const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        brand_id: { type: DataTypes.INTEGER, allowNull: false },
        price: { type: DataTypes.INTEGER, allowNull: false },
        currency_unit: { type: DataTypes.STRING, allowNull: false },
        purchase_date: { type: DataTypes.DATE, allowNull: false },
        expiry_date: { type: DataTypes.DATE, allowNull: false },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        merchant_id: {type: DataTypes.INTEGER, allowNull: false }
    };

    return sequelize.define('Product', attributes);
}