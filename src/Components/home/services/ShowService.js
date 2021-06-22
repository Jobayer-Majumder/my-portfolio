import React from 'react';
import Zoom from 'react-reveal/Zoom';


const ShowService = ({ service }) => {
    const { title, desc, icon } = service;
    return (
        <div class="col shadow-lg mb-3">
            <Zoom>
                <div className='card bg-dark text-white text-center'>
                    <div className="card-header" style={{ border: 'none' }}>
                        <h1 className='text-brand'>{icon}</h1>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title text-brand-lite">{title}</h3>
                        <p className="card-text text-secondary">{desc}</p>
                    </div>
                </div>
            </Zoom>

        </div>
    );
};

export default ShowService;