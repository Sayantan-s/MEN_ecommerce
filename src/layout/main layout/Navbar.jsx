import { Disclosure, Popover } from '@headlessui/react'
import { LineLock } from 'assets/Icons'
import Logo from 'assets/Logo'
import Anchor from 'components/elements/Anchor.component'
import { motion } from 'framer-motion'
import React from 'react'

const Navbar = () => {
    return (
      <header>
        <Disclosure as={motion.nav} className="w-10/12 mx-auto flex items-center justify-between">
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
            to="/admin">
              <span className="h-max">
                Admin
              </span>
            </Anchor>
          </div>
        </Disclosure>
      </header>
    )
}

export default Navbar
