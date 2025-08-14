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
  import BenefitsService from "@/UI/GeneralComponents/BenefitsService";
  
  

  export const metadata = {
    title: 'Design',
    description: 'How the application works and its features',
    keywords: 'how it works, application guide',
  }

  function Desing() {
    
    return (
      <div>


        {/* Hero Section */}
      <div className="design-container"> 
          <div className="hero-content">
          <h1>Tittle where we adress the <span className="highlight"> main pain point</span></h1>
          <p>Description where we adress how we can resolve the main pain point main pain point that the client might have. Proving our value and being apart of our competitors.</p>
          <Button text="Adress pain point" size="medium" link="/" variant="filled" textColor="#28282A" backgroundColor="#FCFAF8" iconColor="#F1572D" />
          <Button text="Check our projects" size="medium" link="/" variant="minimal" textColor="#FCFAF8" backgroundColor="transparent" />
        </div>
        </div>

      {/* Seccion de reviews */}
      <GoogleReviews />

      {/* Seccion de video */}
      <VideoComponent />

      {/* Seccion de beneficios */} 

       <BenefitsService
      testimonials={[
        {
          quote: "“Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in...”",
          author: "Barbara Smith"
        },
        {
          quote: "“Second testimonial text goes here, highlighting user experience and satisfaction.”",
          author: "Andrew Johnson"
        },
        {
          quote: "“Another testimonial to showcase diversity in opinions and positive feedback.”",
          author: "Jennifer Lee"
        },
        {
          quote: "“Final testimonial snippet to bring more authenticity and customer trust.”",
          author: "Carlos Perez"
        }
      ]}
      benefits={[
        { 
          image: "/images/footer_bkg.jpg",
          icon: <Leaf />,
          title: "Primary",
          highlight: "benefit",
          text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
        },
        { 
          image: "/images/house-gray.jpg",
          icon: <Grading />,
          title: "Secundary",
          highlight: "benefit",
          text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
        },
        { 
          image: "/images/house-footer.jpg",
          icon: <Schovel />,
          title: "Tertiary",
          highlight: "benefit",
          text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
        }
      ]}
    />

         {/* Seccion 2 */}
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

      {/* Seccion de galeria */}
          <GalleryService
             title="Lorem ipsum"
             highlight="dolor sit amet"
             paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices."
             images={[
              "/images/service-ai-6.webp",
              "/images/service-ai-1.webp",
              "/images/service-ai-3.webp",
              "/images/service-ai-5.webp",
             "/images/service-ai-4.webp", 
              "/images/service-ai-6.webp",
              "/images/service-ai-1.webp",
              "/images/service-ai-3.webp",
              "/images/service-ai-5.webp",
             "/images/service-ai-4.webp",   ]} />

      {/* Seccion de CTA */}
      <CtaSection title="Lorem ipsum dolor sit amet consectetur adipiscing elit." description="Hola. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices." />
      
      {/* Seccion de FAQ */}
      <Faq />

      </div>
    )
  }

  export default Desing;
