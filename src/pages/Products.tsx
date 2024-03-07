import { FAQs, Footer, Navbar, ProductGrid, Standards } from '../components';

const Products = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <ProductGrid />
        <Standards />
        <FAQs />
        <Footer />
      </div>
    </>
  );
};

export default Products;
