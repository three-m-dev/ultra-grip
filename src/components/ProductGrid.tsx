import { Card } from '.';

const ProductGrid = () => {
  const products = [
    {
      title: 'BALL-GRIP™ PULL DOWN POWER CHUCK',
      imageOne: '',
      imageTwo: '',
    },
    {
      title: 'SLIDING WEDGE CHUCK',
      imageOne: '',
      imageTwo: '',
    },
    {
      title: 'ULTRA-LOCK COLLET ARBORS',
      imageOne: '',
      imageTwo: '',
    },
    {
      title: 'COLLET CHUCK',
      imageOne: '',
      imageTwo: '',
    },
    {
      title: 'DIAPHRAGM CHUCK',
      imageOne: '',
      imageTwo: '',
    },
    {
      title: 'FACE CLAMPING CHUCK',
      imageOne: '',
      imageTwo: '',
    },
    {
      title: 'SLIDING JAW CHUCK',
      imageOne: '',
      imageTwo: '',
    },
    {
      title: 'COUNTER CENTRIFUGAL SLIDING JAW CHUCK',
      imageOne: '',
      imageTwo: '',
    },
    {
      title: 'NON DEFORMING PIN ARBOR',
      imageOne: '',
      imageTwo: '',
    },
    {
      title: 'HOBBING & SHAVING ARBORS',
      imageOne: '',
      imageTwo: '',
    },
    {
      title: 'RETRACTABLE DRIVER CHUCK',
      imageOne: '',
      imageTwo: '',
    },
    {
      title: 'ACCESSORIES',
      imageOne: '',
      imageTwo: '',
    },
  ];

  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Products We Build</h2>
          <p className='font-light text-gray-500 lg:mb-16 sm:text-xl'>Catch up on our latest news and insights.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
          {products.map((product) => (
            <Card
              title={product.title}
              imageOne={product.imageOne}
              imageTwo={product.imageTwo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
