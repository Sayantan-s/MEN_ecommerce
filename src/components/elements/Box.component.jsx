import React from 'react'

const Box = ({ children,as,...otherProps }) => {
    const Eletype = as;
    return (
        <Eletype className="w-10/12 mx-auto" {...otherProps}>
            { children }
        </Eletype>
    )
}

Box.defaultProps = {
    as : 'div'
}

export default Box;
