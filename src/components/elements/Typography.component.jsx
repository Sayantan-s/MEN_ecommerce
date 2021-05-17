import { motion } from 'framer-motion';
import React from 'react'
import { Box } from '..'

const Typography = ({ as, children, className, ...otherProps }) => {
    
    let styles;

    switch(as){
        case motion.h1:
            styles = "text-7xl font-bold"
            break;
        case motion.h2 :
            styles = "text-6xl font-bold"
            break;
        case motion.h3 :
            styles = "text-5xl font-semibold"
            break;  
        case motion.h4 :
            styles = "text-3xl font-semibold"
            break;  
        case motion.h5 :
            styles = "text-xl font-medium"
            break;  
        case motion.h6 :
            styles = "text-md font-medium"
            break; 
        case motion.p :
            styles = "text-base font-normal"
            break;
        default : 
            styles = "text-base"
    }
    return (
      <Box 
        {...otherProps}
        className={`${className} ${styles}`} 
        as={as}>
            {children}
      </Box>
    )
}

export default Typography
