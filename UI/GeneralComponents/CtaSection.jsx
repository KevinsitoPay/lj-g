import Button from "../Buttons/Button";
import "./CtaSection.scss";
function CtaSettion({ title, description }) {

    return (
        <div className="cta-section-container">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="cta-section-button">
            <Button text="Adress pain point" size="medium" link="/" variant="filled" textColor="#28282A" backgroundColor="#FCFAF8" iconColor="#F1572D" />
            </div>
        </div>
    );
}

export default CtaSettion;