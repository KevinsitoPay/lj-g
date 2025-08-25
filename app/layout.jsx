"use client"; 

import { usePathname } from "next/navigation";
import Navbar from "../UI/GeneralComponents/Navbar"
import '../Styles/GlobalStyles.scss'
import Footer from "@/UI/GeneralComponents/Footer"



export default function RootLayout({ children }) {

  const pathname = usePathname();

  const withNavbar = pathname !== "/";
  
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

