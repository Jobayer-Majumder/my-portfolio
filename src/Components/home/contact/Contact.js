import React from 'react';
import contactBanner from '../../../images/undraw_delivery_address_03n0.svg';
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';


const Contact = () => {

    const sendMail = e => {
        e.preventDefault();
        emailjs.sendForm('service_mxtcv7z', 'template_3ytp5ue', e.target, 'user_MrO2FxChGSmf12lOsNxBH')
            .then((result) => {
                if (result.text === 'OK') {
                    
                    alert('Message Sent Successfully')
                }
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section id='contact' style={{ background: '#212529' }} className='pt-5 pb-5'>
            <div className="container p-4">
                <Fade bottom cascade>
                    <h2 className="text-secondary text-center text-md-start mb-4">Contact Me</h2>
                    <div className="row row-cols-md-2">
                        <div className="col-md-5">
                            <img className='img-fluid' src={contactBanner} alt="" />
                        </div>
                        <div className="col-md-7 shadow-lg p-4">
                            <h3 className="text-secondary text-center text-md-start mb-4">Get In Touch</h3>
                            <form className='text-center' onSubmit={sendMail}>
                                <div className="mb-3">
                                    <input type="text" className="form-control bg-brand" name='user_name' placeholder='Your Name' required/>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control bg-brand" name="user_email" placeholder='Email Address' aria-describedby="emailHelp" required/>
                                </div>
                                <div className="mb-3">
                                    <textarea className='form-control bg-brand'  name="message" id="" placeholder='Message..' required></textarea>
                                </div>
                                <button type="submit" className="btn btn-brand w-50 text-secondary">Send</button>
                            </form>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Contact;