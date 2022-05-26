import {
  Contact,
  FeaturedProducts,
  Hero,
  Missions,
  Reviews,
} from '../components';
import heroBcgTwo from '../images/hero-bcg-2.jpeg';
import { homeContent, reviews } from '../utils/constant';
import { Helmet } from 'react-helmet';

const Home = () => {
  const { hero, missions, contact } = homeContent;
  return (
    <>
      <Helmet>
        <title>Vintage Furniture | Home</title>
        <meta name="description" content="Welcome to Vintage Furniture" />
      </Helmet>
      <div className="container mx-auto px-8 lg:px-32">
        <Hero content={hero} />
        <div className="my-12 lg:my-24">
          <img src={heroBcgTwo} alt="furniture" />
        </div>
        <Missions {...missions} />
        <FeaturedProducts />
      </div>
      <Reviews reviews={reviews} />
      <Contact {...contact} />
    </>
  );
};

export default Home;
