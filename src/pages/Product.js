import React, { useEffect, useState } from 'react';
import { Page, Image, Box } from 'components';
import { Box as ImageSection } from 'components';
import { Box as ContentSection } from 'components';
import { useParams } from 'react-router-dom';
import http from 'utils/http';

const Product = () => {
    const { id } = useParams();

    const [productData, setData] = useState({});

    const [lightBox, setLightBox] = useState('');

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

    return (
        <Page>
            <Box className="w-full h-full flex py-8">
                <ImageSection className="w-7/12 flex">
                    <Image src={lightBox} alt="cover_img" className="w-full order-2 ml-4" />
                    <Box className="flex flex-col order-1">
                        {productData.otherimages?.map((img, id) => (
                            <Image
                                src={img}
                                alt={'_img_' + id}
                                className={`w-64 h-44 cursor-pointer ${id !== 0 && 'mt-4'}`}
                                onClick={(_) => handleLightBox(img)}
                            />
                        ))}
                    </Box>
                </ImageSection>
                <ContentSection className="w-1/2"></ContentSection>
            </Box>
        </Page>
    );
};

export default Product;
