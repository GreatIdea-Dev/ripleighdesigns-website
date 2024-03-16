export default function CTA() {
  return (
    <div className='bg-violet-100'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
        <div>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Ready to dive in?
          </h2>
          <p className='text-2xl font-semibold tracking-tight text-gray-900 sm:text-xl'>
            Give us a shout and let us bring your ideas to life!
          </p>
        </div>
        <div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
          <a
            href='/contact'
            className='rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600'
          >
            Contact Us
          </a>
          <a href='/services' className='text-sm font-semibold leading-6 text-gray-900'>
            View Services <span aria-hidden='true'>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
