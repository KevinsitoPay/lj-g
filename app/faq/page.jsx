import FaqCard from "@/UI/GeneralComponents/FaqCard";
import Navbar from "@/UI/GeneralComponents/Navbar";
import ButtonCTA from "@/UI/Buttons/ButtonCTA";
import ButtonLink from "@/UI/Buttons/ButtonLink";
import "./FaqPage.scss";
import ServicesHeroSection from "@/UI/GeneralComponents/ServicesHeroSection";

export const metadata = {
  title: "Frequently asked questions | LJ & Gonzalez",
  description:
    "Visit LJ & González FAQ for detailed information about services, processes, and more.",
  keywords: "Faq, frequently asked questions, help",
  openGraph: {
    title: "Frequently asked questions | LJ & Gonzalez",
    description:
      "This page provides information about frequently asked questions",
    url: "https://www.ljandgonzalez.com/faq",
    images: [
      {
        url: "https://www.ljandgonzalez.com/favicon.ico",
        width: 800,
        height: 600,
        alt: "LJ & Gonzalez",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    noimageindex: true,
    noarchive: true,
  },
  canonical: "https://www.ljandgonzalez.com/faq",
}
 


function FaqPage() {
  return (
    <div>
      {/* hero section */}

      <ServicesHeroSection
        Description={
          "Discover answers to the most common questions our clients have. Whether you’re curious about our services, pricing, or how to get started, we’ve got you covered. "
        }
        Title={"Frequently asked "}
        Highlight={"questions."}
        Background={"faq-bg"}
      />

      {/* CTA section */}
      <div className="cta-section section">
        <div className="cta-content-left">
          <h2>
            Thorough answers to {" "}
            <span className="highlight">Your queries</span>
          </h2>
        </div>
        <div className="cta-content-right">
          <p>
            Welcome to our FAQ section where you'll find answers to the questions we get asked the most. From services to support, we aim to address your concerns and make your experience with us as seamless as possible.
          </p>
          <div className="button-container">
            <ButtonLink className="button-reverse">
              Check our projects
            </ButtonLink>
          </div>
        </div>
      </div>

      <FaqCard />
    </div>
  );
}

export default FaqPage;
