const express = require('express');
const { getHome, getShopProducts, getOrders,getShopCart, getProductByID, postProductInCart, deleteProductFromCart, postOrders } = require('../controllers/shopController');

const router = express.Router();


router.get('/', getHome);

router.get('/products',getShopProducts);

router.get('/products/:id',getProductByID);

router.get('/cart',getShopCart);

router.post('/cart',postProductInCart);

router.post('/cart-delete',deleteProductFromCart)

router.get('/orders',getOrders);

router.post('/orders',postOrders);

router.get('/checkout');

module.exports = router