const express = require('express');
const { getAdminProducts, 
    postAdminProducts, 
    getAdminShowProducts, 
    getEditProducts, 
    postEditProducts, 
    postDeleteProducts } = require('../controllers/adminControllers');

const isAuth = require('../middleware/isAuth');

const router = express.Router();


router.get('/add-product',isAuth,getAdminProducts);

router.get('/show-product',isAuth,getAdminShowProducts);

router.post('/add-product',postAdminProducts);

router.get('/edit-product/:productID',isAuth,getEditProducts);

router.post('/edit-product',postEditProducts);

router.post('/delete-product',postDeleteProducts)

module.exports = router;