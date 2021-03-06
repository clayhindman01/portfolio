import './AboutMe.scss'

export default function AboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">

            <div className="contentWrapper">
                <div className="background">
                    
                </div>
                <div className='content'>
                    <h1>About Me</h1>

                    <p>My name is Clay Hindman, and I am a Junior at the University of Tennessee at Chattanooga studying Software Systems. I enjoy automating tasks, web scraping and making daily tasks easier using Python, and making cross platform applications using React and Flutter.

                    <br /><br />

                    In my free time, I enjoy fly fishing and skeet shooting. I also love to go rock climbing and hiking whenever I have the time to do it. I also enjoy cooking and trying different foods.
                    </p>

                    <h2>Resume</h2>
                    <a href="https://docs.google.com/document/d/1tHUFJGooN1JyY224bEZbBDZVCMM1GawG/edit?usp=sharing&ouid=110812433163043489675&rtpof=true&sd=true">
                        <img src="assets/writing.png" alt="resume"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}
