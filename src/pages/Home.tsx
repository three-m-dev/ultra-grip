import {
  BlogCTA,
  ContentOne,
  Customers,
  Footer,
  Hero,
  ImageMenu,
  Navbar,
  NewsletterSignup,
  ServicesOne,
} from '../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <Hero />
        <ServicesOne />
        <ContentOne />
        <Customers />
        <BlogCTA />
        <NewsletterSignup />
        <ImageMenu />
        <Footer />
      </div>
    </>
  );
};

export default Home;
