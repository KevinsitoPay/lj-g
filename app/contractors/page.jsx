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
import Shovel from "@/UI/Icons/Shovel";

export const metadata = {
  title: "Contractors | LJ & Gonzalez Landscaping",
  description:
    "Find skilled contractors at LJ & González for reliable, high-quality work on any project, big or small.",
  keywords: "land leveling, lawn leveling, yard grading, yard leveling",
  openGraph: {
    title: "Contractors | LJ & Gonzalez Landscaping",
    description:
      "Our land leveling service provides homeowners with a smooth and even lawn, perfect for outdoor activities and entertainment. Learn more about our land leveling services and how we can help you achieve your dream lawn.",
    url: "https://www.ljandgonzalez.com/contractors",
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
  canonical: "https://www.ljandgonzalez.com/contractors",
};

const serviceName = "Contractors";

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
    title: "Primary",
    highlight: "benefit",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
  {
    image: "/images/house-gray.jpg",
    icon: Grading,
    title: "Secundary",
    highlight: "benefit",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
  {
    image: "/images/house-footer.jpg",
    icon: Schovel,
    title: "Tertiary",
    highlight: "benefit",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
];

const considerationItems = [
  {
    icon: Leaf,
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    icon: Lotus,
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    icon: Schovel,
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    icon: Grass,
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
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
    question: "Question 1: Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Answer 1: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
  {
    question: "Question 2: Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Answer 2: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
  {
    question: "Question 3: Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Answer 3: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
  {
    question: "Question 4: Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Answer 4: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
];

function Design() {
  return (
    <>
      <ServicesHeroSectionVideo
        ServiceName={
          <span className="flex items-center gap-2">
            <Shovel size="sm" /> {serviceName}
          </span>
        }
        Description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet."
        Title="Expert contractors "
        Highlight="ready for your project."
        Video="/videos/stock-contractors.webm"
      />

      <GoogleReviews />

      <div className="section-2-container section reveal">
        <div className="section-2-box-text">
          <p className="heading-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet. Lorem ipsum
            dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
            in hendrerit urna. Pellentesque sit amet.
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
    </>
  );
}

export default Design;
