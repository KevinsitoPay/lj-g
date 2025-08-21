export const metadata = {
  title: 'Faq',
  description: 'This page provides information about frequently asked questions',
  keywords: 'Faq, frequently asked questions, help',
}

function Faqtemplate( {params} ) {
  return (
    <div className="about-us-container">
      <h1> Faq template {params.faqId} </h1>
      
      <h2> in this page you can find the faq of your company</h2>
      <p>Welcome to our company! We are dedicated to providing the best services in the industry.</p>
    </div>
  ); 
}
export default Faqtemplate;