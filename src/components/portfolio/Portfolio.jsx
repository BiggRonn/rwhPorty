import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { useEffect, useState } from "react"
import {
    featuredPortfolio,
    frontEndPortfolio,
    backEndPortfolio,
    miscPortfolio
} from "../../data.js"


export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "frontend",
            title: "FrontEnd"
        },
        {
            id: "backend",
            title: "Backend"
        },
        {
            id: "miscProjects",
            title: "Misc. Projects"
        },
    ]

    useEffect(() => {

        switch (selected) {
            case "featured": setData(featuredPortfolio);
                break;
            case "frontend": setData(frontEndPortfolio);
                break;
            case "backend": setData(backEndPortfolio);
                break;
            case "miscProjects": setData(miscPortfolio);
                break;
            default: setData(featuredPortfolio);
        }

    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        id={item.id}
                        active={selected === item.id}
                        setSelected={setSelected}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(data=>(
                <div className="item">
                    <img src={data.img} alt="" />
                    <h3>{data.title}</h3>
                </div>

                ))}
            </div>
        </div>
    )
}
