import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id = "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets\bgFreeProfile.png" alt="Wes Howard looking energetic and eager to work." />
                </div>
            </div>
            <div className="right">

                <div className="wrapper">

                <h1>Wes Howard</h1>
                <h2>Full Stack Developer</h2>
                <article>Website built using React</article>


                </div>

                <a href="#portfolio">
                    <KeyboardArrowDownIcon fontSize="large" class="downArrow"/>
                </a>

            </div>
        </div>
    )
}
