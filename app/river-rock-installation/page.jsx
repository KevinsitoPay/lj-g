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
    image: "/images/footer_bkg.jpg",
    icon: Leaf,
    title: "Improved",
    highlight: "drainage",
    text: "River rocks prevent water pooling, protecting your property from damage.",
  },
  {
    image: "/images/house-gray.jpg",
    icon: Grading,
    title: "Natural",
    highlight: "beauty",
    text: "Enhance your landscape with the timeless elegance of river rocks.",
  },
  {
    image: "/images/house-footer.jpg",
    icon: Schovel,
    title: "Low",
    highlight: "maintenance",
    text: "Enjoy a durable solution that requires minimal upkeep and stays beautiful.",
  },
];

const considerationItems = [
  {
    icon: Leaf,
    title: "Drainage needs",
    text: "Determine areas prone to pooling to guide rock placement.",
  },
  {
    icon: Lotus,
    title: "Assess land slope",
    text: "The slope affects installation complexity and drainage efficiency.",
  },
  {
    icon: Schovel,
    title: "Aesthetic goals",
    text: "Select river rocks that complement existing landscape elements.",
  },
  {
    icon: Grass,
    title: "Budget and Timing",
    text: "Installation costs and timing can vary with scope and season.",
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
    question: "What is the cost of river rock installation?",
    answer:
      "Costs vary by area size and rock type; contact us for a quote.",
  },
  {
    question: "How long does the installation take?",
    answer:
      "Typically completed in a few days based on project size.",
  },
  {
    question: "Can river rocks improve my landscape's drainage?",
    answer:
      "Yes, they effectively manage water flow and prevent erosion.",
  },
  {
    question: "What maintenance do river rocks require?",
    answer:
      "Minimal maintenance; occasional cleaning keeps them looking great.",
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
        Description="At LJ & González, we enhance landscapes with expertly placed river rocks. Our installation improves drainage, prevents erosion, and adds natural beauty to your property."
        Title="Erosion threatens landscapes "
        Highlight="stabilize with river rock"
        Video="/videos/stock-river.webm"
      />

      <GoogleReviews />

      <VideoComponent
        imageSrc="/images/white-house.jpg"
        title="Protect your property with"
        highlight="natural elegance"
        paragraph="River rock installations control erosion and enhance drainage while adding a natural, aesthetic touch to your landscape. Our expert team ensures a durable, attractive solution."
        videoSrc="/videos/videodemoService.webm"
        videoPoster="/videos/poster/poster-river.webp"
      />

      <BenefitsService
        title="Benefits of"
        highlight="river rock installation"
        testimonials={testimonials}
        benefits={benefits.map((b) => ({
          ...b,
          icon: <b.icon />,
        }))}
      />

      <div className="section-2-container section reveal">
        <div className="section-2-box-text">
          <p className="heading-5">
            River rock installations offer beauty and functionality. Consider land slope, existing vegetation, and drainage needs before proceeding.
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
        icon={<RiverRock size="lg" />}
        title="Explore our River rock"
        highlight="transformations"
        paragraph="Discover how LJ & González have transformed landscapes with skillful river rock installations."
        images={galleryImages}
      />

      <CtaSection
        title=" Enhance your landscape with"
        highlight="River rock installations"
        description="Achieve effective drainage and natural beauty with LJ & González’s river rock expertise. Contact us for a consultation."
      />

      <Faq
        title="Frequently asked questions about"
        highlight="River rock installations"
      >
        {faqItems}
      </Faq>
    </>
  );
}

export default Design;
