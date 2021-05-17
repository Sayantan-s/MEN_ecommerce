import React from 'react'
import { Box, Image, Link, Typography } from 'components'
import { motion } from 'framer-motion'
const Adverts = () => {
    return (
       <Box
       className="w-full my-16 flex">
            <Box
            to="/collectives"
            as={Link}  
            className="w-8/12 h-112 relative mr-5">
                <Box className="absolute w-full h-full filter brightness-75">
                    <Image 
                        className="w-full h-full mr-5"
                        alt="nike"
                        src={'https://static.nike.com/a/images/f_auto/dpr_1.0/w_1792,c_limit/0b945e48-c689-4bcb-90fc-c62196911ede/nike-just-do-it.jpg'}
                    />
                </Box>
                <Box className="absolute bottom-10 left-10 z-50">
                    <Typography as={motion.h3} className="text-gray-50 font-bold leading-tight">
                        Summer must haves:<br />
                        The Classics.
                    </Typography>
                </Box>
            </Box>
            <Box
            to="/collectives"
            as={Link}  
            className="w-5/12 h-112 relative ml-5">
                <Box className="absolute w-full h-full filter brightness-75">
                    <Image 
                        className="w-full h-full mr-5"
                        alt="nike"
                        src={'https://static.nike.com/a/images/w_960,c_limit,f_auto/3d8b86d4-9e85-4eed-b0a4-d1b4dda561bf/nocta-cardinal-stock-release-date.jpg'}
                    />
                </Box>
                <Box className="absolute bottom-10 left-10 z-50">
                    <Typography as={motion.h3} className="text-gray-50 font-bold leading-tight">
                        Kim Jones Favors<br />
                        the Air Max 95.
                    </Typography>
                </Box>
            </Box>
       </Box>
    )
}

export default Adverts