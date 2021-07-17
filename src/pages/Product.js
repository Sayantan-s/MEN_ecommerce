import React, { useEffect, useState } from 'react';
import { Page, Image, Box, Select, Button } from 'components';
import { Box as ImageSection } from 'components';
import { Box as ContentSection } from 'components';
import { Box as Size } from 'components';
import { useParams } from 'react-router-dom';
import http from 'utils/http';
import Typography from 'components/elements/Typography.component';
import { motion } from 'framer-motion';
import { useCounter, useSelect } from 'hooks';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import Heart from 'assets/icons/outline/Heart';

const Product = () => {
    const { id } = useParams();

    const [productData, setData] = useState({});

    const [lightBox, setLightBox] = useState('');

    const [isWishlisted, setWishlisted] = useState(false);

    const [counter, handleCount] = useCounter({
        start: 0,
        incrementBy: 1,
        decrementBy: 1,
        limit: [0, 150]
    });

    const [options, select, setSelect] = useSelect([
        { id: 1, name: 'sm', disabled: false },
        { id: 2, name: 'md', disabled: false },
        { id: 3, name: 'lg', disabled: false },
        { id: 4, name: 'xl', disabled: false },
        { id: 5, name: 'xxl', disabled: false }
    ]);

    useEffect(() => {
        (async () => {
            const {
                data: { data }
            } = await http.get(`/products/${id}`);
            setLightBox(data.cover);
            setData(() => {
                const newData = {
                    ...data,
                    otherimages: [data.cover, ...data.otherimages]
                };
                delete newData.cover;
                return newData;
            });
        })();
    }, []);

    const handleLightBox = (img) => setLightBox(img);

    const { otherimages, gender, catagory, name, tagname, price, description } = productData;

    const handleAddToCart = async () => {
        if (counter > 0) {
            const { data } = await http({
                method: 'POST',
                url: '/cart',
                data: {
                    user_id: '8cf4f1f5-2024-468e-855a-fb8d141c966f',
                    product_id: productData.id,
                    size: select.name,
                    quantity: counter
                }
            });
            console.log(data)
        } else {
            console.log('Please add something as quantity!');
        }
    };

    return (
        <Page>
            <Box className="w-full h-full flex py-8">
                <ImageSection className="w-7/12 flex">
                    <Image src={lightBox} alt="cover_img" className="w-full order-2 ml-4" />
                    <Box className="flex flex-col order-1">
                        {otherimages?.map((img, id) => (
                            <Image
                                key={id}
                                src={img}
                                alt={'_img_' + id}
                                className={`w-64 h-44 cursor-pointer ${id !== 0 && 'mt-4'}`}
                                onClick={() => handleLightBox(img)}
                            />
                        ))}
                    </Box>
                </ImageSection>
                <ContentSection className="w-5/12 ml-10 relative">
                    <Button
                        className="absolute right-0 bg-red-50 p-2 rounded-full"
                        onClick={() => setWishlisted(!isWishlisted)}>
                         <Heart className={`w-8 h-8 text-red-500 stroke-2 ${isWishlisted ? 'fill-current' : 'stroke-current'}`} />
                    </Button>
                    <Typography
                        as={motion.h5}
                        className="mt-8 text-gray-300 uppercase font-normal text-base">
                        {gender}'s {catagory}
                    </Typography>
                    <Typography as={motion.h1} className="text-gray-900 mt-14">
                        {name} <span>{tagname}</span>
                    </Typography>
                    <Typography as={motion.h4} className="text-gray-900 mt-8 font-regular">
                        <span>{price}</span>
                        <span className="text-gray-300 line-through ml-4 font-normal text-2xl">
                            {(
                                Number(
                                    price
                                        ?.substr(1, price.length - 1)
                                        .split('.')[0]
                                        .split(',')
                                        .join('')
                                ) + 100
                            ).toFixed(2)}
                        </span>
                    </Typography>
                    <Typography
                        as={motion.p}
                        className="text-gray-800 mt-10 max-w-2xl line-clamp-3">
                        {description}
                    </Typography>
                    <Box className="flex w-full mt-6 items-center justify-between max-w-2xl">
                        <Box className="flex items-center justify-between max-w-sm w-3/5">
                            <Box
                                as={motion.span}
                                className="text-gray-300 font-semibold text-xl uppercase whitespace-nowrap w-max">
                                choose Qty.
                            </Box>
                            <Size className="text-2xl font-semibold text-gray-900 flex items-center">
                                <Button onClick={() => handleCount('DECREMENT')}>
                                    <ChevronDownIcon className="w-7 h-7" />
                                </Button>
                                <span className="w-12 text-center">{counter}</span>
                                <Button onClick={() => handleCount('INCREMENT')}>
                                    <ChevronUpIcon className="w-7 h-7" />
                                </Button>
                            </Size>
                        </Box>
                        <Select
                            data={options}
                            value={select}
                            onChange={setSelect}
                            className="w-2/5 ml-4"
                        />
                    </Box>
                    <Button type="primary" className="w-full py-5 mt-14" onClick={handleAddToCart}>
                        add to cart
                    </Button>
                </ContentSection>
            </Box>
        </Page>
    );
};

export default Product;
