import CtaSection from "@/UI/GeneralComponents/CtaSection";
import Faq from "@/UI/GeneralComponents/Faq";
import VideoComponent from "@/UI/GeneralComponents/VideoSection";
import GoogleReviews from "@/UI/GeneralComponents/GoogleReviews";
import Leaf from "@/UI/Icons/Leaf";
import Schovel from "@/UI/Icons/Shovel";
import Lotus from "@/UI/Icons/Lotus";
import Grass from "@/UI/Icons/Grass";
import Grading from "@/UI/Icons/Grading";
import GalleryService from "@/UI/GeneralComponents/GalleryService";
import BenefitsService from "@/UI/GeneralComponents/BenefitsService";
import ServicesHeroSectionVideo from "@/UI/GeneralComponents/ServicesHeroSectionVideo";
import Image from "next/image";
import "./service.scss";
import LandLeveling from "@/UI/Icons/LandLeveling";

export const metadata = {
  title: "Land leveling | LJ & Gonzalez Landscaping",
  description:
    "Smooth out your lawn with our land leveling service. Perfect for outdoor activities and entertainment.",
  keywords: "land leveling, lawn leveling, yard grading, yard leveling",
  openGraph: {
    title: "Land Leveling | LJ & Gonzalez Landscaping",
    description:
      "Our land leveling service provides homeowners with a smooth and even lawn, perfect for outdoor activities and entertainment. Learn more about our land leveling services and how we can help you achieve your dream lawn.",
    url: "https://www.ljandgonzalez.com/land-leveling",
    images: [
      {
        url: "/videos/poster/poster-landleveling.webp",
        width: 800,
        height: 600,
        alt: "LJ & Gonzalez",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    noarchive: true,
  },
  canonical: "https://www.ljandgonzalez.com/land-leveling",
};

const serviceName = "Land leveling";

const testimonials = [
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in...”",
    author: "Barbara Smith",
  },
  {
    quote:
      "“Second testimonial text goes here, highlighting user experience and satisfaction.”",
    author: "Andrew Johnson",
  },
  {
    quote:
      "“Another testimonial to showcase diversity in opinions and positive feedback.”",
    author: "Jennifer Lee",
  },
  {
    quote:
      "“Final testimonial snippet to bring more authenticity and customer trust.”",
    author: "Carlos Perez",
  },
];

const benefits = [
  {
    image: "/images/footer_bkg.webp",
    icon: Leaf,
    title: "Better",
    highlight: "Drainage",
    text: "Leveling prevents water from pooling around your home, protecting foundations and keeping yards safe.",
  },
  {
    image: "/images/house-gray.jpg",
    icon: Grading,
    title: "Smooth Outdoor",
    highlight: "Spaces",
    text: "Even ground creates a cleaner look and makes your lawn, patio, or garden easier to enjoy.",
  },
  {
    image: "/images/house-footer.jpg",
    icon: Schovel,
    title: "Stronger Property",
    highlight: "Value",
    text: "A well-leveled yard improves curb appeal and adds long-term value to your home.",
  },
];

const considerationItems = [
  {
    icon: Leaf,
    title: "Check Your Drainage Needs",
    text: "Proper leveling helps prevent water from pooling, but first evaluate if drainage is already an issue.",
  },
  {
    icon: Lotus,
    title: "Review Property Slope",
    text: "The natural grade of your yard determines how much work the leveling will require.",
  },
  {
    icon: Schovel,
    title: "Consider Landscape Plans",
    text: "Think about future patios, gardens, or walkways so leveling supports long-term goals.",
  },
  {
    icon: Grass,
    title: "Budget and Timing",
    text: "Project scope and seasonality can affect cost and scheduling, so plan ahead.",
  },
];

const galleryImages = [
  "/images/service-ai-6.webp",
  "/images/service-ai-1.webp",
  "/images/service-ai-3.webp",
  "/images/service-ai-5.webp",
  "/images/service-ai-4.webp",
  "/images/service-ai-6.webp",
  "/images/service-ai-1.webp",
  "/images/service-ai-3.webp",
  "/images/service-ai-5.webp",
  "/images/service-ai-4.webp",
];

const faqItems = [
  {
    question: "What is the average cost of land leveling?",
    answer:
      "The cost varies based on project specifics. Contact us for a detailed estimate.",
  },
  {
    question: "How long does the leveling process take?",
    answer:
      "Most projects are completed within a few days, but duration depends on site conditions and size.",
  },
  {
    question: "Can land leveling be done on sloped areas?",
    answer:
      "Yes, we expertly handle varied slopes to ensure even leveling and proper drainage.",
  },
  {
    question: "What equipment do you use for leveling?",
    answer:
      "We utilize advanced lasers and grading machinery for precise results.",
  },
];

function Design() {
  return (
    <>
      <ServicesHeroSectionVideo
        ServiceName={
          <span className="flex items-center gap-2">
            <LandLeveling size="sm" /> {serviceName}
          </span>
        }
        Description="At LJ & González, our expert team employs cutting-edge precision equipment and time-tested techniques to level land to perfection."
        Title="Unlevel land leads to waste "
        Highlight="improve your fields"
        Video="/videos/stock-landleveling.webm"
      />

      <GoogleReviews />

      <VideoComponent
        imageSrc="/images/white-house.jpg"
        title="Level land today to"
        highlight="save water tomorrow"
        paragraph="Land leveling is essential to improve irrigation, prevent soil erosion, and maximize your harvest. At LJ & González, we use precision equipment and proven techniques to deliver smooth, balanced fields."
        videoSrc="/videos/videodemoService.webm"
        videoPoster="/videos/poster/poster-LandLeveling.webp"
      />

      <BenefitsService
        title="Advantages of"
        highlight="Land leveling"
        testimonials={testimonials}
        benefits={benefits.map((b) => ({
          ...b,
          icon: <b.icon />,
        }))}
      />

      <div className="section-2-container section reveal">
        <div className="section-2-box-text">
          <p className="heading-5">
            Land leveling can greatly improve your yard by ensuring proper drainage, smoother outdoor spaces, and better curb appeal. Before choosing this service, consider the current landscape condition, property slope, and your long-term plans.
          </p>
        </div>
        <div className="section-2-box-main">
          <div className="section-2-box-left">
            {considerationItems.map((item, i) => (
              <div
                key={i}
                className={`section-2-box-icon ${
                  i === 0 ? "section-2-box-icon-active" : ""
                }`}
              >
                <div className="icon-container">
                  <item.icon size="lg" />
                </div>
                <div className="icon-text">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section-2-box-right">
            <Image
              src="/images/service-ai-6.webp"
              alt={`Image of ${serviceName}`}
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>

      <GalleryService
        icon={<Grading size="lg" />}
        title="Our success"
        highlight="stories"
        paragraph="Explore the impressive projects by LJ & González that demonstrate our expertise in delivering superior land leveling and landscaping solutions."
        images={galleryImages}
      />

      <CtaSection
        title="Elevate your property with"
        highlight="Precision Land leveling"
        description="Revitalize your landscape with expert leveling that enhances beauty and functionality. Let LJ & González transform your property today."
      />

      <Faq
        title="Frequently asked questions about"
        highlight="Land leveling"
      >
        {faqItems}
      </Faq>
    </>
  );
}

export default Design;
