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
import Irrigation from "@/UI/Icons/Irrigation";

export const metadata = {
  title: "Irrigation system installation	 | LJ & Gonzalez Landscaping",
  description:
    "At LJ & González, we install efficient irrigation systems to conserve water, optimize growth, and maintain lush landscapes.",
  keywords: "Irrigation system installation	",
  openGraph: {
    title: "Irrigation system installation	 | LJ & Gonzalez Landscaping",
    description:
      "Our land leveling service provides homeowners with a smooth and even lawn, perfect for outdoor activities and entertainment. Learn more about our land leveling services and how we can help you achieve your dream lawn.",
    url: "https://www.ljandgonzalez.com/irrigation-system-installation",
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
    canonical: "https://www.ljandgonzalez.com/irrigation-system-installation",
  },
};

const serviceName = "Irrigation system installation	";

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
    title: "Time",
    highlight: "savings",
    text: "Automate your watering schedule, freeing up valuable time for other activities.",
  },
  {
    image: "/images/house-gray.jpg",
    icon: Grading,
    title: "Water",
    highlight: "efficiency",
    text: "Systems minimize wastage and provide precise watering, conserving resources.",
  },
  {
    image: "/images/house-footer.jpg",
    icon: Schovel,
    title: "Healthier",
    highlight: "Plants",
    text: "Ensure consistent hydration for lush, vibrant gardens all year round.",
  },
];

const considerationItems = [
  {
    icon: Leaf,
    title: "Garden size",
    text: "Larger areas may need more complex systems for effective coverage.",
  },
  {
    icon: Lotus,
    title: "Current methods",
    text: "Review existing manual watering efforts that could be automated.",
  },
  {
    icon: Schovel,
    title: "Budget and timing	",
    text: "Installation complexity affects cost and timeline, so plan accordingly.",
  },
  {
    icon: Grass,
    title: "Water needs",
    text: "Understand plant-specific requirements to optimize system settings.",
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
    question: "What is the cost of irrigation system installation?",
    answer:
      "Costs vary depending on system type and area; contact us for a precise quote.",
  },
  {
    question: "How long does the installation process take?",
    answer:
      "Typically a few days, depending on garden size and system complexity.",
  },
  {
    question: "Can irrigation systems reduce my water bill?",
    answer:
      "Yes, they are designed to water efficiently, reducing overall usage.",
  },
  {
    question: "How often should the system be maintained?",
    answer:
      "Regularly check system function seasonally to ensure optimal performance.",
  },
  {
    question: "Do you offer customization for different plant types?",
    answer:
      "Absolutely, we tailor systems to meet the specific needs of your plants.",
  }
];

function Design() {
  return (
    <>
      <ServicesHeroSectionVideo
        ServiceName={
          <span className="flex items-center gap-2">
            <Irrigation size="sm" /> {serviceName}
          </span>
        }
        Description="LJ & González offers precision irrigation system installations, ensuring even water distribution for lush landscapes. Save time, water, and enhance garden health with our expert solutions."
        Title="Inconsistent watering wastes resources "
        Highlight="ensure efficient irrigation"
        Video="/videos/stock-irrigation.webm"
      />

      <GoogleReviews />

      <VideoComponent
        imageSrc="/images/white-house.jpg"
        title="Optimize your watering"
        highlight="maximize your garden"
        paragraph="An efficient irrigation system conserves water and nurtures plant growth. LJ & González provide tailored solutions to keep your landscape thriving with minimal effort."
        videoSrc="/videos/videodemoService.webm"
        videoPoster="/videos/poster/poster-irrigation.webp"
      />

      <BenefitsService
        title="Benefits of Irrigation"
        highlight="system installation"
        testimonials={testimonials}
        benefits={benefits.map((b) => ({
          ...b,
          icon: <b.icon />,
        }))}
      />

      <div className="section-2-container section reveal">
        <div className="section-2-box-text">
          <p className="heading-5">
            Installing an irrigation system can transform your garden's health and efficiency. Assess your garden’s size, water needs, current watering methods, and future landscaping plans to ensure the system meets your long-term goals effectively.
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
        icon={<Irrigation size="lg" />}
        title="Explore our irrigation system"
        highlight="solutions"
        paragraph="View the innovative irrigation systems installed by LJ & González that ensure healthy, thriving landscapes."
        images={galleryImages}
      />

      <CtaSection
        title="Streamline your watering with"
        highlight="expert irrigation systems"
        description="Conserve water, save time, and enhance garden health with LJ & González’s custom irrigation solutions. Contact us today!"
      />

      <Faq
        title="Frequently asked questions about"
        highlight="Irrigation system installation."
      >
        {faqItems}
      </Faq>
    </>
  );
}

export default Design;
