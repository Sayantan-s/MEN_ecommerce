import { Disclosure, Popover } from '@headlessui/react'
import { LineLock } from 'assets/Icons'
import Logo from 'assets/Logo'
import Anchor from 'components/elements/Anchor.component'
import { motion } from 'framer-motion'
import React from 'react'

const Navbar = () => {
    return (
      <header>
        <Disclosure as={motion.nav} className="flex items-center justify-between w-10/12 mx-auto">
          <Logo />
          <div className="flex">
            <Anchor 
            className="mx-2"
            to="/">
              Home
            </Anchor>
            <Anchor 
            className="mx-2"
            to="/collections">
              Collections
            </Anchor>
            <Popover>
              {
                ({ open }) => {
                  return <>
                      <Popover.Button 
                        to="#"
                        className="uppercase focus:outline-none" 
                        as={Anchor}>
                          Catagories
                      </Popover.Button>
                      <Popover.Panel as={motion.div} className="absolute z-10 bg-gray-50 p-4 shadow-md rounded-2xl flex items-center">
                          {
                            ['Clothing', 'Accessories', 'Shoes'].map(product => {
                              const link = product.toLowerCase();
                              return <Anchor
                              className="mx-2"
                              key={link} 
                              to={`/${link}`}>
                                {product}
                              </Anchor>
                            })
                          }
                      </Popover.Panel>
                  </>
                }
              }
            </Popover>
          </div>
          <div>
            <Anchor 
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-lg shadow-sm font-medium text-white bg-gray-900 hover:bg-gray-700"
            to="/admin">
              <span>
                Admin
              </span>
              <LineLock className="stroke-current stroke-4" width={15}/>
            </Anchor>
          </div>
        </Disclosure>
      </header>
    )
}

export default Navbar
