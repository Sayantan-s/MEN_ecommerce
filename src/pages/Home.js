import { Page } from 'components'
import React from 'react'
import CarouselAdvert from 'components/page sections/home/CarouselAdvert.sec';
import HomeHeader from 'components/page sections/home/Header.sec';
 

const Home = () => {
    return (
       <Page>
          <HomeHeader />
          <CarouselAdvert />
       </Page>
    )
}

export default Home
 