import "./Portfolio.scss"
export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>
                Projects
            </h1>
            <div className="portfolioIcons">
                <div className="githubTrending even item">
                    <a href="https://github-trending-alpha.vercel.app/">
                        <img src="assets/githubTrending.png" alt="githubTrending" />
                    </a>
                    <h2>GitHub Trending</h2>
                </div>

                <div className="chat-app odd item">
                    <a href="https://chat-app-five-chi.vercel.app/">
                        <img src="assets/chat-app.png" alt="Chat App"></img>
                    </a>
                    <h2>Chat App</h2>
                </div>

                <div className="pantry even item">
                    <a href="https://pantry-seven.vercel.app/">
                        <img src="assets/pantry.png" alt="Pantry"></img>
                    </a>
                    <h2>Pantry</h2>
                </div>
            </div>
        </div>
    )
}
