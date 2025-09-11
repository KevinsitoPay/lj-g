"use client";

import ButtonCTA from "@/UI/Buttons/ButtonCTA";
import VideoPlayer from "@/UI/GeneralComponents/VideoPlayer";
import List from "@/UI/Icons/List";
import Lotus from "@/UI/Icons/Lotus";
import Shovel from "@/UI/Icons/Shovel";
import HowCarrousel from "../../app/how-it-works/how-carrousel";
import Dropdown from "@/UI/GeneralComponents/Dropdown";
import "./howitworks.scss";

export default function HowItWorks() {
  return (
    <div className="how section">
      {/* Sticky left column */}
      <div className="how-col1 sticky-col reveal-left">
        <div className="how-text mb-16">
          <div className="icon-section mb-8 heading-6 highlight-primary">
            Learn how it works...
          </div>
          <h3 className="mb-4">
            This is the heading{" "}
            <span className="highlight-primary">This is the highlight</span>
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet minus
            fugit fuga possimus sunt, vel suscipit, deleniti ad praesentium
            cupiditate vitae dolores soluta voluptas laborum.
          </p>
        </div>

        <div className="how-button mb-16">
          <ButtonCTA extraClasses={"primary-button-lofi"}>
            Book a free visit today
          </ButtonCTA>
        </div>

        <div className="how-reviews reveal">
          <p className="review mb-4">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            eveniet illum at id soluta facilis, alias ipsam numquam earum
            provident vero voluptates dolores saepe expedita."
          </p>
          <p className="heading-icon">
            <span className="author">Andres Michel</span>
            <span className="rating">★★★★★</span>
          </p>
        </div>
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
            <span className="highlight-primary">Highlight</span>
          </h3>
          <p className="mb-16">
            Lorem ipsum dolor sit amet consectetur adipiscing elit...
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
            <span className="highlight-primary">Highlight</span>
          </h3>
          <p className="mb-16">
            Lorem ipsum dolor sit amet consectetur adipiscing elit...
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
            <span className="highlight-primary">Highlight</span>
          </h3>
          <p className="mb-16">
            Lorem ipsum dolor sit amet consectetur adipiscing elit...
          </p>
          <Dropdown
            items={[
              {
                question: "How long does a landscaping project take?",
                answer: "It depends...",
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes!...",
              },
              {
                question: "Can I choose the materials?",
                answer: "Absolutely...",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
