import Hero from '../components/Hero';
import heroBcg from '../images/hero-bcg.jpg';
import Layout from '../layout';

const homepageContent = {
  hero: {
    title: 'Each Project we develop is unique and personal',
    subTitle:
      'Vintage furniture is an elegant collections of furniture that has distinctive characters and contained dimensions.',
    highlights: [
      { number: '500', text: 'total products' },
      { number: '150', text: 'total crafters' },
      { number: '9.0/10', text: 'user satisfaction' },
    ],
    btnText: 'shop now',
    imgSrc: heroBcg,
    imgAlt: 'vintage armchair',
  },
};

const Home = () => {
  return <Hero content={homepageContent.hero} />;
};

export default Home;
