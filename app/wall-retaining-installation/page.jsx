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
import Wall from "@/UI/Icons/Wall";

export const metadata = {
  title: "Wall retaining installation | LJ & Gonzalez Landscaping",
  description:
    "At LJ & González, we construct durable retaining walls to prevent erosion, enhance stability, and elevate your landscape design.",
  keywords: "Wall retaining installation	",
  openGraph: {
    title: "Wall retaining installation	| LJ & Gonzalez Landscaping",
    description:
      "Our land leveling service provides homeowners with a smooth and even lawn, perfect for outdoor activities and entertainment. Learn more about our land leveling services and how we can help you achieve your dream lawn.",
    url: "https://www.ljandgonzalez.com/wall-retaining-installation",
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
  canonical: "https://www.ljandgonzalez.com/wall-retaining-installation",
};

const serviceName = "Wall retaining installation";

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
    title: "Improved Soil",
    highlight: "Stability",
    text: "Retaining walls prevent soil erosion and preserve your landscape’s integrity.",
  },
  {
    image: "/images/house-gray.jpg",
    icon: Grading,
    title: "Enhanced",
    highlight: "aesthetics",
    text: "Thoughtfully designed walls add dimension and visual appeal to your yard.",
  },
  {
    image: "/images/house-footer.jpg",
    icon: Schovel,
    title: "Increased",
    highlight: "value",
    text: "A well-installed retaining wall boosts curb appeal and property value.",
  },
];

const considerationItems = [
  {
    icon: Leaf,
    title: "Evaluate water runoff	",
    text: "Determine if your landscape suffers from water drainage issues affecting stability.",
  },
  {
    icon: Lotus,
    title: "Assess landscape design",
    text: "Consider how the wall will integrate with your existing landscape features.",
  },
  {
    icon: Schovel,
    title: "Budget planning	",
    text: "Plan your budget, considering material costs and complexity of the installation.",
  },
  {
    icon: Grass,
    title: "Timing the installation",
    text: "Consider seasonal factors to ensure ideal installation conditions.",
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
    question: "What materials do you use for retaining walls?",
    answer:
      "We use high-quality durable materials such as concrete, stone, and timber to ensure long-lasting strength and beauty.",
  },
  {
    question: "How long does the installation process take?",
    answer:
      "The timeline depends on the project size and complexity, but typically installations take between 1 to 2 weeks.",
  },
  {
    question: "Do I need a permit to install a retaining wall?",
    answer:
      "Permits may be required depending on the wall’s height and local regulations; we can guide you through the process.",
  },
  {
    question: "Can retaining walls help with my drainage issues?",
    answer:
      "Yes, properly designed retaining walls can significantly improve drainage and protect your landscape from erosion.",
  },
];

function Design() {
  return (
    <>
      <ServicesHeroSectionVideo
        ServiceName={
          <span className="flex items-center gap-2">
            <Wall size="sm" /> {serviceName}
          </span>
        }
        Description="At LJ & González, we expertly install retaining walls using durable materials and precise techniques. Our solutions prevent soil erosion, enhance landscape aesthetics, and increase property value, providing you with a sturdy and attractive outdoor space."
        Title="Shifting soil threatens foundations "
        Highlight="secure them with walls"
        Video="/videos/stock-river.webm"
      />

      <GoogleReviews />

      <VideoComponent
        imageSrc="/images/white-house.jpg"
        title="Stabilize your ground today for"
        highlight="a safer tomorrow"
        paragraph="Retaining wall installation is crucial to prevent soil erosion, manage water runoff, and enhance the beauty of your landscape. At LJ & González, we utilize quality materials and expert craftsmanship to deliver strong and reliable walls."
        videoSrc="/videos/videodemoService.webm"
        videoPoster="/videos/poster/poster-river.webp"
      />

      <BenefitsService
        title="Benefits of"
        highlight="Wall retaining installation"
        testimonials={testimonials}
        benefits={benefits.map((b) => ({
          ...b,
          icon: <b.icon />,
        }))}
      />

      <div className="section-2-container section reveal">
        <div className="section-2-box-text">
          <p className="heading-5">
            Installing a retaining wall can greatly enhance your landscape, offering stability, improved aesthetics, and increased property value. Before committing, assess your property’s needs, potential water runoff issues, the complexity of the landscape design, and budget considerations.
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
        icon={<Wall size="lg" />}
        title="Browse our recent projects in"
        highlight="retaining wall excellence"
        paragraph="Discover how LJ & González combines craftsmanship and innovation to deliver exceptional retaining wall projects that enhance both function and aesthetics."
        images={galleryImages}
      />

      <CtaSection
        title="Transform your landscape with"
        highlight="reliable retaining walls"
        description="Ensure your property’s safety and beauty with expertly installed retaining walls by LJ & González. Contact us now to secure your home against erosion and elevate its visual appeal. Let's craft the perfect solution for your outdoor space!"
      />

      <Faq
        title="Frequently asked questions about"
        highlight="Wall retaining installation"
      >
        {faqItems}
      </Faq>
    </>
  );
}

export default Design;
