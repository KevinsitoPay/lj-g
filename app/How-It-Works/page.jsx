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
        Description="Lorem ipsum et al sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet."
        Title="Explore our efficient process "
        Highlight="from start to finish."
      />
      <DesignContent />
    </>
  );
}
