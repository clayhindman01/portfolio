import './Portfolio.scss'
import ChevronLeft from "@material-ui/icons/ChevronLeft"
import ChevronRight from "@material-ui/icons/ChevronRight"

export default function Portfolio() {
    return (
        <div className='portfolio' id="portfolio">
            <div className="slider">
                <div className="container">
                    <div className="background">
                        <h1>Portfolio</h1>
                    </div>
                    <ChevronLeft className="chevronLeft" />
                    <div className="item">
                        <div className="left">
                            
                        </div>
                        <div className="right">
                            
                        </div>
                    </div>
                    <ChevronRight className='chevronRight'/>
                </div>
            </div>
        </div>
    )
}
 