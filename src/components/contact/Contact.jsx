import "./Contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_ab3x0bg", "template_jsg9o46", e.target, "user_Q4YWJFQfUGRN7ZrNUUSm3")
        .then((result) => {
            window.location.reload()
            console.log("email sent.")   
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="contact" id="contact">
            <div className="background">
                <div className="leftContact">
                    <h3>Have a Question?</h3>
                    <h1>Contact Me</h1>
                </div>
                <div className="rightContact">
                    <form className="contactForm" onSubmit={sendEmail}>
                        <input className="from_name" id="from_name" name="from_name" placeholder="Name" required></input>
                        <input className="from_email" id="from_email" name="from_email" placeholder="Email Address" required></input>
                        <input className="subject" id="subject" name="subject" placeholder="Subject" required></input>
                        <textarea className="message" id="message" name="message" placeholder="Message" height="20px" required></textarea>
                        <input type="submit" value="Send Message" className="submit" name="submit" id="submit"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

//TODO: Add Emailing Functionality
