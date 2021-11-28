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
                <article>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates ex commodi doloremque. Tenetur animi dolor placeat quas error blanditiis culpa neque fugit libero accusamus eum voluptatibus dolorum nemo vel vero quasi non velit incidunt ut, a nostrum. Nostrum ducimus amet minus dolore id quia quod distinctio officiis qui corporis sit numquam, tempora provident asperiores blanditiis fuga aut, beatae pariatur voluptatum et eius unde? Voluptatem, fugiat sequi! Tempore suscipit nam et? Expedita incidunt voluptatem eaque fuga quo quidem minus laboriosam!</article>


                </div>

                <a href="#portfolio">
                    <KeyboardArrowDownIcon fontSize="large" class="downArrow"/>
                </a>

            </div>
        </div>
    )
}
