import './style.css';

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
                <p className="description__inf">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                    consequatur
                    dolore dolorem inventore iure labore nemo nobis nostrum quae, quibusdam quisquam
                    quo repellendus sapiente sed similique soluta suscipit tempora, voluptas.</p>
            </div>
            <div className="prof-skills">
                <h2 className="prof-skills__title">What I'm Doing</h2>
                <div className="prof-skill__inf">
                    <div className="prof-skill__inf__item"/>
                    <div className="prof-skill__inf__item"/>
                    <div className="prof-skill__inf__item"/>
                    <div className="prof-skill__inf__item"/>
                </div>
            </div>
        </div>
    );
}

export default Content;