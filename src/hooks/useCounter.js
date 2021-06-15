import { useState } from "react";

const useCounter = ({
    start,
    incrementBy = 1,
    decrementBy = 1,
    limit = [0, 7]
}) => {
    const [counter, setCounter] = useState(start);

    const [disable, setDisable] = useState(false);

    const limitCheck = limit && limit[0] < limit[1]

    const countHandler = type => {
        switch(type.toUpperCase()){
            case "INCREMENT":
                if(limit){
                    if(limitCheck && counter < limit[1]){
                        return setCounter(prev => prev + incrementBy);
                    }
                    return setDisable(true);
                }
                return setCounter(prev => prev + incrementBy);
            case "DECREMENT":
               if(limit){
                    if(limitCheck && counter > limit[0]){
                        return setCounter(prev => prev - decrementBy);
                    }
                    return setDisable(true);
                }
                return setCounter(prev => prev - decrementBy);
            default : return;
        }
    }

    return [ counter, countHandler, disable ]

}

export default useCounter;