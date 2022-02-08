import { Hero } from '../components';
import heroBcg from '../images/hero-bcg.jpg';

const homeContent = {
  hero: {
    title: 'Each Project we develop is unique and personal',
    subTitle:
      'Vintage furniture is an elegant collections of furniture that has distinctive characters and contained dimensions.',
    highlights: [
      { number: '500', text: 'total products' },
      { number: '150', text: 'total crafters' },
      { number: '9.0/10', text: 'user satisfaction' },
    ],
    imgSrc: heroBcg,
    imgAlt: 'vintage armchair',
  },
};

const Home = () => {
  return (
    <div className="container mx-auto px-8 lg:px-32">
      <Hero content={homeContent.hero} />
    </div>
  );
};

export default Home;
