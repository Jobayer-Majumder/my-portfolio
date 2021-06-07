import React from 'react';
import ShowService from './ShowService';
import { MdDeveloperMode } from 'react-icons/md';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { GiSwordBrandish } from 'react-icons/gi';
import Fade from 'react-reveal/Fade';


const serviceData = [
    {
        title: 'Web Design',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, temporibus. Nihil, libero aperiam. At, itaque!',
        icon: <AiOutlineAntDesign />
    },
    {
        title: 'Web Development',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, temporibus. Nihil, libero aperiam. At, itaque!',
        icon: <MdDeveloperMode />
    },
    {
        title: 'Brand Identity',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, temporibus. Nihil, libero aperiam. At, itaque!',
        icon: <GiSwordBrandish />
    },
]

const Service = () => {
    return (
        <section id='service' className='pb-5 pt-4' style={{ background: '#1b1b1b' }}>
            <Fade bottom cascade>
                <div className="container pt-5 pb-5">
                    <h1 className='text-center text-secondary mb-4'>Services</h1>
                    <hr className='text-white' />
                    <div className="row row-cols-1 row-cols-md-3">
                        {
                            serviceData.map((service, index) => <ShowService key={index++} service={service} />)
                        }
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default Service;