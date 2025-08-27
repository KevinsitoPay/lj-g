import Button from "../Buttons/ButtonCTA";
import "./VideoSection.scss";
import VideoPlayer from "./VideoPlayer";
import ButtonLink from "../Buttons/ButtonLink";

function VideoComponent({ title, highlight, paragraph, videoSrc, videoPoster }) {
  return (
    <div className="video-container section reveal">
      <div className="video-box-content">
        <div className="video-box-content-title">
          <h2>{title} <span className="highlight">{highlight}</span></h2>
        </div>
        <div className="video-box-content-description">
          <p>{paragraph}</p>
          <div className="video-box-content-description-button">
            <ButtonLink altArrowColor={"arrow-black"} extraClasses={"link-black"} href={"/how-it-works"}>Check how it works</ButtonLink>
          </div>
        </div>
      </div>
      <div className="video-box-video">
        <VideoPlayer src={videoSrc} poster={videoPoster} />
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