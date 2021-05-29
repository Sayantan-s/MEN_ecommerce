import React from 'react';
import { Box, Typography, Image } from 'components';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <Box className="w-full">
            <Typography as={motion.h2} className="text-center text-gray-900 leading-tight pt-8">
                NIKE AIR ZOOM PEGASUS 38
                <br />
                Your Workhorse With Wings is here,
                <br />
                now more comfortable than ever.
            </Typography>
            <Image
                className="w-full h-160 my-16"
                src={
                    'https://static.nike.com/a/images/f_auto/dpr_1.0/w_1792,c_limit/20509994-3436-4b88-a295-34936ead0fc7/nike-just-do-it.jpg'
                }
                alt="nike"
            />
        </Box>
    );
};

export default Header;
