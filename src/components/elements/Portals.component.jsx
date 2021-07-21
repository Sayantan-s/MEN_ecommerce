import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portals = ({ children, domNode = 'modal' }) => {
    const portalClassName = `${domNode} portals`;

    let isPortalPresent;

    /*useEffect(() => {
        const portals = Object.values(document.querySelector('body').children).filter(node => node.className.includes('portals'));
        portals.forEach(portal => {
            isPortalPresent = true;
            if(portal.className !== portalClassName) isPortalPresent = false;
        })

        if(!isPortalPresent) throw new Error('Portal not present in index.html or you may have mispelt the portal name!');
    },[])*/

    return createPortal(children, document.querySelector(`.toast`));
};

export default Portals;
