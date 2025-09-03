import Link from "next/link";
import GoogleReviews from "@/UI/GeneralComponents/GoogleReviews";
import ButtonCTA from "@/UI/Buttons/ButtonCTA";
import ButtonLink from "@/UI/Buttons/ButtonLink";
import Navbar from "@/UI/GeneralComponents/Navbar";

export const metadata = {
  title: "Page not found | LJ & Gonzalez",
  description: "Sorry the page you are looking for does not exist",
  keywords: "landscaping, gardening",
};

export default function NotFound() {
  return (
    <>
      <div className="hero-container" id="home-bg">
        <Navbar type="main" />

        <div className="hero-content">
          <div className="hero-content-text">
            <h1>
              Sorry, the page you were looking {""}
              <span className="highlight"> does not exist</span>
            </h1>

            <p>
              It looks like the page you were looking for doesn't exist. We're
              sorry for the inconvenience. You can use the menu above to find
              what you're looking for or you can click on the button below to
              return to the start.
            </p>
          </div>
          <div className="button-container reveal-fade">
            <ButtonCTA href={"/"} extraClasses={"primary-button"}>
              Return to home
            </ButtonCTA>
          </div>
        </div>
      </div>

      <GoogleReviews />
    </>
  );
}
