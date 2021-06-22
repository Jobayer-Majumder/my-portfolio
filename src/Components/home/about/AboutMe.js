import React from 'react';
import profile from '../../../images/profile.png';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';


const AboutMe = () => {
    return (
        <section id='about' className='bg-dark'>
            <div className="container pt-5 pb-5">
                <h1 className="text-secondary mb-5 text-center">About Me</h1>
                <div className="row row-cols-md-2">
                    <Zoom>
                        <div className="col-md-6 mb-4 text-center">
                            <img src={profile} alt="" className="img-fluid rounded-circle" style={{ background: '#f3d92c', width: '70%' }} />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="col-md-6 shadow-lg p-4 rounded m-auto">
                            <h2 className='text-brand-lite'>Jobayer Majumder</h2>
                            <p className="text-secondary">
                                i am an enthusiastic JavaScript developer with knowing some framework for the front-end and the backend. I have a lot of interest in data structures and Algorithms.
                        </p>
                            <a href="https://www.linkedin.com/in/jobayer-majumder-44727a203/" target='_blank' rel="noreferrer">
                                <span className='fs-2 me-3 text-brand'><FaLinkedin /></span>
                            </a>
                            <a href="https://github.com/Jobayer-Majumder" target='_blank' rel="noreferrer">
                                <span className='fs-2 me-3 text-brand'><FaGithub /></span>
                            </a>
                            <a href="https://web.facebook.com/jobayermajumder70/" target='_blank' rel="noreferrer">
                                <span className='fs-2 me-3 text-brand'><FaFacebook /></span>
                            </a>
                            <a href="https://www.instagram.com/jobayer_majumder70/" target='_blank' rel="noreferrer">
                                <span className='fs-2 me-3 text-brand'><FaInstagram /></span>
                            </a>
                            <a href="https://twitter.com/JobayerMajumder" target='_blank' rel="noreferrer">
                                <span className='fs-2 text-brand'><FaTwitter /></span>
                            </a>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50}>
                                <button className="btn btn-brand text-secondary d-block mt-4">GET IN TOUCH</button>
                            </Link>
                        </div>
                    </Zoom>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;