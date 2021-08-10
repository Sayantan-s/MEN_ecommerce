import { Box } from 'components'
import React, { Children } from 'react'

const Stack = ({ children }) => {
    return (
        <Box>
            {
                Children.map(children, child => {
                    
                })
            }
        </Box>
    )
}

export default Stack
