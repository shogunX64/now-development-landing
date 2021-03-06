import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState' ;
import AlertContext from '../context/alert/alertContext';

const Form = () => {
    const { sendMessage } = useContext(GlobalContext);
    const alertContext = useContext(AlertContext)
    
    const { setAlert } = alertContext;
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = e => {
        e.preventDefault();
        const newMessage = {
            id: Math.floor(Math.random() * 10000000),
            name,
            mail,
            message
        }
        
        if(name === '' || mail === '' || message === '' ){
            setAlert('Please fill in valid data in all fields', 'danger')
        } else {
            setAlert('Message sent', 'success')
            sendMessage(newMessage);
        }        
        setName('');
        setMail('');
        setMessage('');     
    }

	return (
        <div className="index-page sidebar-collapse">
            <div className="main">
                <div className="section section-contact-us text-center">
                    <div className="container">
                        <h2 className="title">Contact us</h2>
                        <p className="description">use the below form for any enquiry and we will get back to you</p>
                        <div className="row">
                            <form onSubmit={onSubmit} className="col-lg-6 text-center col-md-8 ml-auto mr-auto">
                                <div className="input-group input-lg">
                                    <input type="text" minLength='3' name="name" value={name} onChange={(e)=> setName(e.target.value)} className="form-control" placeholder="Name..."/>
                                </div>
                                <div className="input-group input-lg">
                                    <input type="email" minLength='6' name="mail" value={mail} onChange={(e)=> setMail(e.target.value)} className="form-control" placeholder="Mail..."/>
                                </div>
                                <div className="textarea-container">
                                    <textarea name="message" minLength='10' value={message} onChange={(e)=> setMessage(e.target.value)} className="form-control" rows="4" cols="80" placeholder="Type a message..."></textarea>
                                </div>
                                <div className="send-button">
                                    <button className="btn btn-primary btn-round btn-block btn-lg">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>   
            </div>        
        </div>
    )
}

export default Form
