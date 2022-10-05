import './style.css';

import HtmlOutlinedIcon from '@mui/icons-material/HtmlOutlined';
import CssOutlinedIcon from '@mui/icons-material/CssOutlined';
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';

import imgReact from '../img/icons8-react.svg';
import imgHTML from '../img/icons8-html-5.svg';
import imgCSS from '../img/icons8-css3.svg';
import imgJS from '../img/icons8-javascript.svg';

function Content() {
    return(
        <div className="content">
            <div className="nav-container">
                <ul className="nav">
                    <li className="nav__item">
                        <a className="active" href="#">About</a>
                    </li>
                    <li className="nav__item"><a className="active" href="#"> Resume</a>
                    </li>
                    <li className="nav__item">
                        <a className="active" href="#">Portfolio</a>
                    </li>
                    <li className="nav__item"><a className="active" href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="description">
                <h1 className="description__title">About Me</h1>
                <p className="description__inf">I'm Front-end Developer from Hrodna, Belarus, working in web development.</p>
                <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way</p>
            </div>
            <h2 className="prof-skills__title">What I'm Doing</h2>
            <div className="prof-skills">
                <div className="prof-skill__inf">
                    <div className="prof-skill__inf__item box-1">
                        <img src={imgHTML} alt="HTML" className="box__icon"></img>
                        <HtmlOutlinedIcon className="content-icon box__icon"/>
                    </div>
                    <div className="prof-skill__inf__item box-2">
                        <img src={imgCSS} alt="CSS" className="box__icon"></img>
                        <CssOutlinedIcon className="content-icon box__icon"/>
                    </div>
                    <div className="prof-skill__inf__item box-3">
                        <img src={imgJS} alt="JavaScript" className="box__icon"></img>
                        <JavascriptOutlinedIcon className="content-icon box__icon"/>
                    </div>
                    <div className="prof-skill__inf__item box-4">
                        <img src={imgReact} alt="React" className="box__icon"></img>
                        <p className="box__text react-text">react</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;