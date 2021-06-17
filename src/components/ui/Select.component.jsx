import { Listbox } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/outline';

const Select = ({ className, data, value, onChange }) => {
    const selectAnimation = {
        from: {
            height: 0
        },
        to: {
            height: 'auto',
            transition: {
                staggerChildren: 0.08,
                when: 'beforeChildren'
            }
        }
    };

    const selectOptionAnimation = {
        from: {
            y: 20,
            opacity: 0
        },
        to: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <Listbox
            value={value}
            onChange={onChange}
            className={`w-full relative ${className}`}
            as={motion.div}>
            {({ open }) => (
                <>
                    <Listbox.Button
                        as={motion.button}
                        className="focus:outline-none w-full text-left rounded-2xl p-4 border-2 border-gray-200 flex items-center justify-between">
                        <span>{value.name}</span>
                        <ChevronDownIcon
                            className={`w-5 h-5 stroke-2 transform transition-transform duration-200 ${
                                open ? `rotate-180` : 'rotate-0'
                            }`}
                        />
                    </Listbox.Button>
                    <AnimatePresence>
                        {open && (
                            <Listbox.Options
                                style={{ originX: 0.5 }}
                                as={motion.ul}
                                variants={selectAnimation}
                                initial={'from'}
                                animate={'to'}
                                className="absolute py-1 mt-2 bg-gray-50 shadow-md w-full rounded-xl overflow-hidden">
                                {data.map((option) => (
                                    <Listbox.Option
                                        variants={selectOptionAnimation}
                                        as={motion.li}
                                        key={option.id}
                                        value={option}
                                        disabled={option.disabled}
                                        className="cursor-pointer px-4 py-2">
                                        {option.name}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        )}
                    </AnimatePresence>
                </>
            )}
        </Listbox>
    );
};

export default Select;
