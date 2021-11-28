import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li>Featured</li>
                <li>React</li>
                <li>Web Apps</li>
                <li>Backend Projects</li>
                <li>Early Projects</li>
            </ul>
           <div className="container">
               <div className="item">
                   <img src="" alt="" />
                   <h3>Dude, Where's My Charger?</h3>
               </div>
           </div>
        </div>
    )
}
