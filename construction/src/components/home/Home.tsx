import React from 'react'
import Review from '../review/Review'
import Services from '../services/services'
import AboutCompany from '../aboutCompany/AboutCompany';

const Home = () => {
    return (
        <>
            <Services />
            <AboutCompany />
            <Review />
        </>
    )
}

export default Home