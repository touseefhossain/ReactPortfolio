import './index.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import ToastSymbol from '../../assets/images/toast_symbol.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    /*emailJS code derived from https://dev.to/ebereplenty/contact-form-with-emailjs-react-581c*/ 
    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_tisg7ba', 'template_see89gs', form.current, 
        '0DtjYIHYhjsXvOjBR').then((result) =>{
            console.log(result.text);
            alert("Sucessfully sent email");
        }, (error) => {
            console.log(error.text)
            alert("Could not send email", error);
        });
    };
    
    return (
        <div className='container contact-page'>
            <img className = 'logo-container' src = {ToastSymbol} alt="toast-logo"/>
            <div className='title'>
                <h1 className='title-text'>Contact Me</h1>
            </div>
            <div className= 'contact-text'>
                <p>
                    Got any questions? I would love to connect! Browse any of my contact methods below 
                    and see which platform works best for you. <br/><br/>
                    If you want to contact me regarding 
                    opportunities, projects, or any kind of feedback, feel free to shoot me an email 
                    using my professional email below. I am also open to a phone call regarding any 
                    opportunities you may have for me. <br/> <br/> 
                    If your message isn't as pressing or if you 
                    want to try out my EmailJS service, feel free to use the contact forum on the right 
                    to send an email to my personal gmail account (I will still read it).
                </p>
                <div className='contact-row'>
                    <div className='contact-col'>
                        <div>
                            <FontAwesomeIcon icon={faPhone} color= "olivedrab" />
                            <h5>+1 (587) 889-6259</h5>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} color = "olivedrab"/>
                            <h5>touhossain@outlook.com</h5>
                        </div>
                    </div>
                    <div className='contact-col'>
                    <div>
                            <a target = "_blank" rel = 'noreferrer' 
                            href = 'https://www.linkedin.com/in/touseef-hossain-493265140/'>
                                <FontAwesomeIcon icon = {faLinkedin} color = "olivedrab" />
                                <h5>Touseef Hossain</h5>
                            </a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faDiscord} color = "olivedrab"/>
                            <h5>toastyho#7045</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input 
                            type ="text" 
                            name ="name" 
                            placeholder ='Name' 
                            required 
                            />
                        </li>
                        <li className='half'>
                            <input 
                            type ="text" 
                            name ="email" 
                            placeholder ='Email Address' 
                            required 
                            />
                        </li>
                        <li>
                            <input 
                            placeholder="Subject" 
                            type = "text" 
                            name = "subject" 
                            required 
                            />
                        </li>
                        <li>
                            <textarea
                            name= 'message'
                            placeholder= 'Message'
                            required
                            />
                        </li>
                        <li>
                            <input type= 'submit' className='flat-button' value= "SEND" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default Contact