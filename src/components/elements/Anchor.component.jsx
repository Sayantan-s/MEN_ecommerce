import React from 'react'
import { NavLink } from 'react-router-dom'

const Anchor = ({ to, children, activeClassName,className,...otherProps  }) => {
    return (
      <NavLink 
      className={`uppercase ${className} font-semibold`}
      to={to} 
      activeClassName={activeClassName} 
      {...otherProps}>
         { children }
      </NavLink>
    )
}

export default Anchor
