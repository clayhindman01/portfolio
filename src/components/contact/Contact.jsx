import "./Contact.scss"

function handleClick() {
    console.log("This is working");
}

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="background">
                <div className="left">
                    <h3>Have a Question?</h3>
                    <h1>Contact Me</h1>
                </div>
                <div className="right">
                    <div className="contactForm">
                        <input className="fname" id="fname" name="fname" placeholder="First Name" required></input>
                        <input className="lname" id="lname" name="lname" placeholder="Last Name" required></input>
                        <input className="subject" id="subject" name="subject" placeholder="Subject" required></input>
                        <textarea className="message" id="message" name="message" placeholder="Message" height="20px" required></textarea>
                        <input type="submit" value="Send Message" onClick={handleClick} className="submit" name="submit" id="submit"></input>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

//TODO: Add Emailing Functionality
