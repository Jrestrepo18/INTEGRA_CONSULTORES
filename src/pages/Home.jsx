import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import WhatWeDo from '../sections/WhatWeDo';
import Experience from '../sections/Experience';
import Services from '../sections/Services';
import Contact from '../sections/Contact';
import TrustBar from '../components/TrustBar';
import ClientsCarousel from '../components/ClientsCarousel';

const Home = () => {
    return (
        <>
            <Hero />
            {/* TrustBar removed to avoid duplication with Experience section */}
            <Experience />
            <About />
            <WhatWeDo />
            <Services />
            <ClientsCarousel />
        </>
    );
};

export default Home;
