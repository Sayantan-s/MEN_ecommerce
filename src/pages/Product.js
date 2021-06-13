import React, { useEffect } from 'react';
import { Page } from 'components';
import { useParams } from 'react-router-dom';
import http from 'utils/http';

const Product = () => {

    const params = useParams();

    useEffect(() => {
        (async() => {
            const { data } = await http.get(`/api/products/${params.id}`);
            console.log(data);
        })()
    },[])

    return <Page>Product</Page>;
};

export default Product;
