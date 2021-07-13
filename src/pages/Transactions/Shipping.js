import { Box, Page, Typography } from 'components'
import { motion } from 'framer-motion'
import React from 'react'

const Shipping = () => {
    return (
        <Page className="py-10">
            <Box>
                <Typography as={motion.h4} className="text-gray-900"> 
                    Your information
                </Typography>
            </Box>
            <Box>
                <Typography as={motion.h4} className="text-gray-900"> 
                    Shipping address
                </Typography>
            </Box>
        </Page>
    )
}

export default Shipping
