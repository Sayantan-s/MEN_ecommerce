import { useState } from 'react';

const useSelect = (data) => {
    if (Array.isArray(data)) {
        const [select, setSelect] = useState(data[0]);

        return [data, select, setSelect];
    }
    throw new Error('The select options should be in an array!');
};

export default useSelect;
