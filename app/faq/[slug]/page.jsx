import faq from '../../../data/faq.json';
import ArrowRight from '@/UI/Icons/ArrowRight';
import './FaqTemplate.scss';
import LandLeveling from '@/UI/Icons/LandLeveling';
import Mulch from '@/UI/Icons/Mulch';
import Plants from '@/UI/Icons/Plants';
import Grass from '@/UI/Icons/Grass';
import RiverRock from '@/UI/Icons/RiverRock';
import Wall from '@/UI/Icons/Wall';
import Irrigation from '@/UI/Icons/Irrigation';
import Link from 'next/link';
import Lotus from '@/UI/Icons/Lotus';
import Schovel from '@/UI/Icons/Shovel';

export const metadata = {
  title: 'Faq',
  description: 'This page provides information about frequently asked questions',
  keywords: 'Faq, frequently asked questions, help',
};

function Faqtemplate({ params }) {
  const faqItem = faq.find(item => item.slug === params.slug);

  if (!faqItem) {
    return <p>FAQ not found.</p>;
  }

  return (
    <div className="Faqtemplate-container">
      <div className="content-faq">
      <div className="breadcrumb">
        <a href="/faq">Frequently Asked Questions</a> 
        <ArrowRight size="sm" /> 
        <span>{faqItem.title} <span className="highlight"> {faqItem.highlight} </span> </span>
      </div>
      <h1>{faqItem.title} <span className="highlight">{faqItem.highlight}</span></h1>
      <p>{faqItem.abstract}</p>
      <img src={faqItem.image} alt={faqItem.title} />
      <div className="faq-body">
        {faqItem.body.map((element, index) => {
          if (element.type === "image") {
            return <img key={index} src={element.src} alt={element.alt} />;
          } else if (element.type === "text") {
            return <div key={index} dangerouslySetInnerHTML={{ __html: element.content }} />;
          }
          return null;
        })}
      </div>
      </div>
      <div className="sidebar-faq">
        <div className="sidebar-about">
          <h6><Schovel /> About <span className="highlight">LJ&G</span></h6>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.</p>
        </div>
        <div className="sidebar-services">
          <h6><Lotus /> Our <span className="highlight">services</span></h6>
          <Link href="/land-leveling" className="service-link">
             <p><LandLeveling size='sm' /> Land Leveling</p>
          </Link>
          <Link href="/mulch" className="service-link">
            <p> <Mulch size='sm' />  Mulch Applications</p>
          </Link>
          <Link href="/functional-plants" className="service-link">
             <p><Plants size='sm' /> Functional Plants</p>
          </Link>
          <Link href="/soil-installation" className="service-link">
             <p><Grass size='sm' /> Soil Installation</p>
          </Link>
          <Link href="/river-rock" className="service-link">
             <p><RiverRock size='sm' /> River Rock Installation</p>
          </Link>
          <Link href="/wall" className="service-link">
             <p> <Wall size='sm' /> Wall and Retaining installation</p>
          </Link>
          <Link href="/irrigation" className="service-link">
             <p><Irrigation size='sm' /> Irrigation System Installation</p>
          </Link>
      </div>
      </div>

    </div>
  );
}

export default Faqtemplate;