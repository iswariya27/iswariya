import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import InstagramIcon from "@material-ui/icons/Instagram";

import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";


export const About = () => {
  return (
    <>
      <div className="about center">
      

        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Iswariya</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        You can discuss with me about above things
        
        A highly passionate and creative Full Stack Developer with expertise in the MERN Stack, 
        armed with a diverse set of tools and technologies,creating interactive single page applications and 
        Knowledgeable in a wide range of programming languages
         and always eager to learn and explore new ones
          </p>
        <div className="about__contact center">
          <a
            href="https://github.com/iswariya27"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:iswariyaishu27@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:9843848969"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/iswariya-i-96697329b"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/ishu_unique?igsh=YWZ4djl4ODd0dWli"
            aria-label="Instagram"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1oq95qgeI5BRZxBmmYyRD_Et3Je_DdYve/view?usp=drivesdk"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};

