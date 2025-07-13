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
          <a href="https://github.com/hanamelese">
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
