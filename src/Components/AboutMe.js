import React from "react";
import "./aboutme.scss";
import { TbCloudDownload } from "react-icons/tb";
import profilePicture from "../assets/logo192.png";
const AboutMe = () => {
  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">
          Hakkımda/About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h4>

          <div className="aboutBtn">
            <a href="YOURCV.pdf" download="YOURCV.pdf" className="flex">
              CV İndir <TbCloudDownload className="icon" />
            </a>
          </div>
        </div>

        <div className="aboutImgDiv">
          <img src={profilePicture} alt="profilePicture" className="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
