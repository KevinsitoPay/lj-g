import Button from "@/UI/Buttons/Button";
import "./Home.scss"
import GoogleReviews from "@/UI/GeneralComponents/GoogleReviews";
import VideoComponent from "@/UI/GeneralComponents/VideoComponent";
import CtaSection from "@/UI/GeneralComponents/CtaSection";
import List from "@/UI/Icons/List";
import GallerySection from "@/UI/GeneralComponents/GallerySection";
import Faq from "@/UI/GeneralComponents/Faq";

export const metadata = {
  title: 'Home page Landscaping title',
  description: 'Home page Landscaping description',
  keywords: 'landscaping, gardening',
}

function Home() {
  return ( 
           // Hero section home page
    <div> 
      
    <div className="hero-container"> 
      <div className="hero-content">
        <h1>Tittle where we adress the <span className="highlight"> main pain point</span></h1>
        <p>Description where we adress how we can resolve the main pain point main pain point that the client might have. Proving our value and being apart of our competitors.</p>
        <Button text="Adress pain point" size="medium" link="/" variant="filled" textColor="#28282A" backgroundColor="#FCFAF8" iconColor="#F1572D" />
        <Button text="Check our projects" size="medium" link="/" variant="minimal" textColor="#FCFAF8" backgroundColor="transparent" />
     </div>
    </div>
    
    <GoogleReviews />

    <VideoComponent /> 
 
    <div className="section-2-container">  
      <div className="section-2-box">
      <div className="section-2-content-left">
        <div className="section-2-content-box-1">
          <p> Service </p>
          <h4>This section has an image with the location of service that we work on.</h4>
        </div>
        <div className="section-2-content-box-2">
          <p> Service </p>
          <h6>Lorem ipsum dolor sit amet conset <span>adipiscing elit Ut.</span></h6>
        </div>
        <div className="section-2-content-box-3">
        </div>
      </div>
      <div className="section-2-content-right">
        <h6> Welcome to LJ&G </h6>
        <h3> Ipsum dolor sit amet conset <span className="highlight">adipiscing elit Ut.</span> </h3>
        <p> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sitet. Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>
        <div className="section-2-content-tiltle">
          <div className="section-2-content-tiltle-left">
            <h4> +8 years </h4>
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et </p>
          </div>
          <div className="section-2-content-tiltle-right">
            <h4> +500 Clients </h4>
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et </p>
          </div>
        </div>
        <div className="section-2-content-button">
        <Button text="Book a visit" size="medium" link="/" variant="filled" textColor="#28282A" backgroundColor="#FDE1D9" iconColor="#F1572D" /> 
        <Button text="Check our projects" size="medium" link="/" variant="minimal" textColor="#28282A" backgroundColor="transparent" iconSvgColor={"#28282A"} /> 
        </div>
      </div>
    </div>
    </div>

    <CtaSection title="Lorem ipsum dolor sit amet consectetur adipiscing elit." description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices." /> 
    
    <div className="section-3-container">
      <div className="section-3-content">
        <div className="section-3-content-left">
          <h4> Lorem ipsum dolor sit amet<span className="highlight"> consectetur adipiscing elit. </span></h4>
          <p> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet. </p>
        </div>
        <div className="section-3-content-right">
          <Button text="Adress pain point" size="medium" link="/" variant="filled" textColor="#28282A" backgroundColor="#DBE0D3" iconColor="#6C7A52" />
        </div>
      </div>
      <div className="section-3-boxes">
      <div className="section-3-box-1">
        <List size="m" />
        <h5>Lorem consectetur</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.</p>
        <Button text="Address pain point" size="medium" link="/" variant="minimal" textColor="#28282A" backgroundColor="transparent" iconSvgColor={"#28282A"}/> 
      </div>
      <div className="section-3-box-2">
        <List size="m" />
        <h5>Lorem consectetur</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.</p>
        <Button text="Address pain point" size="medium" link="/" variant="minimal" textColor="#28282A" backgroundColor="transparent" iconSvgColor={"#28282A"} />
      </div>
      <div className="section-3-box-3">
        <List size="m" />
        <h5>Lorem consectetur</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.</p>
        <Button text="Address pain point" size="medium" link="/" variant="minimal" textColor="#28282A" backgroundColor="transparent" iconSvgColor={"#28282A"} />
      </div>
      <div className="section-3-box-4">
        <List size="m" />
        <h5>Lorem consectetur</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.</p>
        <Button text="Address pain point" size="medium" link="/" variant="minimal" textColor="#28282A" backgroundColor="transparent" iconSvgColor={"#28282A"} />
      </div>
      </div>
    </div>
    
    <GallerySection />

    <Faq />

    </div>
  )
}

export default Home;


