import Burger from "@/UI/Icons/Burger";

export const metadata = {
  title: 'About Us',
  description: 'This page provides information about our company and team',
  keywords: 'About Us, company information, team',
}

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us <Burger size="xl"/></h1>
      
      <h2>Welcome to Our Company</h2>
      <p>Welcome to our company! We are dedicated to providing the best services in the industry.</p>
    </div>
  ); 
}
export default AboutUs;