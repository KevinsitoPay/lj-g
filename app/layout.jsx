"use client"; 

import { usePathname } from "next/navigation";
import '../Styles/GlobalStyles.scss'
import Footer from "@/UI/GeneralComponents/Footer"
import Navbar from "@/UI/GeneralComponents/Navbar"
import { withNavbar } from "@/UI/GeneralComponents/Navbar"



export default function RootLayout({ children }) {

  const pathname = usePathname();

  return (

    <html lang="en">
      <head></head>
      <body>
        {withNavbar && <Navbar />}
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>

  )

}

