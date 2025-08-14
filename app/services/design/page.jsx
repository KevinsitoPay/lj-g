  import CtaSection from "@/UI/GeneralComponents/CtaSection";
  import Faq from "@/UI/GeneralComponents/Faq";
  import VideoComponent from "@/UI/GeneralComponents/VideoComponent";
  import GoogleReviews from "@/UI/GeneralComponents/GoogleReviews";
  import Button from "@/UI/Buttons/Button";
  import Leaf from "@/UI/Icons/Leaf";
  import Schovel from "@/UI/Icons/Shovel";
  import Lotus  from "@/UI/Icons/Lotus";
  import Grass from "@/UI/Icons/Grass";
  import Grading from "@/UI/Icons/Grading";
  import "./service.scss";
  import GalleryService from "@/UI/GeneralComponents/GalleryService";

  export const metadata = {
    title: 'Design',
    description: 'How the application works and its features',
    keywords: 'how it works, application guide',
  }

  function Desing() {
    
    return (
      <div>
            
      <div className="design-container"> 
          <div className="hero-content">
          <h1>Tittle where we adress the <span className="highlight"> main pain point</span></h1>
          <p>Description where we adress how we can resolve the main pain point main pain point that the client might have. Proving our value and being apart of our competitors.</p>
          <Button text="Adress pain point" size="medium" link="/" variant="filled" textColor="#28282A" backgroundColor="#FCFAF8" iconColor="#F1572D" />
          <Button text="Check our projects" size="medium" link="/" variant="minimal" textColor="#FCFAF8" backgroundColor="transparent" />
        </div>
        </div>

      <GoogleReviews />
      <VideoComponent />
      <CtaSection title="Lorem ipsum dolor sit amet consectetur adipiscing elit." description="Hola. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices." />
      <Faq />

        <div className="why-service-container">
        <h2>Why name <span className="highlight">service?</span></h2>
        
        <div className="why-service-content">
          <div className="why-service-quote">
            <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in...”</p>
            <p>Nadia Quezada <span>★★★★★</span></p>
          </div>
          
          <div className="why-service-benefits">
            <div className="benefit-card">
              <img src="/images/benefit1.jpg" alt="Benefit 1" />
              <h5> <Leaf/> Main <span className="highlight">benefit</span></h5>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</p>
            </div>
            <div className="benefit-card">
              <img src="/images/benefit2.jpg" alt="Benefit 2" />
              <h5> <Grading/> Second <span className="highlight">benefit</span></h5>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</p>
            </div>
            <div className="benefit-card">
              <img src="/images/benefit3.jpg" alt="Benefit 3" />
              <h5> <Schovel/> Third <span className="highlight">benefit</span></h5>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</p>
            </div>
          </div>
        </div>
        
        <div className="why-service-actions">
          <button className="prev-btn">←</button>
          <button className="next-btn">→</button>
          <Button text="Learn more" size="medium" link="/" variant="filled" textColor="#28282A" backgroundColor="#FCFAF8" iconColor="#F1572D" />
        </div>
      </div>

        <div className="section-2-container">
          <div className="section-2-box-text">
            <h5>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.</h5>
          </div>
          <div className="section-2-box-main">
            <div className="section-2-box-left">
              <div className="section-2-box-icon">
                <div className="icon-container">
                  <Leaf size="lg" />
                </div>
                <div className="icon-text">
                  <h5>Lorem ipsum dolor sit</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
                </div>
              </div>
              <div className="section-2-box-icon">
                <div className="icon-container">
                  <Lotus size="lg" />
                </div>
                <div className="icon-text">
                  <h5>Lorem ipsum dolor sit</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
                </div>
              </div>
              <div className="section-2-box-icon">
                <div className="icon-container">
                  <Schovel size="lg" />
                </div>
                <div className="icon-text">
                  <h5>Lorem ipsum dolor sit</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
                </div>
              </div>
              <div className="section-2-box-icon">
                <div className="icon-container">
                  <Grass size="lg" />
                </div>
                <div className="icon-text">
                  <h5>Lorem ipsum dolor sit</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
                </div>
              </div>
            </div>
            <div className="section-2-box-right">
              <img src="/images/service-ai-6.webp" alt="" />
            </div>
          </div>
        </div>

      <GalleryService />

      </div>
    )
  }

  export default Desing;
