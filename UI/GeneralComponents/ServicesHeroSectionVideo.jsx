import React from "react";
import Navbar from "./Navbar";
import ButtonCTA from "../Buttons/ButtonCTA";
import ButtonLink from "../Buttons/ButtonLink";
import "./ServicesHeroSection.scss";

const ServicesHeroSection = ({
  ServiceName,
  Title,
  Highlight,
  Description,
  Background,
  Video,
}) => {
  return (
    <div className={`hero-container ${Background}`} id="services-layout">
      {Video && (
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={Video} type="video/mp4" />
        </video>
      )}

      {Video && <div className="hero-overlay" />}

      <Navbar type="alt" />
      <div className="hero-content reveal">
        {ServiceName && (
          <h2 className="heading-6 heading-icon serviceName">{ServiceName}</h2>
        )}
        <div className="hero-content-text">
          <h1 className="heading-1">
            {Title}
            <span className="highlight">{Highlight}</span>
          </h1>
          <p>{Description}</p>
        </div>
        <div className="button-container ">
          <ButtonCTA href="#contact" extraClasses={"primary-button"}>
            Book a free visit today
          </ButtonCTA>
            {/*
            <ButtonLink href="/faq" altArrowColor="arrow-white">
              Check our FAQ
            </ButtonLink>
            */}
        </div>
      </div>
    </div>
  );
};

export default ServicesHeroSection;
