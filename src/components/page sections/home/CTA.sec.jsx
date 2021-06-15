import React from 'react';
import { Box, Typography, Image } from 'components';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <Box className="w-full">
            <Typography
                as={motion.h2}
                className="text-center text-gray-900 font-bold leading-none tracking-wide pt-8">
                INTRODUCING THE JORDAN ZION
                <br />
                Your Workhorse With Wings is here,
                <br />
                now more comfortable than ever.
            </Typography>
            <Image
                className="w-full h-160 mb-16 mt-10"
                src="https://air.jordan.com/wp-content/uploads/2021/04/SU21_JD_ZION1_ZW_AirBlog-Horiz-01.jpeg"
                alt="nike"
            />
        </Box>
    );
};

export default Header;
