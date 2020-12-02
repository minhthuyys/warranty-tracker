const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Merchant.findAll();
}

async function getById(id) {
    return await getMerchant(id);
}

async function create(params) {
    // save Merchant
    await db.Merchant.create(params);
}

async function update(id, params) {
    const Merchant = await getMerchant(id);

    // NO validate

    // copy params to user and save
    Object.assign(Merchant, params);
    await Merchant.save();

    return "Updated successfully";
}

async function _delete(id) {
    const Merchant = await getMerchant(id);
    await Merchant.destroy();
}

// helper functions

async function getMerchant(id) {
    const Merchant = await db.Merchant.findByPk(id);
    if (!Merchant) throw 'Merchant not found';
    return Merchant;
}
