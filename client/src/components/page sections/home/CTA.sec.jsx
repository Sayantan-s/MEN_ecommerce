import React from 'react';
import { Box, Image, Heading } from 'components';

const Header = () => {
    return (
        <Box className="w-full">
            <Heading level={2} className="text-center leading-none tracking-wide pt-8 uppercase">
                INTRODUCING THE JORDAN ZION
                <br />
                Your Workhorse With Wings is here,
                <br />
                now more comfortable than ever.
            </Heading>
            <Image
                className="w-full h-160 mb-16 mt-10"
                src="/jordan.jpg"
                alt="nike"
            />
        </Box>
    );
};

export default Header;
