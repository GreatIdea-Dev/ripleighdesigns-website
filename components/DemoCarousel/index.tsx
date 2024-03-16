const designs = [
  {
    id: 1,
    title: 'Thin Blue Line Flag Keychain',
    href: '/portfolio',
    imageUrl: '/keychain.jpeg',
  },
  {
    id: 2,
    title: 'Camping Shirt',
    href: '/portfolio',
    imageUrl: '/camping-shirt.jpeg',
  },
  {
    id: 3,
    title: 'Lineman Flag Lanyard',
    href: '/portfolio',
    imageUrl: '/lanyard.jpeg',
  },
  {
    id: 4,
    title: 'MS Shirt',
    href: '/portfolio',
    imageUrl: '/ms-shirt.jpeg',
  },
  {
    id: 5,
    title: 'Let Them Shirt',
    href: '/portfolio',
    imageUrl: '/let-them-shirt.jpeg',
  },
  {
    id: 6,
    title: 'Lemon Soap',
    href: '/portfolio',
    imageUrl: '/lemon-soap.jpeg',
  },
];

export default function DemoCarousel() {
  return (
    <div className='relative isolate'>
      <div className='px-6 pb-24 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl mx-auto text-center pb-10'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Sample Designs
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>
            Checkout a selection of our favorite designs below!
          </p>
        </div>
        <div className='flow-root mt-4'>
          <div className='-my-2'>
            <div className='box-content relative py-2 overflow-x-auto h-[425px]'>
              <div className='absolute flex px-4 space-x-8 sm:px-6 lg:px-8 '>
                {designs.map((design) => (
                  <article
                    key={design.id}
                    className='w-[300px] relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'
                  >
                    <picture>
                      <img
                        src={design.imageUrl}
                        alt=''
                        className='absolute inset-0 -z-10 h-full w-full object-cover'
                      />
                    </picture>
                    <div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
                    <div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />

                    <div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>
                      <div className='-ml-4 flex items-center gap-x-4'>
                        <svg
                          viewBox='0 0 2 2'
                          className='-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50'
                        >
                          <circle cx={1} cy={1} r={1} />
                        </svg>
                      </div>
                    </div>
                    <h3 className='mt-3 text-lg font-semibold leading-6 text-white'>
                      <a href={design.href}>
                        <span className='absolute inset-0' />
                        {design.title}
                      </a>
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
