const express = require('express');
const { getHome } = require('../controllers/shopController');

const router = express.Router();


router.get('/', getHome);

router.get('/products');

router.get('/cart');

router.get('/checkout');

module.exports = router