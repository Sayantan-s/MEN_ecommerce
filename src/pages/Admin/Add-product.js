import { UploadIcon } from '@heroicons/react/outline';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { Page, Box, Typography, FormField, Button, Image } from 'components';
import { motion } from 'framer-motion';
import { useForm, useSelect } from 'hooks';
import React, { useState } from 'react';

const AddProduct = () => {
    const [form, onChangeHandler, onSubmitHandler] = useForm({
        productName: {
            as: 'input',
            ElementConfig: {
                type: 'text',
                placeholder: 'e.g. Nike Air 6D...'
            },
            value: '',
            labelName: 'Product Name'
        },
        productTagname: {
            as: 'input',
            ElementConfig: {
                type: 'text',
                placeholder: 'e.g. 6-AZD Flyknit...'
            },
            value: '',
            labelName: 'Tagname',
            half: true,
            styles: 'pr-2'
        },
        price: {
            as: 'input',
            ElementConfig: {
                type: 'number',
                placeholder: 'e.g. $62.35'
            },
            value: '',
            labelName: 'Price',
            half: true,
            styles: 'pl-2'
        },
        cover: {
            as: 'file',
            ElementConfig: {
                type: 'file',
                accept: 'image/*'
            },
            btnName: (
                <>
                    <span className="mr-2">Upload cover image</span>
                    <UploadIcon className="h-5 w-5" />
                </>
            ),
            button: 'secondary',
            half: true,
            styles: 'pr-2'
        },
        otherimg: {
            as: 'file',
            ElementConfig: {
                type: 'file',
                accept: 'image/*',
                multiple: true
            },
            btnName: 'Add more images',
            button: 'primary',
            half: true,
            styles: 'pl-2'
        },
        productDetails: {
            as: 'textarea',
            ElementConfig: {
                placeholder: 'e.g. Add product description with minute details...',
                rows: 6
            },
            value: '',
            labelName: 'Product Details'
        }
    });

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
                        {form.map(({ key, data }, id) => (
                            <FormField
                                key={key}
                                className={`float-left ${id === form.length - 1 ? 'pb-6' : ''}
                                ${data.half && data.styles}
                            `}
                                {...data}
                                onChange={onChangeHandler}
                            />
                        ))}
                        <Button type="primary" className="w-full">
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
