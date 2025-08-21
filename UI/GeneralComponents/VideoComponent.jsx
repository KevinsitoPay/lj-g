import Button from "../Buttons/ButtonCTA";
import "./VideoComponent.scss";
import VideoPlayer from "./VideoPlayer";

function VideoComponent({ imageSrc, title, highlight, paragraph }) {
  return (
    <div className="video-container">
      <div className="video-box-content">
        <div className="video-box-content-title">
          <h2>{title} <span className="highlight">{highlight}</span></h2>
        </div>
        <div className="video-box-content-description">
          <p>{paragraph}</p>
          <div className="video-box-content-description-button">
            <Button 
              text="About Us" 
              size="medium" 
              link="/" 
              variant="minimal" 
              textColor="#28282A" 
              backgroundColor="transparent" 
              iconSvgColor="#28282A" 
            />
          </div>
        </div>
      </div>
      <div className="video-box-video">
        <VideoPlayer src="/videos/VideoDemo.mp4" poster="/videos/design-hero.jpg" />


        
        <img src="/images/design-hero.jpg" alt="" />
      </div>
      <div className="video-box-cta">
        <div>
          <p>100 +</p>
          <span>Satisfied clients</span>
        </div>
        <div>
          <p>8 +</p>
          <span>Years of experience</span>
        </div>
        <div>
          <p>4.9</p>
          <span>On Google Reviews</span>
        </div>
        <div>
          <p>5</p>
          <span>Areas of service</span>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;