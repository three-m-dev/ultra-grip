import { useEffect } from 'react';
import { CareerList, Footer, Navbar } from '../components';
import { useGetCareers } from '../hooks/useGetCareers';

const Careers = () => {
  const { getCareers, careers, error } = useGetCareers();

  useEffect(() => {
    getCareers();
  }, []);

  if (error) {
    console.log(error);
  }
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <CareerList careerListings={careers} />
        <Footer />
      </div>
    </>
  );
};

export default Careers;
