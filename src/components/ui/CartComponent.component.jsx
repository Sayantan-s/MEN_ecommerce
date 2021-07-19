import { Box, Image, Link, Typography } from 'components'
import { motion } from 'framer-motion'
import React from 'react'

const CartComponent = ({ name, tagname, cover, size, price, quantity }) => {
    return (
       <Link to="/collectives" className="flex p-4 hover:bg-gray-100">
           <Image src={cover} alt={name + "_" + tagname } className="w-40 h-32"/>
           <Box className="ml-3 w-full">
                <Typography as={motion.h5}>
                        {name}  <br /> <span className="font-normal text-base">{tagname}</span>
                </Typography>
                <Box className="flex justify-between">
                        <span>{size}</span>
                        <span>{quantity}</span>
                </Box>
                <Typography as={motion.h6} className="text-gray-900 mt-4">${price}</Typography>
           </Box>
       </Link>
    )
}

export default CartComponent
