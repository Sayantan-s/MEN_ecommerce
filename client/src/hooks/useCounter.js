import { useState } from 'react';

const useCounter = ({ start, incrementBy = 1, decrementBy = 1, limit = [0, 7] }) => {
    const [counter, setCounter] = useState(start);

    const limitCheck = limit && limit[0] < limit[1];

    const countHandler = (type) => {
        switch (type.toUpperCase()) {
            case 'INCREMENT':
                if (limit) {
                    if (limitCheck && counter < limit[1]) {
                        return setCounter((prev) => prev + incrementBy);
                    }
                    return;
                }
                return setCounter((prev) => prev + incrementBy);
            case 'DECREMENT':
                if (limit) {
                    if (limitCheck && counter > limit[0]) {
                        return setCounter((prev) => prev - decrementBy);
                    }
                    return;
                }
                return setCounter((prev) => prev - decrementBy);
            default:
                return;
        }
    };

    return [counter, countHandler];
};

export default useCounter;
