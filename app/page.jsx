import Button from "@/UI/Buttons/Button";
import "./Home.scss"
import GoogleReviews from "@/UI/GeneralComponents/GoogleReviews";
import VideoComponent from "@/UI/GeneralComponents/VideoComponent";
import CtaSettion from "@/UI/GeneralComponents/CtaSection";

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

    <CtaSettion title="Lorem ipsum dolor sit amet consectetur adipiscing elit." description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices." />

    </div>
  )
}

export default Home;


