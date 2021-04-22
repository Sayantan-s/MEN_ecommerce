import React from 'react'

const Box = ({ children,...otherProps }) => {
    return (
        <div className="w-10/12 mx-auto" {...otherProps}>
            { children }
        </div>
    )
}

export default Box;
