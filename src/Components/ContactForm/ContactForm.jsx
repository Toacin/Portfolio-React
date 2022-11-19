import './ContactForm.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
// import {bootstrap} from 'bootstrap';
import { Modal } from 'react-bootstrap';

export default function ContactForm() {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const myModal = new Modal('#myModal');

    const form = useRef();

    function handleChange(e) {
        const {target} = e;
        const {name: inputType, value: inputValue} = target;

        switch(inputType) {
            case "subject": setSubject(inputValue);
                break;
            case "email": setEmail(inputValue);
                break;
            default: setMessage(inputValue);
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(subject, email, message);
        emailjs.sendForm('service_7dxn4mu', 'template_peazy7g', form.current, 'AG-zuxNUpXpaeHgox')
        .then((result) => {
            console.log(result.text);
            myModal.show();
        }, (error) => {
            console.log(error.text);
        });
        setSubject("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
            <div className ="d-flex my-5">
                <form ref={form} className ="offset-3 col-6 my-2" onSubmit={handleSubmit}>
                    <div className ="d-flex justify-content-center flex-wrap my-5">
                        <h2 className="text-light py-3 form-header">Send Me A Message!</h2>
                        <div className="d-flex col-10 justify-content-between m-3">
                            <div className ="col-5">
                                <input value={subject} name="subject" type="text" className ="customInput" placeholder='Enter Subject Here' onChange={handleChange} required/>
                                <span className ="form-helper-text">Subject</span>
                            </div>
                            <div className ="col-5">
                                <input value={email} name="email" type="email" className ="customInput" placeholder='example@email.com' onChange={handleChange} required/>
                                <span className ="form-helper-text">Email</span>
                            </div>
                        </div>
                        <div className ="col-10 m-3">
                            <textarea value={message} id="contactForm" name='message' className ="customTxtArea" rows="4" placeholder='Enter Message Here' onChange={handleChange} required></textarea>
                            <span className ="form-helper-text">Message</span>
                        </div>
                        <button className="col-3 btn btn-primary form-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="modal fade" id="myModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Message Received!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Thank you for your message! I will reach back to you shortly.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}