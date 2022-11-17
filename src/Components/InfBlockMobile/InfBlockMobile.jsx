import "./style.css";

import imgNik from "../img/beautiful2.jpg";
import imgInsta from "../img/icons8-instagram.svg";
import imgLinkedIn from "../img/icons8-linkendin.svg";
import imgGit from "../img/icons8-github.svg";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const InfBlockMobile = () => {
  const showContacts = () => {
    const invisInf = document.getElementById("invisible-inf");
    const btnTitle = document.getElementById("btnTitle");

    if (invisInf.className === "invisible-inf__hidden") {
      invisInf.style.display = "block";

      invisInf.classList.remove("invisible-inf__hidden");
      invisInf.classList.add("invisible-inf__active");

      btnTitle.innerHTML = "Hide Contacts";
    } else {
      invisInf.classList.remove("invisible-inf__active");
      invisInf.classList.add("invisible-inf__hidden");

      btnTitle.innerHTML = "Show Contacts";
    }
  };

  return (
    <div className="inf">
      <div className="title-inf">
        <div className="visible-inf">
          <div className="avatar-box">
            <img src={imgNik} alt="Nikita Danilov" className="img" />
          </div>
          <div className="title-text">
            <h3 className="title-name">Danilov Nikita</h3>
            <span className="badge">Front-end Developer</span>
          </div>
          <button className="show-btn" type="submit" onClick={showContacts}>
            <span id="btnTitle" className="title__btn">Show Contacts</span>
          </button>
        </div>
        <div
          className="invisible-inf__hidden"
          id="invisible-inf"
          style={{ display: "none" }}
        >
          <div className="separation" />
          <div className="detail-inf">
            <ul className="list-inf">
              <li className="detail-inf__item">
                <span className="li__icon">
                  <EmailOutlinedIcon />
                </span>
                <div className="li__inf">
                  <span className="overhead">Email</span>
                  <a
                    className="email-link text-overflow"
                    href="mailto:nik.edu666@gmail.com"
                    title="nik.edu666@gmail.com"
                  >
                    nik.edu666@gmail.com
                  </a>
                </div>
              </li>
              <li className="detail-inf__item">
                <span className="li__icon">
                  <PhoneAndroidOutlinedIcon />
                </span>
                <div className="li__inf">
                  <span className="overhead">Phone</span>
                  <span
                    className="phone text-overflow"
                    title="+375 (29) 601-15-65"
                  >
                    +375 (29) 601-15-65
                  </span>
                </div>
              </li>
            </ul>
            <ul className="list-inf ul-2">
              <li className="detail-inf__item">
                <span className="li__icon">
                  <CakeOutlinedIcon />
                </span>
                <div className="li__inf">
                  <span className="overhead">Birthday</span>
                  <span
                    className="birthday text-overflow"
                    title="March 23, 1999"
                  >
                    March 23, 1999
                  </span>
                </div>
              </li>
              <li className="detail-inf__item location">
                <span className="li__icon">
                  <LocationOnOutlinedIcon />
                </span>
                <div className="li__inf">
                  <span className="overhead">Location</span>
                  <span
                    className="email-link text-overflow"
                    title="Grodno, Belarus"
                  >
                    Grodno, Belarus
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="separation" />
          <div className="social">
            <a
              className="social-link"
              href="https://instagram.com/niki.tusik?igshid=NzNkNDdiOGI="
            >
              <img src={imgInsta} alt="Instagram"/>
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/nikita-danilov-8a31a8184/"
            >
              <img src={imgLinkedIn} alt="LinkedIn"/>
            </a>
            <a className="social-link" href="https://github.com/NikiDan">
              <img src={imgGit} alt="GitHub"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfBlockMobile;