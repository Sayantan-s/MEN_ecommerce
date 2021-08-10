import { useState, useCallback } from 'react';

const useToggle = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = useCallback(() => {
        setToggle(!toggle);
    }, [toggle]);

    return [toggle, handleToggle];
};

export default useToggle;
