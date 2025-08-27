import FaqCard from "@/UI/GeneralComponents/FaqCard";
import Navbar from "@/UI/GeneralComponents/Navbar";
import ButtonCTA from "@/UI/Buttons/ButtonCTA";
import ButtonLink from "@/UI/Buttons/ButtonLink";
import "./FaqPage.scss";
import ServicesHeroSection from "@/UI/GeneralComponents/ServicesHeroSection";

export const metadata = {
  title: "Frequently asked questions | LJ & Gonzalez",
  description:
    "This page provides information about frequently asked questions",
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
    index: true,
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
          "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet."
        }
        Title={"This is the text "}
        Highlight={"and this is the highlight."}
        Background={"faq-bg"}
      />

      {/* CTA section */}
      <div className="cta-section section">
        <div className="cta-content-left">
          <h2>
            Lorem impsun in dolore{" "}
            <span className="highlight">pastrun getlufa</span>
          </h2>
        </div>
        <div className="cta-content-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet. Lorem ipsum
            dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
            in hendrerit urna. Pellentesque sit amet.
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
