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

          

    </div>
  );
}

export default Home;
