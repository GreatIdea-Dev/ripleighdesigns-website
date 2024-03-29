interface IFeature {
  name: string;
  description: string;
}

interface IPortfolioCardProps {
  name: string;
  heading: string;
  description: string;
  features: IFeature[];
  image: string;
}

export default function PortfolioCard({
  name,
  heading,
  description,
  features,
  image,
}: IPortfolioCardProps) {
  return (
    <div className='bg-white py-1'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <section
          aria-labelledby='features-heading'
          className='relative mx-auto mt-4 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none overflow-hidden'
        >
          <div className='aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16'>
            <picture>
              <img
                src={image}
                alt={name}
                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
              />
            </picture>
          </div>
          <div className='mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32'>
            <div className='lg:col-start-2'>
              <h2 id='features-heading' className='font-medium text-gray-500'>
                {name}
              </h2>
              <p className='mt-4 text-4xl font-bold tracking-tight text-gray-900'>{heading}</p>
              <p className='mt-4 text-gray-500'>{description}</p>
              <dl className='mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2'>
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className='font-medium text-gray-900'>{feature.name}</dt>
                    <dd className='mt-2 text-gray-500'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
