import React from "react";
import Navbar from "./Navbar";
import ButtonCTA from "../Buttons/ButtonCTA";
import ButtonLink from "../Buttons/ButtonLink";

const ServicesHeroSection = ({ Title, Highlight, Description, Background }) => {
  return (
    <>
   
        <div className={`hero-container ${Background}`} id="services-layout">
        <Navbar type="alt" />
        <div className="hero-content">
          <div className="hero-content-text">
            <h1>
              {Title}
              <span className="highlight">{Highlight}</span>
            </h1>

            <p>
              {Description}
            </p>
          </div>
          <div className="button-container">
            <ButtonCTA extraClasses={"primary-button"}>
              Book a free visit today
            </ButtonCTA>
            <ButtonLink>Check our projects</ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHeroSection;
