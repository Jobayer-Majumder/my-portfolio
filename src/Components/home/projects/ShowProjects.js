import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Zoom from 'react-reveal/Zoom';


const ShowProjects = ({ project }) => {
    const { img, name, desc, liveLink, gitLink, techUsed } = project;

    

    return (
        <>
            <div className="col-md-12 mb-4">
                <div className="row row-cols-md-2">
                    <Zoom>
                        <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
                            <img src={img} alt="" className='img-fluid rounded' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="col-md-6 bg-dark text-white rounded pt-3 px-4">
                            <h5 className='text-brand-lite'>{name}</h5>
                            <small className='text-secondary d-block'>{desc}</small>
                            <a href={gitLink} className='fs-2 text-brand me-3' target='_blank' rel="noreferrer"><AiOutlineGithub /></a>
                            <a href={liveLink} className='fs-2 text-brand ' target='_blank' rel="noreferrer"><HiOutlineExternalLink /></a>
                            <p className='pt-2'>
                                {
                                    techUsed?.map((tech, index) => <span className="badge bg-secondary me-2 mb-2" key={index++}>{tech}</span>)
                                }
                            </p>
                        </div>
                    </Zoom>
                </div>
            </div>
        </>
    );
};

export default ShowProjects;