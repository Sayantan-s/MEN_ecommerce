import React, { forwardRef } from 'react'
import { NavLink } from 'react-router-dom'

const Anchor = ({ to, children, activeClassName,className,...otherProps  },ref) => {
    return (
      <NavLink 
      ref={ref}
      className={`uppercase ${className} font-semibold`}
      to={to} 
      activeClassName={activeClassName} 
      {...otherProps}>
         { children }
      </NavLink>
    )
}

export default forwardRef(Anchor)
