import React from 'react';
import bg from '../../../images/getty_516722846_206111.jpg';
import profile from '../../../images/profile.png'

const headerStyle = {
    backgroundImage:
        `linear-gradient(to top, rgba(245, 246, 252, 0.52), #3F3B3C ),
    url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    // background: '#1B1B1B',
    height: '100vh'
};

const HeaderBanner = () => {
    return (
        <header style={headerStyle}>
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="row row-cols-md-2">
                    <div className="col-md-6 text-center">
                        <img src={profile} className='w-50' alt=""/>
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h1 className='text-brand'>HELLO! I AM JOBAYER MAJUMDER</h1>
                        <h3>Creative Web Designer</h3>
                        <button className="btn btn-brand rounded-pill">SEE MY WORK</button> <button className='btn btn-brand rounded-pill'>DOWNLOAD RESUME</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderBanner;