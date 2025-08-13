import Button from "@/UI/Buttons/Button";
import "./Home.scss";
import GoogleReviews from "@/UI/GeneralComponents/GoogleReviews";
import VideoComponent from "@/UI/GeneralComponents/VideoComponent";
import CtaSection from "@/UI/GeneralComponents/CtaSection";
import List from "@/UI/Icons/List";
import GallerySection from "@/UI/GeneralComponents/GallerySection";
import Faq from "@/UI/GeneralComponents/Faq";
import Navbar from "@/UI/GeneralComponents/Navbar";

export const metadata = {
  title: "Home page Landscaping title",
  description: "Home page Landscaping description",
  keywords: "landscaping, gardening",
};

function Home() {
  return (
    <div>
      <div className="hero-container">
        <Navbar />

        <div className="hero-content">

          <div>
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
          <div className="button-container">
        <Button extraClasses={"primary-button"}>Button text</Button>
        <Button>Button text</Button>




          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
