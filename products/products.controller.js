const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const productService = require('./product.service');

// routes
router.post('/create', authorize(), createSchema, create);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;


function createSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        brand_id: Joi.number().required(),
        price: Joi.number().required(),
        currency_unit: Joi.string().required(),
        purchase_date: Joi.date().required(),
        expiry_date: Joi.date().required(),
        user_id: Joi.number().required(),
        merchant_id: Joi.number().required()
    });
    validateRequest(req, next, schema);
}

function create(req, res, next) {
    productService.create(req.body)
        .then(() => res.json({ message: 'Created successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    productService.getAll(req.user.id)
        .then(products => res.json(products))
        .catch(next);
}

function getById(req, res, next) {
    productService.getById(req.params.id)
        .then(product => res.json(product))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().empty(''),
        brand_id: Joi.number().empty(''),
        price: Joi.number().empty(''),
        currency_unit: Joi.string().empty(''),
        purchase_date: Joi.date().empty(''),
        expiry_date: Joi.date().empty(''),
        user_id: Joi.number().empty(''),
        merchant_id: Joi.number().empty('')
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    productService.update(req.params.id, req.body)
        .then(product => res.json(product))
        .catch(next);
}

function _delete(req, res, next) {
    productService.delete(req.params.id)
        .then(() => res.json({ message: 'Product deleted successfully' }))
        .catch(next);
}