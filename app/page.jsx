import ButtonCTA from "@/UI/Buttons/ButtonCTA";
import ButtonLink from "@/UI/Buttons/ButtonLink";
import CtaSection from "@/UI/GeneralComponents/CtaSection";
import Faq from "@/UI/GeneralComponents/Faq";
import GallerySection from "@/UI/GeneralComponents/GallerySection";
import GoogleReviews from "@/UI/GeneralComponents/GoogleReviews";
import HowItWorks from "@/UI/GeneralComponents/HowItWorks";
import Navbar from "@/UI/GeneralComponents/Navbar";
import ServiceGridHome from "@/UI/GeneralComponents/ServiceGridHome";
import VideoComponent from "@/UI/GeneralComponents/VideoSection";
import Grass from "@/UI/Icons/Grass";
import LandLeveling from "@/UI/Icons/LandLeveling";
import Quotes from "@/UI/Icons/Quotes";
import "./Home.scss";

export const metadata = {
  title: "LJ & Gonzalez Landscaping Services",
  description: "Home page Landscaping description",
  keywords: "landscaping, gardening",

  openGraph: {
    title: "LJ & Gonzalez Landscaping Services",
    description: "Home page Landscaping description",
    url: "https://www.ljandgonzalez.com"
  },

  robots: {
    index: true,
    follow: true,
  },

    alternates: {
    canonical: "https://www.ljandgonzalez.com",
  },
};

const faqItems = [
  {
    question: "What landscaping services do you offer?",
    answer:
      "We offer a wide range of services, including land leveling, sod installation, functional plant design, mulch application, river rock installation, wall retaining installation, and irrigation system installation.",
  },
  {
    question: "How do you ensure the quality of your landscaping projects?",
    answer:
      "Our team uses high-quality materials and follows industry best practices. We work closely with clients to ensure that each project meets their standards and expectations.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Yes, we have a portfolio of completed projects available for viewing. It showcases the quality and variety of our landscaping solutions.",
  },
  {
    question: "Do you provide consultations before starting a project?",
    answer:
      "Absolutely! We offer free consultations to discuss your needs, assess your space, and provide tailored recommendations.",
  },
  {
    question: "Are your services suitable for both residential and commercial properties?",
    answer:
      "Yes, we cater to both residential and commercial clients, providing customized solutions to fit the specific requirements of each property type.",
  },
  {
    question: "What is the typical timeline for a landscaping project?",
    answer:
      "The timeline varies depending on the scope and complexity of the project. During the consultation, we provide an estimated timeline to help you plan accordingly.",
  }
];

function Home() {
  return (
    <div>
      <div className="hero-container" id="home-bg">
        <Navbar type="main" />

        <div className="hero-content">
          <div className="hero-content-text">
            <h1>
              Transform Your Space with{" "}
              <span className="highlight"> Expert Contracting Solutions</span>
            </h1>

            <p>
              At LJ & Gonzalez Landscaping, we address your key challenges with targeted solutions like land leveling, sod installation, and efficient irrigation systems. Our expert services resolve common pain points, enhancing both beauty and stability. 
            </p>
          </div>
          <div className="button-container reveal-fade">
            <ButtonCTA href={"#contact"} extraClasses={"primary-button"}>
              Book a free visit today
            </ButtonCTA>
            {/*<ButtonLink href={"/faq"}>Check our projects</ButtonLink>*/}
          </div>
        </div>
      </div>

      <GoogleReviews />

      <VideoComponent
        paragraph={
          "We turn your landscaping dreams into reality. With LJ & Gonzalez Landscaping, experience seamless integration of functionality and design, ensuring your outdoor area not only meets but exceeds expectations."
        }
        title={" Revitalize your yard"}
        imgSrc={"/images/white-house.jpg"}
        videoPoster={"/videos/poster/poster-services.webp"}
        videoSrc={"/videos/videodemoService.webm"}
        highlight={"with our solutions"}
      />

      {/* Grid reviews section */}

      <div className="reviews-grid-container section reveal-left">
        <div className="reviews-grid-title">
          <h6>Welcome to LJ&G </h6>
          <h2>
            Elevate your outdoor{" "}
            <span className="highlight">space with our expertise</span>
          </h2>
          <p>
            {" "}
            Our clients' feedback speaks volumes about our dedication to excellence. LJ & Gonzalez Landscaping consistently delivers beautiful, functional outdoor spaces that our clients are proud of.
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
              Create a stable, level surface to prevent water pooling and support your landscaping needs.{" "}
              <span className="highlight">
                consectetur adipiscing elit.
              </span>{" "}
            </h6>
          </div>
          <div className="reviews-grid-item-image-1">
            <img src="/images/wall-real.jpeg" />
          </div>
          <div className="reviews-grid-item-black">
            <Quotes size="lg" />
            <h6>
              {" "}
              The team at LJ & Gonzalez exceeded our expectations. They handled every aspect of our project with care and precision, turning our ideas into reality. Our backyard has never looked better, and we love spending time there now.{" "}
            </h6>
            <p> Olivia Martinez </p>
          </div>
          <div className="reviews-grid-item-service-green">
            <span>
              {" "}
              <Grass size="sm" /> Sod Installation{" "}
            </span>
            <h6>
              {" "}
              Achieve an instant, green lawn with easy-to-maintain sod for a beautiful yard.{" "}
              <span className="highlight">
                consectetur adipiscing elit.
              </span>{" "}
            </h6>
          </div>
          <div className="reviews-grid-item-bkg-image">
            <Quotes size="lg" />
            <h6>
              {" "}
              Great experience working with LJ & Gonzalez! They were attentive and responsive, and the quality of their work really shows. They helped us achieve a beautiful and functional outdoor space that fits our lifestyle perfectly.{" "}
            </h6>
            <p> William Thompson </p>
          </div>
          <div className="reviews-grid-item-image-2">
            <img src="/images/rock-installation-real.jpeg" />
          </div>
          <div className="reviews-grid-item-yellow">
            <Quotes size="lg" />
            <h6>
              {" "}
              From the initial consultation to the final touches, the process was smooth and efficient. The landscaping team provided solutions and suggestions that perfectly suited our vision.{" "}
            </h6>
            <p> John Roberts - Builder & Co Founder </p>
          </div>
          <div className="reviews-grid-item-green">
            <Quotes size="lg" />
            <h6>
              {" "}
              Great attention to detail and a strong focus on customer satisfaction. The staff was friendly and communicative, ensuring we were happy with each stage of the project. Highly recommend their services for anyone looking to enhance their landscape.{" "}
            </h6>
            <p> James Anderson </p>
          </div>
        </div>
      </div>

      {/* Services grid section */}

      <ServiceGridHome />

      <CtaSection
        description={
          "Transform your yard with ease. Connect with our team for a complimentary visit to explore innovative, personalized options. Schedule your consultation now!"
        }
        highlight={"vision a reality"}
        title={"Make your"}
      />

      <HowItWorks />

      <GallerySection />

      <Faq
        title="Frequently asked questions"
        highlight="about LJ & Gonzalez"
      >
        {faqItems}
      </Faq>
    </div>
  );
}

export default Home;
