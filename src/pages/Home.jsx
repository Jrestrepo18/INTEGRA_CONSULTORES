import React from 'react';
import Hero from '../sections/Hero';
import About from './About';
import WhatWeDo from '../sections/WhatWeDo';
import Experience from '../sections/Experience';
import Services from './Services';
import Contact from './Contact';
import TrustBar from '../components/ui/TrustBar';
import ClientsCarousel from '../components/ui/ClientsCarousel';

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
