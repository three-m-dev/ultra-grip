import { FAQs, Footer, Navbar, ServiceGrid, Standards } from '../components';

const Services = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <ServiceGrid />
        <Standards />
        <FAQs />
        <Footer />
      </div>
    </>
  );
};

export default Services;
