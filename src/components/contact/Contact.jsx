import "./contact.scss"

export default function Contact() {
    return (
        <div className = "contact" id = "contact">
            <div className="left">
                <img src="assets/techBG.jpg" alt="" />
            </div>

            <div className="right">
                <h2>Contact</h2>
                <form action="">
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
         
        </div>
    )
}
