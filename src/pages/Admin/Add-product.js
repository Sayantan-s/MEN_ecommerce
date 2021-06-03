import ImageIcon from 'assets/icons/ImageIcon';
import Upload from 'assets/icons/Upload';
import { Page, Box, Typography, FormField, Button, Select } from 'components';
import { motion } from 'framer-motion';
import { useForm } from 'hooks';
import React from 'react';

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
            half: true
        },
        price: {
            as: 'input',
            ElementConfig: {
                type: 'number',
                placeholder: 'e.g. $62.35'
            },
            value: '',
            labelName: 'Price',
            half: true
        },
        gender: {
            as: 'select',
            ElementConfig: {
                type: 'password',
                placeholder: 'e.g. Enter password with characters...'
            },
            value: '',
            labelName: 'Gender'
        },
        cover: {
            as: 'file',
            ElementConfig: {
                type: 'file',
                accept: 'image/*'
            },
            btnName: <>
                <span className="mr-2">Upload cover image</span>
                <Upload />
            </>,
            button: 'secondary',
            half: true,
            styles : 'pr-2'
        },
        otherimg: {
            as: 'file',
            ElementConfig: {
                type: 'file',
                accept: 'image/*',
                multiple : true
            },
            btnName: 'Add more images',
            button: 'primary',
            half: true,
            styles : 'pl-2'
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
    console.log(form);
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
                                className={`float-left ${
                                    id !== 0 && data.half && id % 2 === 0 ? 'pl-2' : ''
                                } ${id !== 0 && data.half && id % 2 !== 0 ? 'pr-2' : ''} ${
                                    id === form.length - 1 ? 'pb-6' : ''
                                }
                                ${data.as === 'file' && data.styles}
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
            <Box className="w-1/2 ml-10">Product details</Box>
        </Page>
    );
};

export default AddProduct;
