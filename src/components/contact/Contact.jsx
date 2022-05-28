import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss"

export default function Contact() {
    const [message, setMessage] = useState(false)
    const form = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_yq4pu49', 'template_hzv5jbv', form.current, 'oe9BoAzOhTzbOpxG-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        setMessage(true);
    }
    return (
        <div className = "contact" id = "contact">
            <div className="left">
                <img src="assets/techBG.jpg" alt="" />
            </div>

            <div className="right">
                <h2>Contact</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <input name="from_name"type="text" placeholder="Email" />
                    <textarea name = "message"placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for your interest, an email has been sent to my account and I will respond quickly!</span>}
                </form>
            </div>
         
        </div>
    )
}
