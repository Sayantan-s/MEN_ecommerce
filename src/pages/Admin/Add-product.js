import { ArrowRightIcon } from '@heroicons/react/solid';
import { Page, Box, Typography, Button, Image, Input, Select } from 'components';
import { motion } from 'framer-motion';
import { useForm, useSelect } from 'hooks';
import React, { useState } from 'react';

const AddProduct = () => {
    const [{ name, tagname, price, description }, handleChange, onSubmitHandler] = useForm({
        name: '',
        tagname: '',
        price: '',
        description: ''
    });

    const [ data, select, onChange ] = useSelect([
        { id: 1, name: 'Clothing', disabled: false },
        { id: 2, name: 'Shoes', disabled: false },
        { id: 3, name: 'Accessories', disabled: false },
        { id: 4, name: 'Others...', disabled: false }
    ])

    const [imgId, setId] = useState(5);

    return (
        <Page className="flex">
            <Box className="w-1/2">
                <Box className="w-full my-20">
                    <Typography as={motion.h3} className="text-gray-900 font-normal">
                        Hey Admin,
                    </Typography>
                    <Typography as={motion.h3} className="text-gray-300 font-normal my-4">
                        Start adding products
                        <br /> according to the stocks.
                    </Typography>
                    <Box
                        rel="noopener noreferrer"
                        target="_blank"
                        as={motion.a}
                        className="text-red-500 text-xs mt-10"
                        href="https://www.nike.com/in/w">
                        *please use this link to add product photos & details..
                    </Box>
                    <Box as={motion.form} className="mt-10" onSubmit={onSubmitHandler}>
                        <Box className="flex">
                            <Input
                                type="text"
                                name="name"
                                placeholder="e.g. Nike Air 6D..."
                                variant="normal"
                                value={name}
                                onChange={handleChange}
                                labelName="Product Name"
                                styles="mr-4"
                            />
                            <Input
                                type="text"
                                name="tagname"
                                placeholder="e.g. 6-AZD Flyknit..."
                                variant="normal"
                                value={tagname}
                                onChange={handleChange}
                                labelName="Tagname"
                                styles="ml-4"
                            />
                        </Box>
                        <Box className="flex items-center">
                            <Input
                                type="number"
                                name="price"
                                placeholder="e.g. $62.35"
                                variant="normal"
                                value={price}
                                onChange={handleChange}
                                labelName="Price"
                                className="mr-4"
                            />
                            <Select 
                                className="ml-4"
                                data={data}
                                value={select}
                                onChange={onChange}
                            />
                        </Box>
                        <Input
                            name="description"
                            placeholder="e.g. Nike Air 6D..."
                            variant="normal"
                            value={description}
                            onChange={handleChange}
                            labelName="Product Name"
                            styles="mr-4"
                        />
                        <Button type="primary" className="w-full mt-12">
                            Add product
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box className="w-1/2 ml-10">
                <Box className="w-full my-20">
                    <Typography
                        as={motion.h3}
                        className="text-gray-900 font-normal flex items-center">
                        <span>Product details</span>
                        <ArrowRightIcon className="h-12 w-12 ml-1 transform -rotate-45" />
                    </Typography>
                    <Box className="w-full mt-6">
                        <Box className="w-full flex">
                            <Image
                                src={`https://air.jordan.com/wp-content/uploads/2021/03/Zion_Zion1_Gallery_${imgId}.jpg`}
                                alt="jordan_img"
                                className="w-10/12 h-96"
                            />
                            <Box className="w-2/12 ml-2 flex flex-col">
                                {[4, 5, 6, 8].map((imgno, id) => (
                                    <Image
                                        src={`https://air.jordan.com/wp-content/uploads/2021/03/Zion_Zion1_Gallery_${imgno}.jpg`}
                                        alt={'jordan_img' + id}
                                        className={`w-full h-1/4 cursor-pointer ${
                                            id !== 0 && 'mt-2'
                                        }`}
                                        key={id}
                                        onClick={() => setId(imgno)}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Page>
    );
};

export default AddProduct;
