// MobileMenu.js
import { Link } from 'react-router-dom';

type Props = {
  toggleMenu: () => void;
};

const MobileMenu = (props: Props) => {
  return (
    <div className='fixed left-0 top-0 z-50 h-screen w-full overflow-y-auto bg-white flex flex-col'>
      <div className='flex w-full justify-end p-4'>
        <button
          onClick={props.toggleMenu}
          className='inline-flex items-center justify-center border-2 border-primary p-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none'>
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
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>

      <ul className='flex flex-col items-center'>
        <li className='mb-2'>
          <Link
            to='/'
            onClick={props.toggleMenu}
            className='text-2xl'>
            Home
          </Link>
        </li>
        <li className='mb-2'>
          <Link
            to='/about'
            onClick={props.toggleMenu}
            className='text-2xl'>
            About
          </Link>
        </li>
        <li className='mb-2'>
          <Link
            to='/products'
            onClick={props.toggleMenu}
            className='text-2xl'>
            Products
          </Link>
        </li>
        <li className='mb-2'>
          <Link
            to='/services'
            onClick={props.toggleMenu}
            className='text-2xl'>
            Services
          </Link>
        </li>
        <li className='mb-2'>
          <Link
            to='/careers'
            onClick={props.toggleMenu}
            className='text-2xl'>
            Careers
          </Link>
        </li>
        <li className='mb-2'>
          <Link
            to='/bulletin'
            onClick={props.toggleMenu}
            className='text-2xl'>
            Bulletin
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            className='text-white bg-primary hover:bg-white hover:text-primary border-2 border-primary transition ease-in-out duration-300 focus:outline-none px-3 py-1.5 text-center flex items-center uppercase font-semibold'>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
