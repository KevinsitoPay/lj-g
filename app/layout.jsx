"use client";

import "../Styles/GlobalStyles.scss";
import dynamic from "next/dynamic";
import ScrollAnimations from "@/UI/GeneralComponents/ScrollAnimations";
import PageFade from "@/UI/GeneralComponents/PageFade";

//

const Footer = dynamic(() => import("@/UI/GeneralComponents/Footer"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "500px" }}></div>,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <PageFade>
          <ScrollAnimations />
          {children}
        </PageFade>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
