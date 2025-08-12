import CtaSection from "@/UI/GeneralComponents/CtaSection";

export const metadata = {
  title: 'Contractors',
  description: 'How the application works and its features',
  keywords: 'how it works, application guide',
}

function Contractors() {
  return (
    <div>

    <div className="contractors-container">
      <h1>Contractors</h1>
    </div>
    <CtaSection title="Adress pain point" description="Book your first visit today. Our consultation is totally free and our promise is that after our visit You will have a clearer plan for Your garden." />
    </div>
  )
}
export default Contractors;