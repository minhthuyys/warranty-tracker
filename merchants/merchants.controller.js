const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const merchantService = require('./merchant.service');

// routes
router.post('/create', authorize(), createSchema, create);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;


function createSchema(req, res, next) {
    const schema = Joi.object({
        merchant_name: Joi.string().required(),
        location: Joi.string().required(),
        website: Joi.string().required(),
        phone_number: Joi.string().required(),   
    });
    validateRequest(req, next, schema);
}

function create(req, res, next) {
    merchantService.create(req.body)
        .then(() => res.json({ message: 'Created successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    merchantService.getAll()
        .then(merchants => res.json(merchants))
        .catch(next);
}

function getById(req, res, next) {
    merchantService.getById(req.params.id)
        .then(merchant => res.json(merchant))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        merchant_name: Joi.string().empty(''),
        location: Joi.string().empty(''),
        website: Joi.string().empty(''),
        phone_number: Joi.string().empty(''), 
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    merchantService.update(req.params.id, req.body)
        .then(merchant => res.json(merchant))
        .catch(next);
}

function _delete(req, res, next) {
    merchantService.delete(req.params.id)
        .then(() => res.json({ message: 'merchant deleted successfully' }))
        .catch(next);
}