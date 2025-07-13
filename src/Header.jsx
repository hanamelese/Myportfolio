import React, { useEffect, useState } from "react";
import "./headerStyle.css";
import camera2 from "./assets/camera3.jpg";

const Header = () => {
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinning(true);
      setTimeout(() => setSpinning(false), 1500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "black",
        zIndex: 999,
        top: 0,
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={camera2}
          className={spinning ? "spin-slow" : ""}
          style={{ height: "38px", width: "45px", borderRadius: "50%" }}
          alt="logo"
        />
        <div
          style={{
            fontFamily: "Dancing Script",
            letterSpacing: "3px",
            marginLeft: "8px",
            color: "white",
          }}
        >
          <span style={{ color: "red", fontSize: "22px" }}>H</span>ana
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="link" style={{ display: "flex", gap: "20px" }}>
        <a
          href="#home"
          className="header Home"
          style={{
            fontFamily: "Rock Salt",
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </a>
        <a
          href="#work"
          className="header Home"
          style={{
            fontFamily: "Rock Salt",
            color: "white",
            textDecoration: "none",
          }}
        >
          Project
        </a>
        <a
          href="#certificate"
          className="header Home"
          style={{
            fontFamily: "Rock Salt",
            color: "white",
            textDecoration: "none",
          }}
        >
          Certificate
        </a>
        <a
          href="#contact"
          className="header Home"
          style={{
            fontFamily: "Rock Salt",
            color: "white",
            textDecoration: "none",
          }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
