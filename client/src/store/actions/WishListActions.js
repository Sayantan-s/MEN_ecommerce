const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = require('store/types/isWishlisted');

const ADD_ITEM_TO_WISHLIST = ({ user_id, product_id }) => ({
    type: ADD_TO_WISHLIST,
    payload: { user_id, product_id }
});

const REMOVE_ITEM_TO_WISHLIST = ({ user_id, product_id }) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: { user_id, product_id }
});

//const userAddToWishList
