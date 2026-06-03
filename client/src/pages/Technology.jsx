import React from 'react'
import TechHero from '../components/Technology/TechHero'
import VisibilitySection from '../components/Technology/VisibilitySection'
import ITSEngage from '../components/Technology/ITSEngage'
import CarrierTech from '../components/Technology/CarrierTech'
import LoopSection from '../components/Technology/LoopSection'
import TechCTA from '../components/Technology/TechCTA'
import NewsSection from '../components/Home/NewsSection'
import LogoMarquee from '../components/Home/LogoMarquee'

const Technology = () => {
    return (
        <>
            <TechHero />
            <VisibilitySection />
            <ITSEngage />
            <CarrierTech />
            <LoopSection />
            <NewsSection />
            <LogoMarquee />
        </>
    )
}

export default Technology