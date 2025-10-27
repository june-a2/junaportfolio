import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import useSound from "use-sound";
import CloseIcon from "./assets/icons/close-button.svg";
import AvatarImg from "./assets/avatar.svg";
import popSound from "/assets/close-sf.wav";
import "./assets/windows.css";

const AboutMe = ({ zIndex = 1000, onClose }) => {
  const [centerPosition, setCenterPosition] = useState({ x: 160, y: 110 });
  const [play] = useSound(popSound, { volume: 0.5 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updateCenter = () => {
      setCenterPosition({
        x: (window.innerWidth - 590) / 2,
        y: (window.innerHeight - 590) / 2,
      });
    };
    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  const handleClose = () => {
    play();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      onClose();
    }, 150);
  };

  return (
    <Rnd
      default={{
        x: centerPosition.x,
        y: centerPosition.y,
        width: 720,
        height: 590,
      }}
      enableResizing={false}
      bounds="window"
      dragHandleClassName="aboutme-topbar"
      className={`aboutme-window ${isClicked ? "clicked" : ""}`}
      style={{ zIndex }}
    >
      <div className="aboutme-topbar">
        <span>about me</span>
        <div className="aboutme-close-btn" onClick={handleClose}>
          <img src={CloseIcon} alt="Close" />
        </div>
      </div>

      <div className="aboutme-content">
        <div className="aboutme-header">
          <img src={AvatarImg} alt="Juna Avatar" className="aboutme-avatar" />
          <div className="aboutme-header-text">
            <h1>Juna Bayle</h1>
            <p>ph-based freelance web developer & web designer</p>
          </div>
        </div>

        <div className="aboutme-scroll">
          <p className="intro">
            hi! i’m <strong>juna</strong>, i build and design websites.
          </p>
          <ul>
            <li>build fully custom websites with html, css, and javascript</li>
            <li>design wireframe and layouts in figma</li>
            <li>
              create functional sites on platforms like{" "}
              <span className="highlight">wix</span> and{" "}
              <span className="highlight">shopify</span>
            </li>
            <li>
              optimise websites for performance, usability, and seo-friendly
              design
            </li>
            <li>create interactive, user-friendly websites</li>
          </ul>

          <div className="aboutme-section">
            <h3>EDUCATION</h3>
            <p>
              <strong>Bachelor of Science in Information Technology</strong>
              <br />
              (Graduated 2025)
            </p>
          </div>

          <div className="aboutme-section">
            <h3>LANGUAGE PROFICIENCY</h3>
            <p>
              native speaker of Filipino (Tagalog)
              <br />
              and fluent in English
            </p>
          </div>
        </div>
      </div>
    </Rnd>
  );
};

export default AboutMe;
