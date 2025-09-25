import ServicesHeroSection from "@/UI/GeneralComponents/ServicesHeroSection";
import DesignContent from "./DesignContent";

export const metadata = {
  title: "How-it-works | LJ & Gonzalez Landscaping",
  description: "How the application works and its features",
  keywords: "how it works, application guide",
  openGraph: {
    title: "How-it-works | LJ & Gonzalez Landscaping",
    description: "How the application works and its features",
    url: "https://www.ljandgonzalez.com/how-it-works",
  },
  canonical: "https://www.ljandgonzalez.com/how-it-works",
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    noarchive: true,
  },
};

export default function DesignPage() {
  return (
    <>
      <ServicesHeroSection
        Background={"how-it-works-bg"}
        Description="Discover how our seamless process at LJ & Gonzalez Landscaping transforms your outdoor space from start to finish. We begin with a personalized consultation to understand your vision and assess your site. "
        Title="Explore our efficient process "
        Highlight="from start to finish."
      />
      <DesignContent />
    </>
  );
}
