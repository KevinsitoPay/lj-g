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

export const metadata = {
  title: "Sod installation | LJ & Gonzalez Landscaping",
  description:
    "At LJ & González, we provide professional sod installation for a vibrant, even lawn, enhancing your property's aesthetics and value.",
  keywords: "River rock installation",
  openGraph: {
    title: "River rock installation | LJ & Gonzalez Landscaping",
    description:
      "Our land leveling service provides homeowners with a smooth and even lawn, perfect for outdoor activities and entertainment. Learn more about our land leveling services and how we can help you achieve your dream lawn.",
    url: "https://www.ljandgonzalez.com/sod-installation",
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
      alternates: {
    canonical: "https://www.ljandgonzalez.com/sod-installation",
  },
};

const serviceName = "Sod installation	";

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
    title: "Instant",
    highlight: "lawn",
    text: "Achieve a fully green and lush lawn immediately after installation.",
  },
  {
    image: "/images/house-gray.jpg",
    icon: Grading,
    title: "Erosion",
    highlight: "control",
    text: "Sod stabilizes soil quickly, preventing erosion and protecting your landscape.",
  },
  {
    image: "/images/house-footer.jpg",
    icon: Schovel,
    title: "Increased",
    highlight: "curb appeal",
    text: "A fresh, green lawn significantly enhances the aesthetic value of your property.",
  },
];

const considerationItems = [
  {
    icon: Leaf,
    title: "Soil condition",
    text: "Ensure your soil is healthy to support new sod growth.",
  },
  {
    icon: Lotus,
    title: "Irrigation needs",
    text: "Consistent watering is crucial for sod to establish roots.",
  },
  {
    icon: Schovel,
    title: "Consider timing",
    text: "Installing sod during cooler months can promote better root growth.",
  },
  {
    icon: Grass,
    title: "Budget and Timing",
    text: "Installation costs and timing may vary; plan according to your schedule and budget.",
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
    question: "What is the cost of sod installation?",
    answer:
      "Costs vary by lawn size and sod type; contact us for an estimate.",
  },
  {
    question: "How long does it take for sod to root?",
    answer:
      "Typically 2-3 weeks under ideal watering and care conditions.",
  },
  {
    question: "How soon can I use my lawn after sod installation?",
    answer:
      "Light use is typically okay after about 3 weeks, once the sod roots well.",
  },
  {
    question: "What maintenance does new sod require?",
    answer:
      "Regular watering and mowing are essential for healthy sod establishment.",
  },
];

function Design() {
  return (
    <>
      <ServicesHeroSectionVideo
        ServiceName={
          <span className="flex items-center gap-2">
            <Grass size="sm" /> {serviceName}
          </span>
        }
        Description="LJ & González deliver top-quality sod installations for instant, lush lawns. Our expertise ensures seamless integration and long-lasting beauty for your outdoor spaces."
        Title="Patchy lawns decrease curb appeal "
        Highlight="achieve lush coverage"
        Video="/videos/stock-sodinstallation.webm"
      />

      <GoogleReviews />

      <VideoComponent
        imageSrc="/images/white-house.jpg"
        title="Transform your lawn with fresh"
        highlight="green sod"
        paragraph="Sod installation provides an immediate, flawless lawn. LJ & González use superior techniques to ensure healthy, green grass with minimal downtime."
        videoSrc="/videos/videodemoService.webm"
        videoPoster="/videos/poster/poster-sod.webp"
      />

      <BenefitsService
        title="Benefits of"
        highlight="sod installation"
        testimonials={testimonials}
        benefits={benefits.map((b) => ({
          ...b,
          icon: <b.icon />,
        }))}
      />

      <div className="section-2-container section reveal">
        <div className="section-2-box-text">
          <p className="heading-5">
            Laying sod can instantly transform your yard, but it’s important to consider factors such as soil preparation, irrigation needs, and the timing of installation. Proper understanding of these elements ensures a smooth transition to a vibrant lawn, enhancing both beauty and functionality.
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
        icon={<Grass size="lg" />}
        title="See our sod installation"
        highlight="transformations"
        paragraph="Explore the beautiful lawns created by LJ & González through expert sod installation."
        images={galleryImages}
      />

      <CtaSection
        title="Achieve a flawless lawn with"
        highlight="our sod expertise"
        description="Instant beauty and immediate satisfaction with LJ & González’s professional sod installation. Contact us today!"
      />

      <Faq
        title="Frequently asked questions about"
        highlight="Sod Installation"
      >
        {faqItems}
      </Faq>
    </>
  );
}

export default Design;
