import React from 'react';

import './style.css';

import {useShowContacts} from "../InfBlockPc/hooks";

import imgNik from '../../img/beautiful2.jpg';
import imgInsta from '../../img/icons8-instagram.svg';
import imgLinkedIn from '../../img/icons8-linkendin.svg';
import imgGit from '../../img/icons8-github.svg';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const InfBlockPc = () => {

    const showContacts = useShowContacts();
    const width = window.innerWidth;

    return (
        <div className="inf">
            <div className="title-inf">
                <div className="title-inf__img-name">
                    <div className="avatar-box">
                        <img src={imgNik} alt="Nikita Danilov" className="img"/>
                    </div>
                    <div className="title-text">
                        <h3 className="title-name">Danilov Nikita</h3>
                        <div className="badge__inf">
                            <span className="badge">Front-end Developer</span>
                        </div>
                    </div>
                </div>
                {
                    width < 560 ?
                        <div className="inf__personalData">
                            <button className="show-btn" type="submit" onClick={showContacts}>
                                <span id="btnTitle" className="title__btn">Show Contacts</span>
                            </button>
                            <div
                                className="invisible-inf__hidden"
                                id="invisible-inf"
                                style={{display: "none"}}>
                                <div className="separation"/>
                                <div className="detail-inf">
                                    <ul className="list-inf first-row">
                                        <li className="detail-inf__item">
                                            <span className="li__icon"><EmailOutlinedIcon/></span>
                                            <div className="li__inf">
                                                <span className="overhead">Email</span>
                                                <a className="email-link text-overflow"
                                                   href="mailto:nik.edu666@gmail.com"
                                                   title="nik.edu666@gmail.com"
                                                >nik.edu666@gmail.com</a>
                                            </div>
                                        </li>
                                        <li className="detail-inf__item phone">
                                            <span className="li__icon"><PhoneAndroidOutlinedIcon/></span>
                                            <div className="li__inf">
                                                <span className="overhead">Phone</span>
                                                <span className="text-overflow"
                                                      title="+375 (29) 601-15-65"
                                                >+375 (29) 601-15-65</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="list-inf">
                                        <li className="detail-inf__item">
                                            <span className="li__icon"><CakeOutlinedIcon/></span>
                                            <div className="li__inf">
                                                <span className="overhead">Birthday</span>
                                                <span className="birthday text-overflow"
                                                      title="March 23, 1999"
                                                >March 23, 1999</span>
                                            </div>
                                        </li>
                                        <li className="detail-inf__item location">
                                            <span className="li__icon"><LocationOnOutlinedIcon/></span>
                                            <div className="li__inf">
                                                <span className="overhead">Location</span>
                                                <span className="email-link text-overflow"
                                                      title="Grodno, Belarus"
                                                >Grodno, Belarus</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="social">
                                    <a className="social-link"
                                       href="https://instagram.com/niki.tusik?igshid=NzNkNDdiOGI=">
                                        <img src={imgInsta} alt="Instagram"/>
                                    </a>
                                    <a className="social-link"
                                       href="https://www.linkedin.com/in/nikita-danilov-8a31a8184/">
                                        <img src={imgLinkedIn} alt="LinkedIn"/>
                                    </a>
                                    <a className="social-link" href="https://github.com/NikiDan">
                                        <img src={imgGit} alt="GitHub"/>
                                    </a>
                                </div>
                                <div/>
                            </div>
                        </div>
                        :
                        <div className="visible-inf">
                            <div className="separation"/>
                            <div className="detail-inf">
                                <ul className="list-inf first-row">
                                    <li className="detail-inf__item">
                                        <span className="li__icon"><EmailOutlinedIcon/></span>
                                        <div className="li__inf">
                                            <span className="overhead">Email</span>
                                            <a className="email-link text-overflow"
                                               href="mailto:nik.edu666@gmail.com"
                                               title="nik.edu666@gmail.com"
                                            >nik.edu666@gmail.com</a>
                                        </div>
                                    </li>
                                    <li className="detail-inf__item phone">
                                        <span className="li__icon"><PhoneAndroidOutlinedIcon/></span>
                                        <div className="li__inf">
                                            <span className="overhead">Phone</span>
                                            <span className="text-overflow"
                                                  title="+375 (29) 601-15-65"
                                            >+375 (29) 601-15-65</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="list-inf">
                                    <li className="detail-inf__item">
                                        <span className="li__icon"><CakeOutlinedIcon/></span>
                                        <div className="li__inf">
                                            <span className="overhead">Birthday</span>
                                            <span className="birthday text-overflow"
                                                  title="March 23, 1999"
                                            >March 23, 1999</span>
                                        </div>
                                    </li>
                                    <li className="detail-inf__item location">
                                        <span className="li__icon"><LocationOnOutlinedIcon/></span>
                                        <div className="li__inf">
                                            <span className="overhead">Location</span>
                                            <span className="email-link text-overflow"
                                                  title="Grodno, Belarus"
                                            >Grodno, Belarus</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="social">
                                <a className="social-link"
                                   href="https://instagram.com/niki.tusik?igshid=NzNkNDdiOGI=">
                                    <img src={imgInsta} alt="Instagram"/>
                                </a>
                                <a className="social-link"
                                   href="https://www.linkedin.com/in/nikita-danilov-8a31a8184/">
                                    <img src={imgLinkedIn} alt="LinkedIn"/>
                                </a>
                                <a className="social-link" href="https://github.com/NikiDan">
                                    <img src={imgGit} alt="GitHub"/>
                                </a>
                            </div>
                            <div/>
                        </div>
                }
            </div>
        </div>
    );
}

export default InfBlockPc;
