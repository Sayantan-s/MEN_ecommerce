import { motion } from 'framer-motion'
import React from 'react'

const Button = ({ children,type,moreStyles, ...otherprops }) => {
    let styles;
    switch(type){
        case 'primary' : 
            styles = 'bg-gray-900 text-gray-50 px-4 py-3 rounded-lg font-bold uppercase flex text-md';
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
       <motion.button 
       whileTap={{ scale : 0.98 }}
       className={`${styles} ${moreStyles} focus:outline-none`} {...otherprops}>
           {children}
       </motion.button>
    )
}

export default Button
 