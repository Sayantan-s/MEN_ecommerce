import React from 'react';
import { Image, Link, Typography, Box } from 'components';
import { motion } from 'framer-motion';

const ProductCard = ({ name, tagname, price, cover, className,height }) => {
    return (
        <Box className={className}>
            <Link to={`/collectives/product/${name}_${tagname}`} className="cursor-pointer w-full">
                <Image alt={'nike'} className={`w-full ${height === "large" ? "h-112" : "h-96"}`} src={cover} />
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
