import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Switch, useLocation } from 'react-router-dom';

const AnimatedRoutes = ({ exitBeforeEnter = true, initial = false, children }) => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
            <Switch location={location} key={location.pathname}>
                {children}
            </Switch>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
