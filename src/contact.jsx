import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import useSound from "use-sound";
import CloseIcon from "./assets/icons/close-button.svg";
import contactimg from "./assets/contact-img.svg";
import popSound from "/assets/close-sf.wav";
import chipHoverSfx from "/assets/pop-hover.mp3";

import "./assets/windows.css";

const Contact = ({ zIndex = 1002, onClose }) => {
  const [centerPosition, setCenterPosition] = useState({ x: 500, y: 300 });
  const [isClicked, setIsClicked] = useState(false);

  const [playClose] = useSound(popSound, { volume: 0.5 });
  const [playHover] = useSound(chipHoverSfx, { volume: 0.35, interrupt: false });

  useEffect(() => {
    const updateCenter = () => {
      const width = 720;
      const height = 320;
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
        height: 320,
      }}
      enableResizing={false}
      bounds="window"
      dragHandleClassName="contact-topbar"
      className={`contact-window ${isClicked ? "clicked" : ""}`}
      style={{ zIndex }}
    >
      <div className="contact-topbar">
        <span>contact</span>
        <div className="aboutme-close-btn" onClick={handleClose}>
          <img src={CloseIcon} alt="Close" />
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-text">
          <p className="lead">
            i check my email more often than my socials so feel free to email me at:
          </p>

          <a
            href="mailto:junellamgIng@gmail.com"
            className="email-chip"
            onMouseEnter={playHover}
            onFocus={playHover}
          >
            junellamgIng@gmail.com
          </a>

          <div className="other-socials">
            <span>other socials:</span>
            <div className="social-row">
              <a
                className="social-btn"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onFocus={playHover}
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.49 2.5 2.5 0 0 0 4.98 3.5zM3 9h4v12H3zM10 9h3.8v1.8h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-2 1.36-2 2.74V21h-4z"/>
                </svg>
              </a>
              <a
                className="social-btn"
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onFocus={playHover}
                aria-label="Discord"
                title="Discord"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.3 4.4A17.3 17.3 0 0 0 15.9 3l-.2.4a16 16 0 0 1 3.8 1.9c-1.6-.8-3.2-1.3-4.9-1.6a16.2 16.2 0 0 0-6 0C6.9 4 5.2 4.6 3.6 5.3A16 16 0 0 1 7.4 3.4L7.2 3a17.3 17.3 0 0 0-4.4 1.4C1 7 0 9.7 0 12.5 0 18 3.6 21 8.2 22l.6-.8c-1.6-.5-3-1.3-4.2-2.4 1.6 1.2 3.6 1.9 5.5 2.2a16.4 16.4 0 0 0 6 0c2-.3 3.9-1 5.5-2.2-1.2 1.1-2.6 1.9-4.2 2.4l.6.8C20.4 21 24 18 24 12.5c0-2.8-1-5.5-3.7-8.1zM8.7 14.6c-.9 0-1.6-.8-1.6-1.7s.7-1.7 1.6-1.7 1.6.8 1.6 1.7-.7 1.7-1.6 1.7zm6.6 0c-.9 0-1.6-.8-1.6-1.7s.7-1.7 1.6-1.7 1.6.8 1.6 1.7-.7 1.7-1.6 1.7z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Rnd>
  );
};

export default Contact;