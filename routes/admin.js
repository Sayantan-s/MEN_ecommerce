const express = require('express');
const { getAdminProducts, 
    postAdminProducts, 
    getAdminShowProducts, 
    getEditProducts, 
    postEditProducts, 
    postDeleteProducts } = require('../controllers/adminControllers');

const router = express.Router();


router.get('/add-product',getAdminProducts);

router.get('/show-product',getAdminShowProducts);

router.post('/add-product',postAdminProducts);

router.get('/edit-product/:productID',getEditProducts);

router.post('/edit-product',postEditProducts);

router.post('/delete-product',postDeleteProducts)

module.exports = router;