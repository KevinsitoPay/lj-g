import GoogleReviews from "@/UI/GeneralComponents/GoogleReviews";
import ServicesHeroSection from "@/UI/GeneralComponents/ServicesHeroSectionVideo";

import "./service.scss";
import LandLeveling from "@/UI/Icons/LandLeveling";

export const metadata = {
  title: "Privacy Policy | LJ & Gonzalez Landscaping",
  description:
    "Read LJ & Gonzalez Landscaping's privacy policy, which outlines how we collect, use, and protect the personal information of our customers.",
  keywords: "privacy policy",
  openGraph: {
    title: "Privacy Policy | LJ & Gonzalez Landscaping",
    description:
      "Read LJ & Gonzalez Landscaping's privacy policy, which outlines how we collect, use, and protect the personal information of our customers.",
    url: "https://www.ljandgonzalez.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    noarchive: true,
  },
  canonical: "https://www.ljandgonzalez.com/privacy-policy",
};

const serviceName = "Land Leveling";

function Design() {
  return (
    <>
      <ServicesHeroSection
        ServiceName={
          <span className="flex items-center gap-2">
            <LandLeveling size="sm" /> Privacy policy
          </span>
        }
        Description="Learn more about how we protect your personal information."
        Title="At LJ & Gonzalez,"
        Highlight="we respect your privacy."
        Background="landleveling-bg"
      />

      <GoogleReviews />

      <div className="section privacy-policy">
        <div className="content">
          <p>
            At LJ&amp;Gonzalez, we respect your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy explains what information we collect, how we use it, and your
            choices regarding that information that we collect.
          </p>

          <br />

          <h4>1. Information We Collect</h4>
          <p>
            We only collect the information that you voluntarily provide to us
            through our forms, including:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address</li>
          </ul>
          <p>
            We do not collect additional personal data, track users, or use
            cookies for tracking purposes.
          </p>

          <br />

          <h4>2. How We Use Your Information</h4>
          <p>We may use the information you provide to:</p>
          <ul>
            <li>Respond to your inquiries</li>
            <li>Provide our services</li>
            <li>
              Communicate with you regarding your requests or our business
            </li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or share your information
            with third parties for marketing purposes.
          </p>

          <br />

          <h4>3. Data Protection</h4>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, please note
            that no method of online transmission or storage is 100% secure.
          </p>

          <br />

          <h4>4. Your Choices</h4>
          <p>You may contact us at any time to:</p>
          <ul>
            <li>
              Request access to the personal information you have provided
            </li>
            <li>Request corrections or updates to your information</li>
            <li>
              Request deletion of your personal information from our records
            </li>
          </ul>

          <br />

          <h4>5. Changes to This Policy</h4>
          <p>
            We may update this Privacy Policy from time to time. If we make
            significant changes, we will update the effective date above and
            post the revised policy on this page.
          </p>

          <br />
          <h4>6. Contact Us</h4>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>

          <p>
            LJ & Gonzalez Landscaping
            <br />
            123 Main Street
            <br />
            City, State 12345
            <br />
            Phone: (123) 456-7890
            <br />
            Email: 2H4fV@example.com
          </p>

          <br />
        </div>
      </div>
    </>
  );
}

export default Design;
