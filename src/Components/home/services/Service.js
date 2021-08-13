import React from 'react';
import ShowService from './ShowService';
import { MdDeveloperMode } from 'react-icons/md';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { GiSwordBrandish } from 'react-icons/gi';



const serviceData = [
    {
        title: 'Web Design',
        desc: 'Are you looking to lunch your redesigned or brand-new website fast, I offer you rapid web design services.',
        icon: <AiOutlineAntDesign />
    },
    {
        title: 'Web Development',
        desc: 'Do you want to take your business to its next stage of success? this is the right choice for you.',
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
        <section id='service' style={{ background: '#1b1b1b', padding: '100px 0' }}>
            <div className="container pt-5 pb-5">
                <h1 className='text-center text-secondary mb-4'>Services</h1>
                <hr className='text-white' />
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        serviceData.map((service, index) => <ShowService key={index++} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;