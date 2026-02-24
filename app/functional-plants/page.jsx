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
import Plants from "@/UI/Icons/Plants";

export const metadata = {
  title: "Functional plants | LJ & Gonzalez Landscaping",
  description:
    "At LJ & González, we enhance functional plants with advanced technology and expertise, boosting efficiency and ensuring sustainable performance.",
  keywords: "Functional plants",
  openGraph: {
    title: "Land Leveling | LJ & Gonzalez Landscaping",
    description:
      "Our land leveling service provides homeowners with a smooth and even lawn, perfect for outdoor activities and entertainment. Learn more about our land leveling services and how we can help you achieve your dream lawn.",
    url: "https://www.ljandgonzalez.com/functional-plants",
    images: [
      {
        url: "/videos/poster/poster-functional.webp",
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
      alternates: {
    canonical: "https://www.ljandgonzalez.com/functional-plants",
  },
};

const serviceName = "Functional plants";

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
    title: "Enhanced",
    highlight: "aesthetics",
    text: "Functional plants beautify your yard, enhancing the visual appeal effortlessly.",
  },
  {
    image: "/images/house-gray.jpg",
    icon: Grading,
    title: "Low",
    highlight: "maintenance",
    text: "Enjoy vibrant gardens that require minimal upkeep and reduce gardening effort.",
  },
  {
    image: "/images/house-footer.jpg",
    icon: Schovel,
    title: "Eco-friendly",
    highlight: "options",
    text: "Choose plants that support local ecosystems and promote biodiversity naturally.",
  },
];

const considerationItems = [
  {
    icon: Leaf,
    title: "Evaluate sunlight needs",
    text: "Determine how much light your garden receives to select suitable plants.",
  },
  {
    icon: Lotus,
    title: "Check Soil Quality",
    text: "Understanding your soil helps in choosing plants that will thrive.",
  },
  {
    icon: Schovel,
    title: "Consider Water Needs",
    text: "Plan for water-efficient plants if your area is arid.",
  },
  {
    icon: Grass,
    title: "Budget and Timing",
    text: "Installation cost and seasonality may affect plant selection and success.",
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
    question: "What is the cost of installing functional plants?",
    answer:
      "Costs vary by plant type and design; contact us for a quote.",
  },
  {
    question: "How long does the plant installation take?",
    answer:
      "Usually a few days, depending on garden size and complexity.",
  },
  {
    question: "Can you provide plant options for my climate?",
    answer:
      "Yes, we select plants suited to your specific climate conditions.",
  },
  {
    question: "What maintenance do functional plants require?",
    answer:
      "Minimal; designed to be low maintenance with occasional care.",
  },
];

function Design() {
  return (
    <>
      <ServicesHeroSectionVideo
        ServiceName={
          <span className="flex items-center gap-2">
            <Plants size="sm" /> {serviceName}
          </span>
        }
        Description="At LJ & González, we curate beautiful, low-maintenance gardens that add value to your property. Our expertise ensures vibrant, sustainable landscapes tailored to your needs."
        Title="Boost plant health "
        Highlight="improve systems now"
        Video="/videos/stock-functionalplants.webm"
      />

      <GoogleReviews />

      <VideoComponent
        imageSrc="/images/white-house.jpg"
        title="Grow a stunning garden"
        highlight="with minimal effort"
        paragraph="Functional plants offer beauty and ease. Using expert selection and placement, LJ & González create low-maintenance landscapes that thrive. Enjoy lush, healthy gardens without hassle."
        videoSrc="/videos/videodemoService.webm"
        videoPoster="/videos/poster/poster-functional.webp"
      />

      <BenefitsService
        title="Benefits of"
        highlight="functional plants"
        testimonials={testimonials}
        benefits={benefits.map((b) => ({
          ...b,
          icon: <b.icon />,
        }))}
      />

      <div className="section-2-container section reveal">
        <div className="section-2-box-text">
          <p className="heading-5">
            Functional plants provide beauty with ease. Consider existing soil, sunlight, and climate needs before choosing this service.
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
        icon={<Plants size="lg" />}
        title="Discover our Functional plant"
        highlight="creations"
        paragraph="Browse stunning gardens by LJ & González and see our skill in merging beauty with functionality."
        images={galleryImages}
      />

      <CtaSection
        title="Transform your outdoors"
        highlight="with Functional plants"
        description="Enjoy a vibrant garden with LJ & González’s expert plant selection and design. Let us create a beautiful, low-maintenance landscape for you."
      />

      <Faq
        title="Frequently asked questions about"
        highlight="Functional plants"
      >
        {faqItems}
      </Faq>
    </>
  );
}

export default Design;
