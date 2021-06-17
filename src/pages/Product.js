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
import { HeartIcon as HeartFilled } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';

const Product = () => {
    const { id } = useParams();

    const [productData, setData] = useState({});

    const [lightBox, setLightBox] = useState('');

    const [isWishlisted, setWishlisted] = useState(false);

    const [counter, handleCount] = useCounter({
        start: 3,
        incrementBy: 0.5,
        decrementBy: 0.5,
        limit: [3, 9]
    });

    const [options, select, setSelect] = useSelect([
        { id: 1, name: 'Unisex', disabled: false },
        { id: 2, name: 'Men', disabled: false },
        { id: 3, name: 'Women', disabled: false }
    ]);

    const [orderState, setOrder] = useState({
        _id: '',
        gender: '',
        size: ''
    });

    useEffect(() => {
        (async () => {
            const {
                data: { data }
            } = await http.get(`/api/products/${id}`);
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

    const { otherimages, gender, catagory, name, tagname, price, description, _id } = productData;

    const handleAddToCart = async() => {
        setOrder({
            _id,
            gender: select.name,
            size: counter.toFixed(1)
        });
    };

    console.log(orderState);

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
                <ContentSection className="w-1/2 ml-10 relative">
                    <Button
                        className="absolute right-0 bg-red-50 p-2 rounded-full"
                        onClick={() => setWishlisted(!isWishlisted)}>
                        {isWishlisted ? (
                            <HeartFilled className="w-8 h-8 text-red-500 fill-current" />
                        ) : (
                            <HeartIcon className="w-8 h-8 text-red-500 stroke-current" />
                        )}
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
                    <Box className="flex w-full mt-4 items-center">
                        <Select
                            data={options}
                            value={select}
                            onChange={setSelect}
                            className="w-1/3"
                        />
                        <Box className="flex items-center justify-between w-2/3 ml-4 max-w-sm">
                            <Box className="text-xl text-gray-900 font-semibold uppercase">
                                choose size
                            </Box>
                            <Size className="text-4xl font-semibold text-gray-900 flex flex-col items-center">
                                <Button onClick={() => handleCount('INCREMENT')}>
                                    <ChevronUpIcon className="w-10 h-10" />
                                </Button>
                                <span>{counter.toFixed(1)}</span>
                                <Button onClick={() => handleCount('DECREMENT')}>
                                    <ChevronDownIcon className="w-10 h-10" />
                                </Button>
                            </Size>
                        </Box>
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
