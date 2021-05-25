import { Disclosure } from '@headlessui/react'
import Logo from 'assets/Logo'
import { motion } from 'framer-motion'
import React from 'react'
import { Cart } from 'assets/Icons'
import { WishList } from 'assets/Icons'
import { Box, Button, Link } from 'components'
import { useSelector } from 'react-redux'


const Navbar = () => {

  const { isAuthenticated } =  useSelector(state => state.AuthReducer);

  const NavLinks = [ 
      'Home',
      'Shop',
      'Collectives',
      'Orders',
      'New'
   ]

    return (
      <header className="w-full bg-gray-50">
        <Disclosure as={motion.nav} className="flex items-center justify-between w-10/12 mx-auto">
          <Logo />
          <div className="flex ml-20">
            {
              NavLinks.map((link,id) => (
                  <Link 
                    key={id}
                    type="transparent"
                    className="mx-4"
                    activeClassName="text-gray-700"
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
                      {link}
                  </Link>
              ))
            }
          </div>
          <Box className="flex">
            <Button className="relative mx-2">
              <WishList className="w-7 h-7 text-gray-900 stroke-2"/>
              <div className="bg-red-400 rounded-full w-2 h-2 absolute top-1 -right-1"/>
            </Button>
            <Button className="relative mx-2">
              <Cart className="w-7 h-7 text-gray-900 stroke-2"/>
              <div className="bg-red-400 rounded-full w-2 h-2 absolute top-1 -right-1"/>
            </Button>
            {
              isAuthenticated ? 
              <>
                  <Link
                  to="/admin/add-product"
                  type="outline"
                  className="mx-2 text-gray-900"
                  >
                      Admin
                  </Link>
                  <Button
                  type="primary"
                  className="ml-1"
                  >
                      Logout
                  </Button>
              </> :
               <Link
               to="/auth/register"
               type="primary"
               className="mx-2"
               >
                   Join us
               </Link> 
            }
          </Box>
        </Disclosure>
      </header>
    )
}

export default Navbar
