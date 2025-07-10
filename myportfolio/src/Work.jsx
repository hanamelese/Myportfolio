import React from "react";

import "./css/work.css";
import animal from "./assets/Business.png";
// import animal from "./assets/Business.png";
import netflix from "./assets/netflix.webp";
import photo from "./assets/charity.png";
const Work = () => {
  return (
    <>
      <h1
        style={{
          marginLeft: "40%",
          marginBottom: "50px",
          fontFamily: "poppins",
        }}
      >
        Sample Works
      </h1>
      <div style={{ marginLeft: "10%" }} className="project">
        <a href="https://github.com/hanamelese/Ecommerce-api.git">
          <img src={animal}></img>
        </a>

        <a href="https://hanamelese.github.io/Netflix-Clone-2025/">
          <img src={netflix}></img>
        </a>

        <a href="https://charity-organization-637f0.firebaseapp.com/">
          <img src={photo}></img>
        </a>

        <a href="https://hanamelese.github.io/UGR-3687-15-html-css-js/">
          <img src={netflix}></img>
        </a>

        <a href="https://hanamelese.github.io/Assesment-2_Hana-Melese_UGR-3687-15_sec-4/">
          <img src={animal}></img>
        </a>

        <a href="https://github.com/hanamelese/treasure-hunt-game.git">
          <img src={netflix}></img>
        </a>
      </div>
    </>
  );
};

export default Work;
