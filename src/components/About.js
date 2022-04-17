import React from "react";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <h3>Creators</h3>
        <br />
        <ul>
          <div className="first-two">
            <li>
              <img src="../img/afridi.jpg" alt="" className="about-img" />
              <p className="about-left-p">
                AFRIDI HAQUE <br />
                Project Lead
              </p>
            </li>
            <li>
              <img src="../img/akshat.jpeg" alt="" className="about-img" />
              <p className="about-left-p">
                AKSHAT SHRIVASTAVA <br />
                Member
              </p>
            </li>
          </div>
          <div className="last-two">
            <li>
              <img src="../img/shubham.jpeg" alt="" className="about-img" />
              <p className="about-left-p">
                SHUBHAM JOSHI <br />
                Member
              </p>
            </li>
            <li>
              <img src="../img/priti.jpeg" alt="" className="about-img" />
              <p className="about-left-p">
                PRITI RANJAN BISWAL <br />
                Member
              </p>
            </li>
          </div>
        </ul>
      </div>

      <div className="about-right">
        <div className="intro">
          <h3>Introduction :</h3>
          <br />
          <p>
            “Melophile” means ‘Who is very fond of music’ or you can say ‘Music
            addict’. Melophile is a React.js based web application, made with
            the help of Front-end technologies. The app has it's own playlist
            with uploaded songs from the creators. The user will not be able to
            upload songs to the app, instead they can simply listen to their
            favourite songs and can download them in their devices. This app is
            build for project purpose under university curriculum. This
            application is a single-page modern React application(that means no
            reloading of web pages, only rendering components).
          </p>
        </div>

        <div className="tech">
          <h3>Technology Used :</h3>
          <br />
          <ul>
            <li>React.JS</li>
            <li>Bootstrap V5</li>
            <li>Font Awesome Icons</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className="release">
          <h3>Release :</h3>
          <br />
          <p>April, 2022</p>
        </div>
      </div>
    </div>
  );
}
