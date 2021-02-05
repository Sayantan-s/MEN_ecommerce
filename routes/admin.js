const express = require('express');
const { getAdminProducts, postAdminProducts, getAdminShowProducts } = require('../controllers/adminControllers');

const router = express.Router();


router.get('/add-product',getAdminProducts);

router.get('/show-product',getAdminShowProducts);

router.post('/add-product',postAdminProducts);

module.exports = router;