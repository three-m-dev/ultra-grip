import { Card } from '.';

const ServiceGrid = () => {
  const services = [
    {
      title: 'Engineering & Design',
      description: '',
      path: '/services/engineering-and-design',
      imageOne:
        'https://forum.langmuirsystems.com/uploads/db6772/original/3X/4/e/4e40068bfd33c48582022e2cf48f5d8b11de4084.jpeg',
      imageTwo: 'https://zeropointautomation.com/cdn/shop/collections/Dovetail_Product_Images.jpg?v=1694983980',
    },
    {
      title: 'Repairs & Rebuilds',
      description: '',
      path: '/services/repairs-and-rebuilds',
      imageOne: '/images/services/chuck_repair_before.jpg',
      imageTwo: '/images/services/chuck_repair_after.jpg',
    },
    {
      title: 'Scheduled Maintenance',
      description: '',
      path: '/services/scheduled-maintenance',
      imageOne: 'https://www.3erp.com/wp-content/uploads/2020/01/CNC-machine-1-1170x778.jpg',
      imageTwo: 'https://www.forkardt.com/wp-content/uploads/Forkardt_Service-500x500_3-465x465.jpg',
    },
  ];

  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Services We Offer</h2>
          <p className='font-light text-gray-500 lg:mb-16 sm:text-xl'>
            Discover our services designed for your success
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
          {services.map((service) => (
            <Card
              title={service.title}
              path={service.path}
              imageOne={service.imageOne}
              imageTwo={service.imageTwo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
