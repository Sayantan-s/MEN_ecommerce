import { GOT_NAV_VALUE } from "store/types/getNavValue";

const navHeight = 0;

const navHeightReducer = (state = navHeight,{ type, payload }) => {
    if(type === GOT_NAV_VALUE)
        return state = payload;
    return state;
}

export default navHeightReducer;