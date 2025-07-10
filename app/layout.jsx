import Navbar from "../UI/GeneralComponents/Navbar"
import '../Styles/GlobalStyles.scss'
 function RootLayout({ children }) {



  return (

    <html lang="en">
      <head>
      </head>
      <body>
        <Navbar />
        {children}
        <footer>
        </footer>
      </body>
    </html>

  )

}

export default RootLayout