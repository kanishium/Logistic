import React from 'react'
import Hero from '../components/Home/Hero'
import Numbers from '../components/Home/Numbers'
import Culture from '../components/Home/Culture'
import Review from '../components/Home/Review'
import LogoMarquee from '../components/Home/LogoMarquee'
import CarrierSection from '../components/Home/CarrierSection'
import MapSection from '../components/Home/MapSection'
import OurCompanyHome from '../components/Home/OurCompanyHome'
import NewsSection from '../components/Home/NewsSection'

const Home = () => {
    return (
        <>
            <Hero />
            <Numbers />
            <Culture />
            <MapSection />
            <Review />
            <LogoMarquee />
            <CarrierSection />
            <OurCompanyHome />
            <NewsSection />
        </>
    )
}

export default Home