const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = require("store/types/isWishlisted");

const initialState = {
    user_id : '',
    items_wishlisted : []
}

const WishListReducer = (state= initialState, { type, payload }) => {
    
    switch (type){
        case ADD_TO_WISHLIST:

            const updatedState = {
                ...state,
                user_id : payload.user_id,
                items_wishlisted : state.items_wishlisted.concat(payload.product_id)
            }

            localStorage.setItem('wishlist', JSON.stringify(updatedState))
        
            return updatedState;
        ;

        case REMOVE_FROM_WISHLIST :
            const { product_id } = payload;

            let updatedNewState;

            const wishlistData = JSON.parse(localStorage.getItem('wishlist'));

            //if(wishlistData)
        
            return {
                ...state,
                user_id,
                items_wishlisted : state.items_wishlisted.concat(product_id)
            }    
        ;

        default : return state;
            
    }
}

export default WishListReducer;