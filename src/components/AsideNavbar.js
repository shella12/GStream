import { NavLink, Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import download from "../assets/Icon-download.png";
import subscriptions from "../assets/subscriptions.png";
import papayaMusic from "../assets/papaya-music.png";
import watch from "../assets/Icon-watch.png";
import showMore from "../assets/Icon-more.png";
import yourVideos from "../assets/Icon-your-video.png";
import designCode from "../assets/logo-designCode.png";
import figma from "../assets/logo-figma.png";
import sketch from "../assets/logo-sketch.png";
import spline from "../assets/logo-spline.png";
import { TfiMenuAlt } from "react-icons/tfi";

function AsideNavbar() {
  return (
    <aside>
      <nav>
        <ul>
        <li><Link to="/" className="logo d-flex">
      <TfiMenuAlt /><span>MERCOR</span>
      </Link>
      </li>
          <li>
            <ul className="child-list d-flex">
              <li>
                <NavLink to="/" activeclassname="active">
                  <GoHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Shorts" activeclassname="active">
                  <CiYoutube /> Shorts
                </NavLink>
              </li>
              <li>
                <NavLink to="/Subscriptions" activeclassname="active">
                  <img src={subscriptions} alt="subscription-icon" /> Subscription
                </NavLink>
              </li>
              <li>
                <NavLink to="/PapayaMusic" activeclassname="active">
                  <img src={papayaMusic} alt="papaya-music-icon" /> Papaya Music
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="parent-list">MY CHANNEL</li>
          <li>
            <ul className="child-list d-flex">
              <li>
                <NavLink to="/Library" activeclassname="active">
                  <MdOutlineVideoLibrary /> Library
                </NavLink>
              </li>
              <li>
                <NavLink to="/History" activeclassname="active">
                  <MdOutlineHistory /> History
                </NavLink>
              </li>
              <li>
                <NavLink to="/Thrillers" activeclassname="active">
                  <img src={watch} alt="watch-later-icon" /> Watch Later
                </NavLink>
              </li>
              <li>
                <NavLink to="/Mixes" activeclassname="active">
                  <img src={yourVideos} alt="your-videos-icon" /> Your Videos
                </NavLink>
              </li>
              <li>
                <NavLink to="/Thrillers" activeclassname="active">
                  <img src={download} alt="download-icon" /> Download
                </NavLink>
              </li>
              <li>
                <NavLink to="/Avatar" activeclassname="active">
                  <img src={showMore} alt="show-more-icon" /> More
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="parent-list">SUBSCRIPTIONS</li>
          <li>
            <ul className="child-list d-flex">
              <li>
                <NavLink to="/FilmCriticisma" activeclassname="active">
                <img src={designCode} alt="designCode-icon" /> DesignCode
                </NavLink>
              </li>
              <li>
                <NavLink to="/KoreanDramas" activeclassname="active">
                <img src={figma} alt="figma-icon" /> Figma
                </NavLink>
              </li>
              <li>
                <NavLink to="/Characters" activeclassname="active">
                <img src={sketch} alt="sketch-icon" /> Sketch
                </NavLink>
              </li>
              <li>
                <NavLink to="/Eating" activeclassname="active">
                <img src={spline} alt="spline-icon" /> Spline
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AsideNavbar;
