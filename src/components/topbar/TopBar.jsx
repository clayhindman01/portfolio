import './TopBar.scss'

export default function TopBar({ menuOpen, setMenuOpen }) {

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Clay Hindman</a>
                    {/* <div className="itemContainer">
                        <Person className="icon" />
                        <span>(423) 243-2193</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>clayhindman01@gmail.com</span>
                    </div> */}
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
