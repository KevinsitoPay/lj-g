import Navbar from "../UI/GeneralComponents/Navbar"
import '../Styles/GlobalStyles.scss'
import Footer from "@/UI/GeneralComponents/Footer"
 function RootLayout({ children }) {



  return (

    <html lang="en">
      <head>
      </head>
      <body>
        <Navbar />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>

  )

}

export default RootLayout