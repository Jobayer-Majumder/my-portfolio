import React from 'react';
import AboutMe from '../about/AboutMe';
import Contact from '../contact/Contact';
import HeaderBanner from '../headerBanner/HeaderBanner';
import Navbar from '../navbar/Navbar';
import Projects from '../projects/Projects';
import Service from '../services/Service';
import Skills from '../skills/Skills';


const Home = () => {


    return (
        <>
            <Navbar />
            <HeaderBanner />
            <Service />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;