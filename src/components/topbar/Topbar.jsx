import "./topbar.scss"
//import ComputerIcon from '@mui/icons-material/Computer';

export default function topbar() {
    return (
        <div className= "topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Wes Howard</a>
                    <div className="itemContainer">
                        <a href="https://github.com/BiggRonn" target="_blank" rel="noreferrer" class='fa fa-github'>Github</a>
                        
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/ronaldweshoward/" target="_blank" rel="noreferrer" class='fa fa-linkedin-square'>LinkedIn</a>
                    </div>
                </div>
               
                <div className="right">
                    
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
            
        </div>
        
    )
}

