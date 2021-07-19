import { Box, Portals } from 'components'
import React from 'react'

const Toast = (
    {
        icon : Icon,
        toastText = 'Hello'
    }
) => {
    return (
        <Portals domNode="toast">
            <Box className="fixed top-4 right-4 w-48 bg-gray-100 shadow-md">
                <Icon className="w-7 h-7 text-gray-900 stroke-current" />
                <span>
                    {toastText}
                </span>
            </Box>
        </Portals>
    )
}

export default Toast
