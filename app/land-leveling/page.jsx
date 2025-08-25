  import CtaSection from "@/UI/GeneralComponents/CtaSection";
  import Faq from "@/UI/GeneralComponents/Faq";
  import VideoComponent from "@/UI/GeneralComponents/VideoSection";
  import GoogleReviews from "@/UI/GeneralComponents/GoogleReviews";
  import Leaf from "@/UI/Icons/Leaf";
  import Schovel from "@/UI/Icons/Shovel";
  import Lotus  from "@/UI/Icons/Lotus";
  import Grass from "@/UI/Icons/Grass";
  import Grading from "@/UI/Icons/Grading";
  import "./service.scss";
  import GalleryService from "@/UI/GeneralComponents/GalleryService";
  import BenefitsService from "@/UI/GeneralComponents/BenefitsService";
  import ServicesHeroSection from "@/UI/GeneralComponents/ServicesHeroSection";
  

  export const metadata = {
    title: 'Design',
    description: 'How the application works and its features',
    keywords: 'how it works, application guide',
  }

  function Desing() {
    
    return (
      <>

        {/* Hero Section */}
        <ServicesHeroSection 
        Description={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet."}
        Title={"This is the text "}
        Highlight={"and this is the highlight."} 
        Background={"landleveling-bg"}

        />
    
      {/* Seccion de reviews */}
      <GoogleReviews />

      {/* Seccion de video */}
      <VideoComponent 
        imageSrc="/images/white-house.jpg"
        title="Lorem impsun in dolore"
        highlight="pastrun getlufa"
        paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
        videoSrc="/videos/videoDemo.mp4"
        videoPoster="/videos/design-hero.jpg"
      />
      
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
            icon={<Grading size="lg" />}
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
    {/* <Faq
      title= "This is where we show you the frequently asked"
      highlight="questions."
    >
      {[
        {
          question: "Question 1: Lorem ipsum dolor sit amet consectetur?",
          answer: "Answer 1: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
        },
        {
          question: "Question 2: Lorem ipsum dolor sit amet consectetur?",
          answer: "Answer 2: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
        },
         {
          question: "Question 3: Lorem ipsum dolor sit amet consectetur?",
          answer: "Answer 3: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
        },
        {
          question: "Question 4: Lorem ipsum dolor sit amet consectetur?",
          answer: "Answer 4: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
        },
      ]}
    </Faq> */}
      
      </>
    )
  }

  export default Desing;
