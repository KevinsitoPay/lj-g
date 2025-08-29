import Button from "@/UI/Buttons/ButtonCTA";
import "./Home.scss";
import GoogleReviews from "@/UI/GeneralComponents/GoogleReviews";
import VideoComponent from "@/UI/GeneralComponents/VideoSection";
import CtaSection from "@/UI/GeneralComponents/CtaSection";
import List from "@/UI/Icons/List";
import GallerySection from "@/UI/GeneralComponents/GallerySection";
import Faq from "@/UI/GeneralComponents/Faq";
import Navbar from "@/UI/GeneralComponents/Navbar";
import ButtonCTA from "@/UI/Buttons/ButtonCTA";
import ButtonLink from "@/UI/Buttons/ButtonLink";

import Star from "@/UI/Icons/Star";
import House from "@/UI/Icons/House";

export const metadata = {
  title: "LJ & Gonzalez Landscaping Services",
  description: "Home page Landscaping description",
  keywords: "landscaping, gardening",
};

function Home() {
  return (
    <div>
      <div className="hero-container" id="home-bg">
        <Navbar type="main" />

        <div className="hero-content">
          <div className="hero-content-text">
            <h1>
              Tittle where we adress the{" "}
              <span className="highlight"> main pain point</span>
            </h1>

            <p>
              Description where we adress how we can resolve the main pain point
              main pain point that the client might have. Proving our value and
              being apart of our competitors.
            </p>
          </div>
          <div className="button-container reveal-fade">
            <ButtonCTA extraClasses={"primary-button"}>
              Book a free visit today
            </ButtonCTA>
            <ButtonLink>Check our projects</ButtonLink>
          </div>
        </div>
      </div>

      <GoogleReviews />

      {/* Sticky section */}

      <div className="stcky-home-contaier section">
        <div className="stcky-box-home-left">
          <h6>Check our process</h6>
          <h4>
            Lorem ipsum dolor sit amet{" "}
            <span className="highlight">
              consectetur consectetur adipiscing elit.
            </span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet.
          </p>
          <p>
            “Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in...”
          </p>
          <p>Nada Quezada ★★★★★</p>
        </div>
        <div className="stcky-box-home-right">
          <div className="stcky-box-home-cta" data-number="1">
            <img src="/images/service-ai-4.webp" alt="Service 1" />
            <h5>
              <House /> Book a free visit{" "}
              <span className="highlight">and get a clear quote.</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet.
            </p>
            <div className="button-container">
              <ButtonLink>Book a free visit</ButtonLink>
            </div>
          </div>

          <div className="stcky-box-home-cta" data-number="2">
            <img src="/images/service-ai-7.webp" alt="Service 2" />
            <h5>
              <House /> Book a free visit{" "}
              <span className="highlight">and get a clear quote.</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet.
            </p>
            <div className="button-container">
              <ButtonLink>Book a free visit</ButtonLink>
            </div>
          </div>

          <div className="stcky-box-home-cta" data-number="3">
            <img src="/images/service-ai-6.webp" alt="Service 3" />
            <h5>
              <House /> Book a free visit{" "}
              <span className="highlight">and get a clear quote.</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet.
            </p>
            <div className="button-container">
              <ButtonLink>Book a free visit</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
