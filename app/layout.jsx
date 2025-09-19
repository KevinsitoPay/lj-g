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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:initial,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
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
