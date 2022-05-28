import { useState } from "react";
import "./contact.scss"

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className = "contact" id = "contact">
            <div className="left">
                <img src="assets/techBG.jpg" alt="" />
            </div>

            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} action="mailto:ronaldwesleyhoward@gmail.com">
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for your interest, an email has been sent to my account and I will respond quickly! Please message me on LinkedIn as well!</span>}
                </form>
            </div>
         
        </div>
    )
}
