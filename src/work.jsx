import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import useSound from "use-sound";
import CloseIcon from "./assets/icons/close-button.svg";

// sfx
import popSound from "/assets/close-sf.wav";
import chipHoverSfx from "/assets/pop-hover.mp3";

// images
import eightpoint1 from "./assets/img/eightpoint-1.png";
import eightpoint2 from "./assets/img/eightpoint-2.png";
import privaraseFigma from "./assets/img/privarase-figma.png";
import privaraseSite from "./assets/img/privarase-site.png";
import virtuality1 from "./assets/img/virtuality-figma.png";
import virtuality2 from "./assets/img/virtuality-site.png";
import sps1 from "./assets/img/sps-1.jpg";
import sps2 from "./assets/img/sps-2.jpg";

import "./assets/windows.css";

const Work = ({ zIndex = 1001, onClose }) => {
  const [centerPosition, setCenterPosition] = useState({ x: 1120, y: 50 });
  const [isClicked, setIsClicked] = useState(false);

  const [playClose] = useSound(popSound, { volume: 0.5 });
  const [playChipHover] = useSound(chipHoverSfx, {
    volume: 0.4,
    interrupt: false,
  });

  useEffect(() => {
    const updateCenter = () => {
      const width = 720;
      const height = 800;
      setCenterPosition({
        x: (window.innerWidth - width) / 2,
        y: (window.innerHeight - height) / 2,
      });
    };
    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  const handleClose = () => {
    playClose();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      onClose?.();
    }, 150);
  };

  return (
    <Rnd
      default={{
        x: centerPosition.x,
        y: centerPosition.y,
        width: 720,
        height: 800,
      }}
      enableResizing={false}
      bounds="window"
      dragHandleClassName="work-topbar"
      className={`work-window ${isClicked ? "clicked" : ""}`}
      style={{ zIndex }}
    >
      <div className="work-topbar">
        <span>work</span>
        <div className="work-close-btn" onClick={handleClose}>
          <img src={CloseIcon} alt="Close" />
        </div>
      </div>

      <div className="work-content">
        <div className="work-banner">i accept work offers via my work email!</div>

        <div className="work-scroll">
          <div className="work-section">
            <h3>DEVELOPMENT TOOLS</h3>
            <div className="chip-row">
              {[
                "figma",
                "canva",
                "visual studio code",
                "git/github",
                "wix",
                "wix studio",
                "shopify",
                "html",
                "css",
                "php",
                "mysql",
                "javascript",
                "react.js",
              ].map((t) => (
                <span
                  key={t}
                  className="chip"
                  role="button"
                  tabIndex={0}
                  onMouseEnter={playChipHover}
                  onFocus={playChipHover}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="work-section">
            <h3>PROJECTS</h3>
            <div className="project">
              <h4 className="project-title">
                <a
                  href="https://eightpointsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  eightpointsolutions.com
                  <svg
                    className="link-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z" />
                  </svg>
                </a>
              </h4>
              <p className="project-sub">brand-aligned redesign created in wix studio</p>
              <div className="shots">
                <img
                  className="shot"
                  src={eightpoint1}
                  alt="eightpointsolutions.com – site design"
                  loading="lazy"
                />
                <img
                  className="shot"
                  src={eightpoint2}
                  alt="eightpointsolutions.com – live site"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="project">
              <h4 className="project-title">
                <a
                  href="https://privarase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privarase.com
                  <svg
                    className="link-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z" />
                  </svg>
                </a>
              </h4>
              <p className="project-sub">figma wireframing + project roadmap, implemented on wix</p>
              <div className="shots">
                <img
                  className="shot"
                  src={privaraseFigma}
                  alt="privarase.com – Figma design"
                  loading="lazy"
                />
                <img
                  className="shot"
                  src={privaraseSite}
                  alt="privarase.com – live site"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="project">
              <h4 className="project-title">
                <a
                  href="https://virtualityservices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  virtualityservices.com
                  <svg
                    className="link-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z" />
                  </svg>
                </a>
              </h4>
              <p className="project-sub">
                built using html, css, and javascript [IN DEVELOPMENT]
              </p>
              <div className="shots">
                <img
                  className="shot"
                  src={virtuality1}
                  alt="virtualityservices.com landing"
                  loading="lazy"
                />
                <img
                  className="shot"
                  src={virtuality2}
                  alt="virtualityservices.com services"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="project">
              <h4 className="project-title">Student Personnel Services</h4>
              <p className="project-sub">
                capstone project for University of Perpetual Help System’s SPS
                office using css, javascript, php, and phpmyadmin
              </p>
              <div className="shots">
                <img
                  className="shot"
                  src={sps1}
                  alt="SPS app dashboard"
                  loading="lazy"
                />
                <img
                  className="shot"
                  src={sps2}
                  alt="SPS app records screen"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Rnd>
  );
};

export default Work;
