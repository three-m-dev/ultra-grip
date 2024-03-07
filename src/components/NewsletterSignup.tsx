const NewsletterSignup = () => {
  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-md sm:text-center'>
          <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Join Our Mailing List</h2>
          <p className='mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl'>
            Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with
            your email.
          </p>
          <form action='#'>
            <div className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'>
              <div className='relative w-full'>
                <label
                  htmlFor='email'
                  className='hidden mb-2 text-sm font-medium text-gray-900'>
                  Email address
                </label>
                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <svg
                    className='w-5 h-5 text-gray-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                  </svg>
                </div>
                <input
                  className='block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded border-2 border-gray-300 sm:rounded-none sm:rounded-l focus:border-primary outline-none'
                  placeholder='Enter your email'
                  type='email'
                  id='email'
                  required
                />
              </div>
              <div>
                <button
                  type='submit'
                  className='text-white bg-primary hover:bg-white hover:text-primary border-2 border-primary transition ease-in-out duration-300 focus:outline-none rounded px-3 py-1.5 text-center flex items-center uppercase font-semibold sm:rounded-l-none'>
                  Subscribe
                </button>
              </div>
            </div>
            <div className='mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer'>
              We care about the protection of your data.{' '}
              <a
                href='#'
                className='font-medium text-primary-600 dark:text-primary-500 hover:underline'>
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
