const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        brand: { type: DataTypes.STRING },
        price: { type: DataTypes.INTEGER, allowNull: false },
        currency_unit: { type: DataTypes.STRING, allowNull: false },
        purchase_date: { type: DataTypes.DATE, allowNull: false },
        expiry_date: { type: DataTypes.DATE, allowNull: false },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        merchant: {type: DataTypes.STRING},
        location: { type: DataTypes.STRING },
        website: { type: DataTypes.STRING },
        phone_number: { type: DataTypes.INTEGER }
    };

    return sequelize.define('Product', attributes);
}