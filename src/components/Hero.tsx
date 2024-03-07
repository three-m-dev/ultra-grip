import { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const items = [
    {
      title: 'Precision at Every Scale',
      cta: 'Learn More',
      url: '/services',
      image: 'https://as1.ftcdn.net/v2/jpg/03/26/28/70/1000_F_326287003_HLZJZhT7l4v76OaqfMd1rjQDHldb0Wm8.jpg',
      alt: '',
      align: 'left',
    },
    {
      title: 'Innovative Solutions, Unmatched Quality',
      cta: 'Learn More',
      url: '/services',
      image: 'https://as2.ftcdn.net/v2/jpg/02/76/46/27/1000_F_276462792_C2d0t1ajrCdoBLG8jqXmqS9kqNqrbEbe.jpg',
      imagePosition: 'center',
      alt: '',
      align: 'right',
    },
    {
      title: 'Engineering Success Together',
      cta: 'Learn More',
      url: '/services',
      image:
        'https://www.sme.org/globalassets/sme.org/technologies/articles/2021/01---january/mod-workholding-lead-768x432.jpg',
      imagePosition: 'object-center',
      alt: '',
      align: 'left',
    },
  ];

  const handlePrevClick = () => {
    if (itemIndex === 0) {
      setItemIndex(items.length - 1);
    } else {
      setItemIndex(itemIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (itemIndex === items.length - 1) {
      setItemIndex(0);
    } else {
      setItemIndex(itemIndex + 1);
    }
  };

  return (
    <div className='relative flex h-[65vh] max-w-screen items-start sm:items-center justify-center'>
      <img
        src={items[itemIndex].image}
        alt={items[itemIndex].alt}
        className={`absolute z-0 h-full w-full object-cover ` + items[itemIndex].imagePosition}
      />
      <div className='absolute z-10 h-full w-full bg-black opacity-60'></div>

      <div className='relative z-20 mx-auto flex w-full max-w-screen-xl justify-center lg:justify-start mt-20'>
        <div
          className={`flex flex-col items-center gap-8 px-12 w-full sm:w-1/2 ${items[itemIndex].align === 'right' && 'lg:ml-auto'} ${
            items[itemIndex].align === 'center' && 'lg:mx-auto'
          }`}>
          <h1 className='text-4xl text-white sm:text-5xl font-bebas tracking-wider text-center'>
            {items[itemIndex].title}
          </h1>
          <Link
            to={items[itemIndex].url}
            className='text-white bg-transparent hover:bg-white hover:text-primary border-2 border-white transition ease-in-out duration-300 focus:outline-none px-3 py-1.5 text-center flex items-center uppercase font-semibold'>
            {items[itemIndex].cta}
          </Link>
        </div>
      </div>

      <button
        className='absolute left-0 top-1/2 z-30 -translate-y-1/2 bg-primary p-2.5 text-white opacity-50 transition-all duration-300 hover:opacity-100'
        onClick={handlePrevClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-5 w-5'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </button>
      <button
        className='absolute right-0 top-1/2 z-30 -translate-y-1/2 bg-primary p-2.5 text-white opacity-50 transition-all duration-300 hover:opacity-100'
        onClick={handleNextClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-5 w-5'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </button>

      <div className='absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 transform gap-3'>
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 border border-white transition-all duration-300 ${
              itemIndex === index ? 'bg-white' : 'bg-transparent hover:border-primary hover:bg-primary'
            }`}
            onClick={() => setItemIndex(index)}></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
