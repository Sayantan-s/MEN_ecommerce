import { AnimateSharedLayout } from 'framer-motion'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
                <AnimateSharedLayout>
                    {children}
                </AnimateSharedLayout>
            <Footer />
        </>
    )
}

export default Layout
