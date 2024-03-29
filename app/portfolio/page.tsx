import Heading from '@/components/Heading';
import PortfolioCard from '@/components/PortfolioCard';

const projects = [
  {
    title: 'T-Shirts',
    heading: 'Beautiful, custom t-shirts for your team.',
    description: 'This is a description of project 1.',
    image: '/ms-shirt.jpeg',
    features: [
      {
        name: 'Material',
        description: 'Cotton',
      },
      {
        name: 'Color',
        description: 'Grey',
      },
      {
        name: 'Size',
        description: 'Medium',
      },
    ],
  },
  {
    title: 'Keychains',
    heading: 'Stunning, beatuiful keychains for your keys.',
    description: 'This is a description of project 2.',
    image: '/keychain.jpeg',
    features: [
      {
        name: 'Material',
        description: 'Leather',
      },
      {
        name: 'Design',
        description: 'Thin Blue Line',
      },
    ],
  },
  {
    title: 'Lanyards',
    heading: 'Stylish, custom lanyards.',
    description: 'This is a description of project 3.',
    image: '/lanyard.jpeg',
    features: [
      {
        name: 'Material',
        description: 'Plastic',
      },
      {
        name: 'Style',
        description: 'American Lineman Appreciation',
      },
      {
        name: 'Length',
        description: '7.5"',
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <main>
      <Heading
        title='Our Portfolio'
        tophat='A selection of our work'
        blurb='We have served several clients with a variety of projects. Here are some of our favorites.'
      />
      {projects.map((project) => (
        <PortfolioCard
          key={project.title}
          name={project.title}
          heading={project.heading}
          description={project.description}
          image={project.image}
          features={project.features}
        />
      ))}
    </main>
  );
}
