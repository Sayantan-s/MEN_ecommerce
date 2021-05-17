import React from 'react'
import { Box, Image, Typography } from 'components'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router'

const ProductCard = ({ name, tagname, price, image }) => {
    const history = useHistory();
    return (
       <Box 
        onClick={() => history.push(`/clothing/${name}-${tagname}`)}
        className="cursor-pointer w-80">
            <Image
                alt={'nike'}
                className="w-full h-80" 
                src={image}
            />
            <Typography as={motion.h5} className="text-gray-700 font-bold mt-4 truncate"> 
                {name} <span className="font-normal">{tagname}</span>
            </Typography>
            <Typography as={motion.h6} className="font-semibold">
                ${price}
            </Typography>
       </Box>
    )
}

export default ProductCard
