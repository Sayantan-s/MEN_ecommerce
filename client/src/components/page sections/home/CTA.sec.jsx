import React from 'react';
import { Box, Image, Heading } from 'components';

const Header = () => {
    return (
        <Box className="w-full">
            <Heading
                level={2}
                className="text-center leading-none tracking-wide pt-8 uppercase">
                INTRODUCING THE JORDAN ZION
                <br />
                Your Workhorse With Wings is here,
                <br />
                now more comfortable than ever.
            </Heading>
            <Image
                className="w-full h-160 mb-16 mt-10"
                src="https://air.jordan.com/wp-content/uploads/2021/04/SU21_JD_ZION1_ZW_AirBlog-Horiz-01.jpeg"
                alt="nike"
            />
        </Box>
    );
};

export default Header;
