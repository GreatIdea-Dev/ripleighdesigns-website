import Heading from '@/components/Heading';
import ServicesCard from '@/components/ServicesCard';

const services = [
  {
    title: 'Graphic Design',
    description: 'We design beautiful logos, posters, and more.',
    features: ['Custom designs', 'High-quality images', 'Print-ready files'],
    price: '399',
  },
  {
    title: 'Custom Merchandising',
    description: 'We design beautiful logos, posters, and more.',
    features: ['Custom designs', 'High-quality images', 'Print-ready files'],
    price: '399',
  },
  {
    title: 'T-Shirt Printing',
    description: 'We design beautiful logos, posters, and more.',
    features: ['Custom designs', 'High-quality images', 'Print-ready files'],
    price: '399',
  },
  {
    title: 'Custom Artwork',
    description: 'We design beautiful logos, posters, and more.',
    features: ['Custom designs', 'High-quality images', 'Print-ready files'],
    price: '399',
  },
  {
    title: 'Photography',
    description: 'We design beautiful logos, posters, and more.',
    features: ['Custom designs', 'High-quality images', 'Print-ready files'],
    price: '399',
  },
];

export default function Services() {
  return (
    <main>
      <Heading
        title='Our Services'
        tophat='What we offer'
        blurb='We offer a variety of services to help you with your business needs.'
      />
      {services.map((service) => (
        <ServicesCard key={service.title} {...service} />
      ))}
    </main>
  );
}
