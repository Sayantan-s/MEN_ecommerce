import { Box, Portals } from 'components'
import React from 'react'

const Toast = (
    {
        icon : Icon,
        toastText = 'Hello',
        type
    }
) => {
    return (
        <Portals domNode="toast">
            <Box className={`fixed bottom-4 right-4 w-48 bg-${type === 'danger' ? 'red': type === 'success' ? 'green' : 'gray'}-100 shadow-md z-50 px-2 py-2 flex items-center rounded-lg`}>
                {Icon && <Icon className="w-7 h-7 text-gray-900 stroke-current" />}
                <span className="ml-2 text-gray-400">
                    {toastText}
                </span>
            </Box>
        </Portals>
    )
}

export default Toast
