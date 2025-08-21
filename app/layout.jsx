"use client"; 

import { usePathname } from "next/navigation";
import '../Styles/GlobalStyles.scss'
import Footer from "@/UI/GeneralComponents/Footer"



export default function RootLayout({ children }) {

  const pathname = usePathname();

  return (

    <html lang="en">
      <head></head>
      <body>

        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>

  )

}

