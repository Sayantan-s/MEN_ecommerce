import React from 'react';
import { Image, Link, Typography, Box } from 'components';
import { motion } from 'framer-motion';

const ProductCard = ({ name, tagname, price, cover }) => {
    return (
        <Box className="w-80">
            <Link to={`/collectives/product/${name}-${tagname}`} className="cursor-pointer w-full">
                <Image alt={'nike'} className="w-full h-96" src={cover} />
                <Typography as={motion.h5} className="text-gray-700 font-semibold mt-4 truncate">
                    {name} <span className="font-light">{tagname}</span>
                </Typography>
                <Typography as={motion.h6} className="font-normal">
                    {price}
                </Typography>
            </Link>
        </Box>
    );
};

export default ProductCard;
