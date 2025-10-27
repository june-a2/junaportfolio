import React from "react";
import useSound from 'use-sound';
import Avatar from "./assets/avatar.svg";
import AboutIcon from './assets/icons/aboutme.svg';
import WorkIcon from './assets/icons/work.svg';
import ContactIcon from './assets/icons/contact.svg';
import popSound from '/assets/pop.wav';
import "./assets/mainwindow.css";

const MainWindow = ({ openWindow }) => {
  const [play] = useSound(popSound, { volume: 0.8});

  return (
    <div className="main-window">
    <div className="topbar">
    <div className="home-tab"><span>home</span></div>
  </div>
  
      <div className="avatar">
        <img src={Avatar} alt="Avatar" />
      </div>

      <h1>hello! <span>i’m Juna</span></h1>
      <h2>web developer & web designer</h2>

      <div className="button-group">
  <div className="icon-button" onClick={() => { openWindow('aboutme'); play(); }}>
    <img src={AboutIcon} alt="About Me" />
    <span className="icon-label">about</span>
  </div>

  <div className="icon-button" onClick={() => { openWindow('work'); play(); }}>
    <img src={WorkIcon} alt="Work" />
    <span className="icon-label">work</span>
  </div>

  <div className="icon-button" onClick={() => { openWindow('contact'); play(); }}>
    <img src={ContactIcon} alt="Contact" />
    <span className="icon-label">contact</span>
  </div>
</div>

    </div>
  );
};

export default MainWindow;
