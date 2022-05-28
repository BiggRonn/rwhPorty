import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped'; 
import { useEffect, useRef } from 'react';


import "./intro.scss"

export default function Intro() {

    const skillsRef = useRef();
    useEffect(() =>{
        init(skillsRef.current, { showCursor: false, strings: ['React', 'Javascript', 'HTML', 'CSS','Firebase', "Node", "Mongo/NoSQL", "mySQL","Git", "Data Structures", "Algorithms"  ] })
    },[])
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
                <h2>Full Stack Developer - <span ref ={skillsRef}></span> </h2>
                <article>Passionate about coding and problem solving, trying to learn something new every day. This website was built using React. Checkout my Github and message me on LinkedIn!</article>


                </div>

                <a href="#portfolio">
                    <KeyboardArrowDownIcon fontSize="large" class="downArrow"/>
                </a>

            </div>
        </div>
    )
}
