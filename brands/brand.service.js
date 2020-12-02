const config = require('config.js');
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
    return await db.Brand.findAll();
}

async function getById(id) {
    return await getBrand(id);
}

async function create(params) {
    // save Brand
    await db.Brand.create(params);
}

async function update(id, params) {
    const Brand = await getBrand(id);

    // NO validate

    // copy params to user and save
    Object.assign(Brand, params);
    await Brand.save();

    return "Updated successfully";
}

async function _delete(id) {
    const Brand = await getBrand(id);
    await Brand.destroy();
}

// helper functions

async function getBrand(id) {
    const Brand = await db.Brand.findByPk(id);
    if (!Brand) throw 'Brand not found';
    return Brand;
}
