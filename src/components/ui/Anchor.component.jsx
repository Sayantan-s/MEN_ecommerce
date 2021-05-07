import React, { forwardRef } from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({ to, children, activeClassName,className,...otherProps  },ref) => {
    return (
      <NavLink 
      ref={ref}
      className={`uppercase ${className} font-semibold tracking-wider`}
      to={to} 
      activeClassName={activeClassName} 
      {...otherProps}>
         { children }
      </NavLink>
    )
}

export default forwardRef(Link)
