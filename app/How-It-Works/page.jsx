import ServicesHeroSection from "@/UI/GeneralComponents/ServicesHeroSection";
import DesignContent from "./DesignContent";

export const metadata = {
  title: "Design | LJ & Gonzalez Landscaping",
  description: "How the application works and its features",
  keywords: "how it works, application guide",
  openGraph: {
    title: "Design | LJ & Gonzalez Landscaping",
    description: "How the application works and its features",
    url: "https://www.ljandgonzalez.com/design",
  },
  canonical: "https://www.ljandgonzalez.com/design",
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
        Title="This is the text "
        Highlight="and this is the highlight."
      />
      <DesignContent />
    </>
  );
}
