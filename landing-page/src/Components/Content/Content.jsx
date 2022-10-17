import './style.css';

import {useDispatch, useSelector} from "react-redux";

import HtmlOutlinedIcon from '@mui/icons-material/HtmlOutlined';
import CssOutlinedIcon from '@mui/icons-material/CssOutlined';
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';

import imgReact from '../img/icons8-react.svg';
import imgHTML from '../img/icons8-html-5.svg';
import imgCSS from '../img/icons8-css3.svg';
import imgJS from '../img/icons8-javascript.svg';
import imgNeirika from '../img/Neirika.png';
import imgSquare from '../img/Square.png';
import imgTodo from '../img/Todo.png';


function Content() {

    const dispatch = useDispatch();
    const clientWindow = useSelector(state => state.clientWindow);
    // console.log(pc)

    return(
        { clientWindow >= 1262?
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
                </ul>
            </div>
            <div className="description">
                <h1 className="description__title">About Me</h1>
                <p className="description__inf">I'm a Front-end Developer from Grodno, Belarus and I work in web development.</p>
                <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that it is eye-catching and easy to use. My goal is use the most creative way to develop your web-site.</p>
            </div>
            <h2 className="prof-skills__title">What I do</h2>
            <div className="prof-skills">
                <div className="prof-skill__inf">
                    <div className="prof-skill__inf__item box-1">
                        <img src={imgHTML} alt="HTML" className="box__icon"/>
                        <HtmlOutlinedIcon className="content-icon box__icon"/>
                    </div>
                    <div className="prof-skill__inf__item box-2">
                        <img src={imgCSS} alt="CSS" className="box__icon"/>
                        <CssOutlinedIcon className="content-icon box__icon"/>
                    </div>
                    <div className="prof-skill__inf__item box-3">
                        <img src={imgJS} alt="JavaScript" className="box__icon"/>
                        <JavascriptOutlinedIcon className="content-icon box__icon"/>
                    </div>
                    <div className="prof-skill__inf__item box-4">
                        <img src={imgReact} alt="React" className="box__icon"/>
                        <p className="box__text react-text">react</p>
                    </div>
                </div>
            </div>
            <h2 className="portfolio__title">Portfolio</h2>
            <div className="portfolio">
                <div className="portfolio__item neirika">
                    <a href="https://nikidan.github.io/Neirika/index.html"
                       target="_blank"
                       className="portfolio__card-link"
                    >
                        <div className="img-container">
                            <img src={imgNeirika} alt="Project" className="portfolio__img"/>
                        </div>
                    </a>
                </div>
                <div className="portfolio__item square">
                    <a href="https://nikidan.github.io/CvetOzera/index.html"
                       target="_blank"
                       className="portfolio__card"
                    >
                        <div className="img-container">
                            <img src={imgSquare} alt="Project" className="portfolio__img"/>
                        </div>
                    </a>
                </div>
                <div className="portfolio__item todo">
                    <a href="https://heartfelt-bunny-71754e.netlify.app/"
                       target="_blank"
                       className="portfolio__card-link"
                    >
                        <div className="img-container">
                            <img src={imgTodo} alt="Project" className="portfolio__img"/>
                        </div>
                    </a>
                </div>
            </div>
            <div className="footer-text">
            <p className="works">More projects can be found
                <a className="works__link"
                target="_blank"
                href="https://nikidan.github.io/"> here </a>
            </p>
            </div>
        </div>
            :
            <div>
                Всё хорошо !
            </div>
        }
    );
}

export default Content;