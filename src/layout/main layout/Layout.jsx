import Box from 'components/elements/Box.component'
import { motion } from 'framer-motion'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
               <Box 
               className="min-h-screen"
               as={motion.main}>
                    {children}
               </Box>
            <Footer />
        </>
    )
}

export default Layout
