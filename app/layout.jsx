"use client"; 

import '../Styles/GlobalStyles.scss'
import Footer from "@/UI/GeneralComponents/Footer"
import ScrollAnimations from '../UI/GeneralComponents/ScrollAnimations';
import PageFade from '@/UI/GeneralComponents/PageFade';



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

