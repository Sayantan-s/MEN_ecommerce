import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
                <AnimatePresence>
                    {children}
                </AnimatePresence>
            <Footer />
        </>
    )
}

export default Layout
