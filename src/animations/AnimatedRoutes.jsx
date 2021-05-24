import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Switch, useLocation } from 'react-router-dom'

const AnimatedRoutes = ({ children }) => {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
                {children}
            </Switch>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
