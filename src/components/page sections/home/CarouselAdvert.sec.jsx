import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Image, ProductCard } from 'components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import http from 'utils/http';

const CarouselAdvert = () => {
    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false
    };

    const [trendState, setTrend] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await http.get('api/trendy-cloth');
            setTrend(data);
        })();
    }, []);

    return (
        <Box className="flex w-full my-10">
            <Image
                alt={'nike'}
                className="w-6/12"
                src={
                    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/914a7bef-5a79-4777-b79a-1d985e671ed5/pro-long-sleeve-top-83nNWW.png'
                }
            />
            <Box className="ml-10 mt-6">
                <Typography as={motion.h2} className="text-gray-900 leading-tight uppercase">
                    In these times,
                    <br />
                    got this for you!
                </Typography>
                <Typography as={motion.h4} className="text-gray-700 my-8">
                    Nike Pro <span className="font-light">Men's Long-Sleeve Top</span>
                </Typography>
                <Typography as={motion.p} className="my-6 max-w-2xl">
                    Save up to 40% on new markdowns. Quantities are limited. The Nike Pro Top gives
                    you a long-sleeve layer for cool conditions. Lightweight, stretchy fabric with
                    Dri-FIT Technology helps keep you comfortable while you train.
                </Typography>
                <Button type="primary" moreStyles="my-8">
                    Shop Now
                </Button>
                <Box className="w-full">
                    <Slider {...settings} className="mt-6 w-144">
                        {trendState.data?.map(({ _id, ...data }) => (
                            <div key={_id}>
                                <ProductCard {...data} className="w-80"/>
                            </div>
                        ))}
                    </Slider>
                </Box>
            </Box>
        </Box>
    );
};

export default CarouselAdvert;
