import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

const people = [
    { id: 1, name: 'Unisex', unavailable: false },
    { id: 2, name: 'Men', unavailable: false },
    { id: 3, name: 'Women', unavailable: false }
];

const Select = ({ className, data }) => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);

    const selectAnimation = {
        from : {
            height: 0,
            opacity: 0
        },
        to: {
            height: "auto",
            opacity: 1,
            transition: {
                type: "spring",
                staggerChildren: 0.08,
                when: "beforeChildren"
            }
        }
    }

    const selectOptionAnimation = {
        from : {
            y: 20,
            opacity: 0
        },
        to : {
            y: 0,
            opacity: 1
        }
    }

    return (
        <Listbox
            value={selectedPerson}
            onChange={setSelectedPerson}
            className={`w-full relative ${className}`}
            as={motion.div}>
            {({ open }) => (
                <>
                    <Listbox.Button
                        whileTap={{ scale: 0.99 }}
                        as={motion.button}
                        className="focus:outline-none w-full text-left rounded-2xl p-4 border-2 border-gray-200">
                        {selectedPerson.name}
                    </Listbox.Button>
                    <AnimatePresence>
                        {open && (
                            <Listbox.Options
                                style={{ originX: 0.5 }}
                                as={motion.ul}
                                variants={selectAnimation}
                                initial={"from"}
                                animate={"to"}
                                exit={{ opacity: 0 }}
                                className="absolute py-1 mt-2 bg-gray-50 shadow-md w-full rounded-xl overflow-hidden">
                                {(data || people).map((person) => (
                                    <Listbox.Option
                                        variants={selectOptionAnimation}
                                        as={motion.li}
                                        key={person.id}
                                        value={person}
                                        disabled={person.unavailable}
                                        className="cursor-pointer px-4 py-2">
                                        {person.name}
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
