import React from 'react';
import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Modal from 'react-modal';
import Fade from 'react-reveal/Fade';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        borderRadius: '12px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#212529'
    }
};

Modal.setAppElement('#root')

const ShowProjects = ({ project }) => {
    const { img, name, desc, liveLink, gitLink, techUsed } = project;

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    };

    function closeModal() {
        setIsOpen(false);
    };

    return (
        <>
            <div className="col-md-12 mb-4">
                <div className="row row-cols-md-2">
                    <Fade bottom cascade>
                        <div className="col-md-6 mb-3">
                            <img src={img} alt="" className='img-fluid rounded' />
                        </div>
                    </Fade>
                    <Fade bottom cascade>
                        <div className="col-md-6 bg-dark text-white rounded p-4">
                            <h5 className='text-brand-lite'>{name}</h5>
                            <small className='text-secondary d-block'>{desc}</small>
                            <a href={gitLink} className='fs-2 text-brand me-3' target='_blank' rel="noreferrer"><AiOutlineGithub /></a>
                            <a href={liveLink} className='fs-2 text-brand' target='_blank' rel="noreferrer"><HiOutlineExternalLink /></a>
                            <button onClick={openModal} className="btn btn-brand text-secondary d-block mt-3">Show Details</button>
                        </div>
                    </Fade>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <button className='btn' onClick={closeModal}><AiOutlineClose className='text-brand fs-2' /></button>
                    <div className="container p-4">
                        <div className="row row-cols-md-2">
                            <div className="col-md-6">
                                <img src={img} alt="" className='img-fluid rounded' />
                            </div>
                            <div className="col-md-6 mt-4">
                                <h5 className='text-brand-lite'>{name}</h5>
                                <small className='text-secondary d-block mb-3'>{desc}</small>
                                <h5 className='text-brand-lite'>Technology Used</h5>
                                {
                                    techUsed?.map((tech, index) => <span className="badge bg-secondary me-2 mb-2" key={index++}>{tech}</span>)
                                }
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default ShowProjects;