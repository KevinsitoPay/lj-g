"use client"; 

import '../Styles/GlobalStyles.scss'
import Footer from "@/UI/GeneralComponents/Footer"



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

  )

}

