import React, { useEffect, useState } from 'react';
import { Page, Image, Box, Select } from 'components';
import { Box as ImageSection } from 'components';
import { Box as ContentSection } from 'components';
import { useParams } from 'react-router-dom';
import http from 'utils/http';
import Typography from 'components/elements/Typography.component';
import { motion } from 'framer-motion';
import GenerateRandom from 'utils/generateRandom';
import { useSelect } from 'hooks';

const Product = () => {
    const { id } = useParams();

    const [productData, setData] = useState({});

    const [lightBox, setLightBox] = useState('');

    const [options, select, setSelect] = useSelect([
        { id: 1, name: 'Unisex', disabled: false },
        { id: 2, name: 'Men', disabled: false },
        { id: 3, name: 'Women', disabled: false }
    ])

    const [orderState, setOrder] = useState({
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

    const { otherimages, gender, catagory, name, tagname, price, description } = productData;

    console.log(select);

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
                <ContentSection className="w-1/2 ml-10">
                    <Typography
                        as={motion.h5}
                        className="text-gray-300 uppercase font-regular text-sm">
                        {gender}'s {catagory}
                    </Typography>
                    <Typography as={motion.h1} className="text-gray-900 mt-14">
                        {name} <span>{tagname}</span>
                    </Typography>
                    <Typography as={motion.h4} className="text-gray-900 mt-8 font-regular">
                        <span>{price}</span>
                        <span className="text-gray-300 line-through ml-4">
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
                    <Typography as={motion.p} className="text-gray-800 max-w-2xl mt-10">
                        {description}
                    </Typography>
                    <Select data={options} select={select} onSelect={setSelect} />
                </ContentSection>
            </Box>
        </Page>
    );
};

export default Product;
