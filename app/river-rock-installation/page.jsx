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
import RiverRock from "@/UI/Icons/RiverRock";

export const metadata = {
  title: "River rock installation | LJ & Gonzalez Landscaping",
  description:
    "At LJ & González, we install river rock to prevent erosion and improve landscape aesthetics, ensuring effective drainage and lasting stability.",
  keywords: "River rock installation",
  openGraph: {
    title: "River rock installation | LJ & Gonzalez Landscaping",
    description:
      "Our land leveling service provides homeowners with a smooth and even lawn, perfect for outdoor activities and entertainment. Learn more about our land leveling services and how we can help you achieve your dream lawn.",
    url: "https://www.ljandgonzalez.com/river-rock-installation",
    images: [
      {
        url: "/videos/poster/poster-sod.webp",
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
  canonical: "https://www.ljandgonzalez.com/river-rock-installation",
};

const serviceName = "River rock installation";

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
            <RiverRock size="sm" /> {serviceName}
          </span>
        }
        Description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet."
        Title="Erosion threatens landscapes "
        Highlight="stabilize with river rock."
        Video="/videos/stock-river.webm"
      />

      <GoogleReviews />

      <VideoComponent
        imageSrc="/images/white-house.jpg"
        title="Lorem impsun in dolore"
        highlight="pastrun getlufa"
        paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
        videoSrc="/videos/videodemoService.webm"
        videoPoster="/videos/poster/poster-river.webp"
      />

      <BenefitsService
        title="This is the heading"
        highlight="and this is the highlight."
        testimonials={testimonials}
        benefits={benefits.map((b) => ({
          ...b,
          icon: <b.icon />,
        }))}
      />

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

      <GalleryService
        icon={<Grading size="lg" />}
        title="Lorem ipsum"
        highlight="dolor sit amet"
        paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices."
        images={galleryImages}
      />

      <CtaSection
        title="Lorem ipsum dolor sit"
        highlight="lorem ipsum dolor sit amet"
        description="Hola. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices."
      />

      <Faq
        title="This is where we show you the frequently asked"
        highlight="questions."
      >
        {faqItems}
      </Faq>
    </>
  );
}

export default Design;
