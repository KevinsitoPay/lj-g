import GoogleReviews from "@/UI/GeneralComponents/GoogleReviews";
export const metadata = {
  title: 'How It Works',
  description: 'How the application works and its features',
  keywords: 'how it works, application guide',
}

function Howitworks() {
  return (
    <div className="how-it-works-container">
      <h1>How It Works</h1>
      <GoogleReviews />
    </div>
  )
}
export default Howitworks;