import './style.css';
import img from './img/ded.png'

function InfBlock() {
    return(
        <div className="inf">
            <div className="title-inf">
                <figure className="avatar-box">
                    <img src={img} alt="Nikita Danilov" className="img"/>
                </figure>
                <div className="title-text">
                    <h3 className="title-name">Danilov Nikita</h3>
                    <span className="badge">Front-end Developer</span>
                </div>
                <div className="separation"/>
                    <div className="detail-inf">
                        <ul className="list-inf">
                            <li className="detail-inf__item">
                                <span className="li__icon">
                                <div className="li__inf">
                                    <span className="overhead">Email</span>
                                    <a className="email-link text-overflow"
                                       href="mailto:nik.edu666@gmail.com"
                                       title="nik.edu666@gmail.com"
                                    >nik.edu666@gmail.com</a>
                                </div>
                                    </span>
                            </li>
                            <li className="detail-inf__item">
                                <span className="li__icon">
                                <div className="li__inf">
                                    <span className="overhead">Phone</span>
                                    <span className="phone text-overflow"
                                          title="+375 (29) 601-15-65"
                                    >+375 (29) 601-15-65</span>
                                </div>
                                    </span>
                            </li>
                            <li className="detail-inf__item">
                                <span className="li__icon">
                                <div className="li__inf">
                                    <span className="overhead">Birthday</span>
                                    <span className="birthday text-overflow"
                                          title="March 23, 1999"
                                    >March 23, 1999</span>
                                </div>
                                    </span>
                            </li>
                            <li className="detail-inf__item">
                                <span className="li__icon">
                                <div className="li__inf">
                                    <span className="overhead">Location</span>
                                    <span className="email-link text-overflow"
                                          title="Hrodna, Belarus"
                                    >Hrodna, Belarus</span>
                                </div>
                                    </span>
                            </li>
                        </ul>
                    </div>
                <div className="social">
                    <a className="social-link" href="#"/>
                    <a className="social-link" href="#"/>
                    <a className="social-link" href="#"/>
                </div>
            </div>
        </div>
    );
}

export default InfBlock;
