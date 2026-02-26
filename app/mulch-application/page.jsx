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
import Mulch from "@/UI/Icons/Mulch";

export const metadata = {
  title: "Mulch application | LJ & Gonzalez Landscaping",
  description:
    "At LJ & González, our mulch application enriches soil, retains moisture, and suppresses weeds, promoting a healthy landscape.",
  keywords: "Mulch application",
  openGraph: {
    title: "Mulch application | LJ & Gonzalez Landscaping",
    description:
      "Our land leveling service provides homeowners with a smooth and even lawn, perfect for outdoor activities and entertainment. Learn more about our land leveling services and how we can help you achieve your dream lawn.",
    url: "https://www.ljandgonzalez.com/mulch-application",
    images: [
      {
        url: "/videos/poster/poster-mulch.webp",
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
    canonical: "https://www.ljandgonzalez.com/mulch-application",
  },
};

const serviceName = "Mulch application";

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
    title: "Temperature",
    highlight: "control",
    text: "Regulates soil temperature, protecting plants from extreme weather conditions.",
  },
  {
    image: "/images/house-gray.jpg",
    icon: Grading,
    title: "Moisture",
    highlight: "retention",
    text: "Mulch helps retain soil moisture, reducing the need for frequent watering.",
  },
  {
    image: "/images/house-footer.jpg",
    icon: Schovel,
    title: "Weed",
    highlight: "suppression",
    text: "Suppressed weed growth keeps your garden tidy and reduces maintenance time.",
  },
];

const considerationItems = [
  {
    icon: Leaf,
    title: "Select the right mulch type",
    text: "Different plants benefit from specific mulch types; choose accordingly.",
  },
  {
    icon: Lotus,
    title: "Assess Mulch Depth",
    text: "Proper depth is essential; too much can suffocate plants, too little may be ineffective.",
  },
  {
    icon: Schovel,
    title: "Plan for Seasonal Changes",
    text: "Different seasons require different mulch adjustments for optimal results.",
  },
  {
    icon: Grass,
    title: "Consider Plant Types",
    text: "Some plants may need specific mulching approaches to thrive.",
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
    question: "What is the cost of mulch application?",
    answer:
      "Costs vary by garden size and mulch type; contact us for a quote.",
  },
  {
    question: "How often should mulch be reapplied?",
    answer:
      "Typically, once a year or when it’s decomposed significantly.",
  },
  {
    question: "Can mulch attract pests?",
    answer:
      "Quality mulch usually doesn’t, but routine checks are recommended.",
  },
  {
    question: "How thick should the mulch layer be?",
    answer:
      "Generally 2-4 inches thick, depending on plant and mulch type.",
  },
  { question: "What types of mulch do you recommend?",
    answer:
      "We recommend organic mulches like wood chips or bark for most gardens.",
  },
];

function Design() {
  return (
    <>
      <ServicesHeroSectionVideo
        ServiceName={
          <span className="flex items-center gap-2">
            <Mulch size="sm" /> {serviceName}
          </span>
        }
        Description="LJ & González provide expert mulch applications to retain soil moisture, suppress weeds, and enhance garden aesthetics. Our professionals ensure a healthy, vibrant landscape."
        Title="Weed growth harms plants "
        Highlight="protect with mulch"
        Video="/videos/stock-mulchapplication.webm"
      />

      <GoogleReviews />

      <VideoComponent
        imgSrc="/images/mulch-poster.webp"
        title="Enrich your soil and beautify"
        highlight="your garden"
        paragraph="Mulch application offers numerous benefits, from moisture retention to weed prevention. LJ & González apply mulch expertly to safeguard and enhance your garden landscape."
        videoSrc="/videos/videodemoService.webm"
        videoPoster="/videos/poster/poster-mulch.webp"
      />

      <BenefitsService
        title="Benefits of"
        highlight="Mulch application"
        testimonials={testimonials}
        benefits={benefits.map((b) => ({
          ...b,
          icon: <b.icon />,
        }))}
      />

      <div className="section-2-container section reveal">
        <div className="section-2-box-text">
          <p className="heading-5">
            Applying mulch can significantly enhance your garden, but it’s crucial to consider mulch type, garden layout, and plant needs. Understanding these factors ensures mulch is used effectively to improve plant health and garden appearance.
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
        icon={<Mulch size="lg" />}
        title="See our mulch application"
        highlight="artistry"
        paragraph="Discover how LJ & González transform gardens with strategic mulch application. Explore our gallery of stunning results."
        images={galleryImages}
      />

      <CtaSection
        title="Protect and enrich your"
        highlight="garden with mulch"
        description="Improve soil health and garden aesthetics with professional mulch application from LJ & González. Contact us today!"
      />

      <Faq
        title="Frequently asked questions about"
        highlight="Mulch application"
      >
        {faqItems}
      </Faq>
    </>
  );
}

export default Design;
