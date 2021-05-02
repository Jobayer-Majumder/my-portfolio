import React from 'react';
import HeaderBanner from '../headerBanner/HeaderBanner';
import Navbar from '../navbar/Navbar';
import Projects from '../projects/Projects';
import Service from '../services/Service';
import Skills from '../skills/Skills';



const Home = () => {
    

    return (
        <div>
            <HeaderBanner />
            <Navbar />
            <Service />
            <Skills />
            <Projects />
        </div>
    );
};

export default Home;