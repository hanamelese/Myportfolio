import React from "react";
import "./home.css";
import back from "./assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg";
import { Cursor, Typewriter } from "react-simple-typewriter";
import pic from "./assets/pic.jpg";
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "70px",
        // backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        borderRadius: "50%",
      }}
      className="home"
    >
      {/* <img
        src="data:image/jpeg;base64,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"
        style={{
          height: "300px",
          width: "400px",
          right: "0px",
          marginTop: "80px",
          borderRadius: "30%",
        }}
        alt="cameraman"
        className="cameraMan"
      ></img> */}
      <img
        src={pic}
        style={{
          height: "300px",
          width: "400px",
          right: "0px",
          marginTop: "80px",
          borderRadius: "50%",
        }}
        alt="cameraman"
        className="cameraMan"
      ></img>
      <div className="decoration">
        <div
          style={{
            background:
              "linear-gradient(rgb(171, 237, 237),rgba(120, 119, 119, 0)",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            clipPath: "polygon(50 30,50%,100%,0 50)",
            opacity: 1,
            zIndex: 1,
            marginTop: "80px",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(rgb(119, 180, 180),rgba(0,0,0,0)",
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            height: "200px",
            width: "3px",
            marginLeft: "40%",
          }}
        ></div>
      </div>
      <div
        style={{
          marginTop: "90px",
          backgroundColor: "transparent",
          marginLeft: "3%",
        }}
      >
        <h1
          className="mainTitle"
          style={{ color: "aqua", fontFamily: "poppin" }}
        >
          I am{" "}
          <span
            style={{
              color: "wheat",
              fontFamily: "poppin",
            }}
          >
            <Typewriter
              words={[
                " software engineer",
                "web developer",
                "mobile app developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <h3
          style={{
            fontFamily: "poppins",
            color: "smokey-white",
            marginTop: "20px",
          }}
        >
          I'm a Software Engineer at Addis ababa univercity,skilled in Web and
          Mobile App Development.
        </h3>
        <button className="getInTouch">Get in touch</button>
        <div
          className="icons"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "100px",
          }}
        >
          <a href="https://www.instagram.com/george__ve?igsh=MWNhMWM1Y241ZzJ1Zw==">
            <i className="fab fa-github"></i>
          </a>

          <a href="https://t.me/hanitta111996">
            <i className="fab fa-telegram"></i>
          </a>

          <a href="https://www.linkedin.com/in/hana-melese-103520339/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <img
        src={back}
        style={{
          height: "300px",
          //width: "350px",
          marginTop: "220px",
          borderRadius: "50%",
        }}
        alt="camera3"
        className="camera3"
      ></img>
    </div>
  );
};

export default Home;
