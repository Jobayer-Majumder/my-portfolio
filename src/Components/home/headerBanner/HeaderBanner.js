import React from 'react';
import profile from '../../../images/hire-dedicated-reactjs-developer.png';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';



const HeaderBanner = () => {
    return (
        <header className='bg-dark d-flex align-items-center' style={{ height: '100vh' }}>
            <div className="container">
                <div className="d-flex flex-column flex-column-reverse flex-md-row py-4">
                    <Fade bottom>
                        <div className="col-md-6 d-flex align-items-center justify-content-center mb-3">
                            <div className='text-center text-md-start py-4'>
                                <h1 className='text-white'>HELLO! <br /> <span className='text-brand-lite'>I'M JOBAYER MAJUMDER</span> </h1>
                                <h3 className='text-white mb-3'>
                                    <Typewriter
                                        options={{
                                            strings: ['Front-end Developer', 'React Developer', 'MERN Stack Developer'],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 1,
                                        }}
                                    />
                                </h3>
                                <Link activeClass="active" to="work">
                                    <button className="btn btn-brand text-secondary rounded-pill me-3">SEE MY WORK</button>
                                </Link>
                                <a className="btn btn-brand text-secondary rounded-pill" href="https://drive.google.com/uc?export=download&id=1E5d9j1eSjTPXzivJx5ZXxkaJm_7zQlY5" role="button" rel="noreferrer">Download Resume</a>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="col-md-6 text-center">
                            <img src={profile} className='img-fluid' alt="" />
                        </div>
                    </Fade>
                </div>
            </div>
        </header>
    );
};

export default HeaderBanner;