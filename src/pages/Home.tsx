import { Fragment } from 'react';
import {
  Contact,
  FeaturedProducts,
  Hero,
  Missions,
  Reviews,
} from '../components';
import heroBcg from '../images/hero-bcg.jpg';
import heroBcgTwo from '../images/hero-bcg-2.jpeg';
import reviewOne from '../images/review-1.jpg';
import reviewTwo from '../images/review-2.jpg';
import reviewThree from '../images/review-3.jpg';

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
  missions: {
    title: 'There are many different types of chairs depending on its usage',
    messages: [
      {
        id: 1,
        title:
          'We are the benchmark in design and manufacture of furniture and space.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 2,
        title:
          'We select furniture, materials, finishes colors and textures to design unique spaces that adapt to your lifestyle',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
      },
    ],
  },
  contact: {
    title: 'Join our newsletter for 10$ off',
    text: (
      <Fragment>
        We will email you a $10 voucher off your first order over $50. <br />
        By subscribing you agree to our Terms and Conditions and Privacy and
        Cookies Policy
      </Fragment>
    ),
  },
};

export const reviews = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ex! Eum accusantium voluptate, suscipit numquam laboriosam aliquam tempora at iure?',
    image: reviewOne,
    name: 'Nessi',
    location: 'Brooklyn, NY',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta non nihil hic natus asperiores vitae exercitationem beatae quae sapiente corrupti nesciunt explicabo saepe, aliquid voluptas?',
    image: reviewTwo,
    name: 'David',
    location: 'Los Angeles, CA',
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed obcaecati deserunt quae delectus suscipit?',
    image: reviewThree,
    name: 'Sean',
    location: 'Cincinnati, OH',
  },
];

const Home = () => {
  const { hero, missions, contact } = homeContent;
  return (
    <>
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
