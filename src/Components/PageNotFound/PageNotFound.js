import React from 'react';

const PageNotFound = () => {
    return (
        <section className='d-flex flex-column justify-content-center align-items-center' style={{height: '100vh'}}>
            <h1 className='text-danger'>Ops! Page Not Found</h1>
            <h5 className='text-danger'>Please try again later...</h5>
        </section>
    );
};

export default PageNotFound;