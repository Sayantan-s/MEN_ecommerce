import { Page } from 'components';
import React from 'react';
import CarouselAdvert from 'components/page sections/home/CarouselAdvert.sec';
import HomeHeader from 'components/page sections/home/Header.sec';
import Adverts from 'components/page sections/home/Adverts.sec';
import JordanStory from 'components/page sections/home/JordanStory.sec';

const Home = () => {
    return (
        <Page>
            <HomeHeader />
            <CarouselAdvert />
            <JordanStory />
            <Adverts />
        </Page>
    );
};

export default Home;
