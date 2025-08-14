import Button from "../Buttons/ButtonCTA";
import "./VideoComponent.scss";

function VideoComponent() {
  return (
    <div className="video-container">
        <div className="video-box-content">
            <div className="video-box-content-title">
                <h2> Lorem impsun in doloret <span className="highlight">pastrun getlufa.</span></h2>
            </div>
            <div className="video-box-content-description">
                <p> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </p>
                <div className="video-box-content-description-button">
                    <Button text="About Us" size="medium" link="/" variant="minimal" textColor="#28282A" backgroundColor="transparent" iconSvgColor="#28282A" />
                </div>
            </div>
        </div>
        <div className="video-box-video">
            <img src="/Images/white-house.jpg" alt="Video" />
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
  )
}
export default VideoComponent;