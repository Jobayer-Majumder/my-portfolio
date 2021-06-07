import React from 'react';

const AllProject = ({ project }) => {
    const { name, img, liveSite, sourceCode} = project;

    return (
        <>
            <div className="col pb-4">
                <div className="card h-100 border-0 rounded bg-dark text-secondary">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-brand-lite">{name}</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer border-0 d-flex justify-content-around">
                        <a href={`${liveSite}`}>Live Site</a>
                        <a href={`${sourceCode}`}>Source Code</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProject;