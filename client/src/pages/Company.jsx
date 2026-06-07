import React from 'react'
import CompanyHero from '../components/Company/CompanyHero'
import CompanyAbout from '../components/Company/CompanyAbout'
import CompanyMission from '../components/Company/CompanyMission'
import CareerCTA from '../components/Company/CareerCTA'
import StrategicLocations from '../components/Company/StrategicLocations'
import GrowthTimeline from '../components/Company/GrowthTimeline'
import CommunityPartners from '../components/Company/CommunityPartners'
import CompanyNews from '../components/Company/CompanyNews'

const Company = () => {
    return (
        <>
            <CompanyHero />
            <CompanyAbout />
            <CompanyMission />
            <CareerCTA />
            <StrategicLocations />
            <GrowthTimeline />
            <CommunityPartners />
            <CompanyNews />
        </>
    )
}

export default Company
