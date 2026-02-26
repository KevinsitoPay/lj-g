import ButtonCTA from "@/UI/Buttons/ButtonCTA";
import Dropdown from "@/UI/GeneralComponents/Dropdown";
import VideoPlayer from "@/UI/GeneralComponents/VideoPlayer";
import List from "@/UI/Icons/List";
import Lotus from "@/UI/Icons/Lotus";
import Shovel from "@/UI/Icons/Shovel";
import HowCarrousel from "./how-carrousel";
import "./page.scss";

export default function DesignContent() {
  return (
    <div className="how section">
      {/* Sticky left column */}
      <div className="how-col1 sticky-col reveal-left">
        <div className="how-text mb-16">
          <div className="icon-section mb-8 heading-6 highlight-primary">
            Learn how it works...
          </div>
          <h3 className="mb-4">
            Transforming your vision{" "}
            <span className="highlight-primary">step by step</span>
          </h3>
          <p>
            Delve into our streamlined approach, from the initial consultation to the completion of your project. We prioritize your needs, crafting tailored plans and ensuring timely execution. Our commitment to open communication and precision guarantees a hassle-free experience, bringing your landscape vision to life.
          </p>
        </div>

        <div className="how-button mb-16">
          <ButtonCTA href="#contact" extraClasses={"primary-button-lofi"}>
            Book a free visit today
          </ButtonCTA>
        </div>

        {/*<div className="how-reviews reveal">
          <p className="review mb-4">
            "I'm thoroughly impressed with LJ & Gonzalez. Their attention to detail and commitment to understanding my needs made the process smooth and enjoyable. The result exceeded my expectations!"
          </p>
          <p className="heading-icon">
            <span className="author">Andres Michel</span>
            <span className="rating">★★★★★</span>
          </p>
        </div> */}
      </div>

      {/* Right column sections */}
      <div className="how-col2">
        {/* Section 1 */}
        <div className="how-section reveal-right" id="step-1">
          <VideoPlayer
            poster="/videos/design-hero.webp"
            src="/videos/VideoDemo.mp4"
          />
          <h3 className="mb-8 mt-16 heading-icon">
            <List size="lg" /> Step 1{" "}
            <span className="highlight-primary">Initial evaluation</span>
          </h3>
          <p className="mb-16">
            At LJ & Gonzalez Landscaping, our process begins with a thorough initial evaluation where we assess the unique aspects of your property. This step allows us to gather important details to inform the rest of the project.
          </p>
          <HowCarrousel type="how" />
        </div>

        {/* Section 2 */}
        <div className="how-section reveal-right" id="step-2">
          <VideoPlayer
            poster="/videos/design-hero.webp"
            src="/videos/VideoDemo.mp4"
          />
          <h3 className="mb-8 mt-16 heading-icon">
            <Lotus size="lg" /> Step 2{" "}
            <span className="highlight-primary">Creating a custom plan</span>
          </h3>
          <p className="mb-16">
            We develop a customized plan tailored specifically to your requirements. Our plan is designed to highlight the best features of your space and address any specific challenges. You can also explore our completed projects across various services to see the quality and creativity we bring to each endeavor.
          </p>
          <HowCarrousel type="service" />
        </div>

        {/* Section 3 */}
        <div className="how-section reveal-right" id="step-3">
          <VideoPlayer
            poster="/videos/design-hero.webp"
            src="/videos/VideoDemo.mp4"
          />
          <h3 className="mb-8 mt-16 heading-icon">
            <Shovel size="lg" /> Step 3{" "}
            <span className="highlight-primary">Understanding our process</span>
          </h3>
          <p className="mb-16">
            From project timelines to material selection, and the handling of unexpected challenges, we address all your questions. Our goal is to ensure transparency and confidence, guiding you every step of the way to achieve the landscape of your dreams.
          </p>
          <Dropdown
            items={[
              {
                question: "How long does a landscaping project take?",
                answer: "The duration varies based on the project scope and complexity. We provide a timeline during the initial consultation to set clear expectations.",
              },
              {
                question: "Do you offer free consultations?",
                answer: "Absolutely! We offer free consultations to discuss your vision and explore how we can bring it to life.",
              },
              {
                question: "Can I choose the materials?",
                answer: "Yes, you have the flexibility to select materials that meet your preferences. We’ll guide you on the best options for your project.",
              },
              {
                question: "What is the process for starting a project?",
                answer: "We start with an evaluation and consultation, followed by a custom plan and your approval to proceed.",
              },
              {
                question: "How do you handle unexpected challenges?",
                answer: "We proactively address challenges with clear communication and effective solutions to keep the project on track.",
              },
              {
                question: "Can I see completed projects?",
                answer: "Yes, we share completed projects with our clients. You can also explore our portfolio to see the quality and creativity we bring to each endeavor.",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
