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
import Quotes from "@/UI/Icons/Quotes";
import ServiceGridHome from "@/UI/GeneralComponents/ServiceGridHome";
import LandLeveling from "@/UI/Icons/LandLeveling";
import Grass from "@/UI/Icons/Grass";
import HowItWorks from "@/UI/GeneralComponents/HowItWorks";
import BenefitsService from "@/UI/GeneralComponents/BenefitsService";

export const metadata = {
  title: "LJ & Gonzalez Landscaping Services",
  description: "Home page Landscaping description",
  keywords: "landscaping, gardening",
};

const faqItems = [
  {
    question: "Question 1: Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Answer 1: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
  {
    question: "Question 2: Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Answer 2: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
  {
    question: "Question 3: Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Answer 3: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
  {
    question: "Question 4: Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Answer 4: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
];

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

      <VideoComponent
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet."
        }
        title={"Lorem impsun in dolore"}
        videoPoster={"/videos/poster/poster-irrigation.webp"}
        videoSrc={"/videos/videoDemo.mp4"}
        highlight={"highlight"}
      />

      {/* Grid reviews section */}

      <div className="reviews-grid-container section reveal-left">
        <div className="reviews-grid-title">
          <h6>Welcome to LJ&G </h6>
          <h2>
            Lorem ipsum dolor sit amet{" "}
            <span className="highlight">consectetur adipiscing elit.</span>
          </h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet.
          </p>
        </div>
        <div className="reviews-grid">
          <div className="reviews-grid-item-service-orange">
            <span>
              {" "}
              <LandLeveling size="sm" /> Land Leveling{" "}
            </span>
            <h6>
              {" "}
              Lorem ipsum dolor sit amet{" "}
              <span className="highlight">
                consectetur adipiscing elit.
              </span>{" "}
            </h6>
          </div>
          <div className="reviews-grid-item-image-1">
            <img src="/images/collage.png" />
          </div>
          <div className="reviews-grid-item-black">
            <Quotes size="lg" />
            <h6>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices.{" "}
            </h6>
            <p> John Roberts - Builder & Co Founder </p>
          </div>
          <div className="reviews-grid-item-service-green">
            <span>
              {" "}
              <Grass size="sm" /> Sod Installation{" "}
            </span>
            <h6>
              {" "}
              Lorem ipsum dolor sit amet{" "}
              <span className="highlight">
                consectetur adipiscing elit.
              </span>{" "}
            </h6>
          </div>
          <div className="reviews-grid-item-bkg-image">
            <Quotes size="lg" />
            <h6>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices.{" "}
            </h6>
            <p> John Roberts - Builder & Co Founder </p>
          </div>
          <div className="reviews-grid-item-image-2">
            <img src="/images/service-ai-3.webp" />
          </div>
          <div className="reviews-grid-item-yellow">
            <Quotes size="lg" />
            <h6>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices.{" "}
            </h6>
            <p> John Roberts - Builder & Co Founder </p>
          </div>
          <div className="reviews-grid-item-green">
            <Quotes size="lg" />
            <h6>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices.{" "}
            </h6>
            <p> John Roberts - Builder & Co Founder </p>
          </div>
        </div>
      </div>

      {/* Services grid section */}

      <ServiceGridHome />

      <CtaSection
        description={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet."
        }
        highlight={"highlight"}
        title={"This is the title"}
      />

      <HowItWorks />

      <GallerySection />

      <Faq
        title="This is where we show you the frequently asked"
        highlight="questions."
      >
        {faqItems}
      </Faq>
    </div>
  );
}

export default Home;
