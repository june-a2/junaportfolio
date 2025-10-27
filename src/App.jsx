import React, { useState, useEffect } from "react";
import MainWindow from "./mainwindow";
import AboutMe from "./aboutme";
import Work from "./work";
import Contact from "./contact";
import Wave from "react-wavify";
import { FaLinkedin } from "react-icons/fa";
import { AiFillDiscord } from "react-icons/ai";

function App() {
  const [openWindows, setOpenWindows] = useState({});
  const [waveHeight, setWaveHeight] = useState("50vh");
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleResize = () => {
      setWaveHeight(window.innerWidth <= 580 ? "30vh" : "50vh");
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openWindow = (type) =>
    setOpenWindows((prev) => (!prev[type] ? { ...prev, [type]: true } : prev));
  const closeWindow = (type) =>
    setOpenWindows((prev) => ({ ...prev, [type]: false }));

  const renderWindow = (type) => {
    switch (type) {
      case "aboutme":
        return <AboutMe key={type} zIndex={1000} onClose={() => closeWindow(type)} />;
      case "work":
        return <Work key={type} zIndex={1001} onClose={() => closeWindow(type)} />;
      case "contact":
        return <Contact key={type} zIndex={1002} onClose={() => closeWindow(type)} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", background: "#FFF9F0" }}>
      <MainWindow openWindow={openWindow} />

      {Object.keys(openWindows)
        .filter((type) => openWindows[type])
        .map((type) => renderWindow(type))}

      {/* Footer */}
      <footer className="site-footer" aria-label="Footer">
        <div className="footer-icons">
          <a
            href="https://ph.linkedin.com/in/junellabayle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-btn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://discord.com/users/579627444441448449"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="icon-btn"
            title="Discord"
          >
            <AiFillDiscord />
          </a>
        </div>
        <div className="footer-copy">© {year} Juna Bayle</div>
      </footer>

      <Wave
        fill="#e4cebbff"
        paused={false}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: waveHeight,
          zIndex: 1,
          pointerEvents: "none",
        }}
        options={{ height: 30, amplitude: 30, speed: 0.16, points: 4 }}
      />
    </div>
  );
}

export default App;
