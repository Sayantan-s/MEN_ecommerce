import React from 'react'
import { Box, Typography, Image } from 'components'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
//import hoverEffect from 'hover-effect'
import { useRef } from 'react'

const Header = () => {

    const imgRef = useRef(null);

    useEffect(() => {

        console.log(imgRef.current.firstElementChild)

    },[])

    return (
       <Box className="w-full mt-16">
           <Typography as={motion.h2} className="text-center text-gray-900 leading-tight">
                NIKE AIR ZOOM PEGASUS 38    
                <br /> 
                Your Workhorse With Wings is here, 
                <br /> 
                now more comfortable than ever.
           </Typography>
            <Image 
                ref={imgRef}
                className="w-full h-160 my-16"
                src={'https://static.nike.com/a/images/f_auto/dpr_1.0/w_1792,c_limit/20509994-3436-4b88-a295-34936ead0fc7/nike-just-do-it.jpg'} 
                alt="nike"
            />
       </Box>
    )
}

export default Header
