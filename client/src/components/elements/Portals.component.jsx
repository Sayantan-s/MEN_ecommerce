import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portals = ({ children, domNode = 'modal' }) => {
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isMounted) return null;

    return createPortal(children, document.getElementById(`#${domNode}`));
};

export default Portals;
