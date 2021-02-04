const express = require('express');
const { getAdminProducts, postAdminProducts } = require('../controllers/adminControllers');

const router = express.Router();


router.get('/add-product',getAdminProducts);

router.get('/products');

router.post('/add-product',postAdminProducts);

module.exports = router;