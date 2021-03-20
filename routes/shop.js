const express = require('express');
const { getHome, getShopProducts, getOrders,getShopCart, getProductByID, postProductInCart, deleteProductFromCart } = require('../controllers/shopController');

const router = express.Router();


router.get('/', getHome);

router.get('/products',getShopProducts);

router.get('/products/:id',getProductByID);

router.get('/cart',getShopCart);

router.post('/cart',postProductInCart);

router.post('/cart-delete',deleteProductFromCart)

router.get('/order',getOrders);

router.get('/checkout');

module.exports = router