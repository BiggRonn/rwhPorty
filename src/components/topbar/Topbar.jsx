import "./topbar.scss"


export default function Topbar( {menuOpen, setMenuOpen} ) {
    return (
        <div className= {"topbar " + (menuOpen && "active")}>

            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Wes Howard</a>
                    <div className="itemContainer">
                        <a href="https://github.com/BiggRonn" target="_blank" rel="noreferrer" class='fa fa-github' fontSize="large"><span>Github</span></a>
                        
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/ronaldweshoward/" target="_blank" rel="noreferrer" class='fa fa-linkedin-square'><span>LinkedIn</span></a>
                    </div>
                </div>
               
                <div className="right">

                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
            
        </div>
        
    )
}

