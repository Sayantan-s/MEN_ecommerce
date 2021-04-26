import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react'
import { Link } from '..';

const Dropdown = ({ data,btnname }) => {
    return (
        <Popover>
        {
          ({ open }) => {
            return <>
                <Popover.Button 
                  to="#"
                  className="uppercase focus:outline-none mx-3" 
                  as={Link}>
                    {btnname}
                </Popover.Button>
                <Transition
                show={open}
                as={Fragment}
                enter="transition ease-in-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel 
                        static
                        as={'div'} 
                        className="absolute z-10 bg-gray-50 p-4 shadow-md rounded-2xl flex items-center">
                            {
                                data.map(product => {
                                    const link = product.toLowerCase();
                                        return <Link
                                                className="mx-2"
                                                key={link} 
                                                to={`/${link}`}>
                                                {product}
                                            </Link>
                                })
                            }
                    </Popover.Panel>
                </Transition>
            </>
          }
        }
        </Popover>
    )
}

export default Dropdown
