import { AUTHENTICATING, AUTHENTICATION_FAILED, AUTHENTICATION_SUCCESSFULL } from "store/types/isAuthenticated"

const authState = {
    loading : false,
    isAuthenticated : false,
    error : false
}

export default (state = authState, { type, payload }) => {
    switch(type) {
        case AUTHENTICATING :
            return {
                ...state,
                loading: true,
                isAuthenticated : false,
                error : false
            }
        case AUTHENTICATION_SUCCESSFULL : 
            return {
                ...state,
                loading : false,
                isAuthenticated : true,
                error : false
            }
        case AUTHENTICATION_FAILED : 
            return {
                ...state,
                loading : false,
                isAuthenticated : true,
                error : payload
            }
        default: return state;
    }
}