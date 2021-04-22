import { motion } from 'framer-motion'
import React from 'react'

const Button = ({ children,type, ...otherprops }) => {
    let styles;
    switch(type){
        case 'primary' : 
            styles = '';
            break;
        case 'secondary' : 
            styles = '';
            break;
        case 'transparent' : 
            styles = '';
            break;
        default: 
            styles = '';
    }
    return (
       <motion.button className={`${styles}`} {...otherprops}>
           {children}
       </motion.button>
    )
}

export default Button
 