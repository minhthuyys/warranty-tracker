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

async function getAll(user_id) {
    return await db.Product.findAll({
        where: {
          user_id: user_id
        }
      });
}

async function getById(id) {
    return await getProduct(id);
}

async function create(params) {
    // save product
    await db.Product.create(params);
}

async function update(id, params) {
    const product = await getProduct(id);

    // NO validate

    // copy params to user and save
    Object.assign(product, params);
    await product.save();

    return "Updated successfully";
}

async function _delete(id) {
    const product = await getProduct(id);
    await product.destroy();
}

// helper functions

async function getProduct(id) {
    const product = await db.Product.findByPk(id);
    if (!product) throw 'Product not found';
    return product;
}
