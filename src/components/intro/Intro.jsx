import "./Intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        console.log(textRef)
        init(textRef.current, {
            showCursor: true, 
            strings: ["Engineer.", "Designer.", "Developer."],
            typeSpeed: 120,
            backDelay: 1500,
            backSpeed: 60,
            startDelay: 1000,
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me2.png" alt="" />
                </div>
            </div>
            <div className="right">
                {/* <div className="iconContainer">
                    <a href="">
                        <img src="assets/GitHub-Mark-120px-plus.png" alt="github" />
                    </a>
                </div> */}
                <div className="wrapper">
                    <h1>Clay Hindman</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                </div>
                <a href="#aboutMe">
                    <img src="assets/down.png" alt="down"/>
                </a>
            </div>
        </div>
    )
}
