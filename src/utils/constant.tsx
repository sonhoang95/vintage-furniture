import React, { Fragment } from 'react';

// imports for about
import vince from '../images/vince.jpg';
import michael from '../images/michael.jpg';
import jessie from '../images/jessie.jpg';
import jacob from '../images/jacob.jpg';
import ben from '../images/ben.jpg';
import ali from '../images/ali.jpg';

// Imports for home
import heroBcg from '../images/hero-bcg.jpg';
import reviewOne from '../images/review-1.jpg';
import reviewTwo from '../images/review-2.jpg';
import reviewThree from '../images/review-3.jpg';

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'products',
    url: '/products',
  },
  {
    id: 3,
    text: 'about us',
    url: '/about-us',
  },
  {
    id: 4,
    text: 'FAQs',
    url: '/faqs',
  },
];

export const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    icon: <FaInstagram />,
  },
  {
    id: 3,
    icon: <FaTwitter />,
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
  },
];

export const homeContent = {
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

export const aboutContent = {
  hero: {
    title: (
      <React.Fragment>
        What we <span className="text-orange-400">believe</span> in
      </React.Fragment>
    ),
    missionOne:
      'Our mission is to empower businesses to achieve their full potential by creating top-quality digital products, while fostering great relationships along the way.',
    missionTwo:
      'Our vision is a world where great user experience is the norm, not the exception, inspiring businesses and people to be at their best.',
  },
  values: {
    title: 'Our values',
    details: [
      {
        heading: 'Passion never fails',
        text: 'Great things are only achievable when you love what you do.',
      },
      {
        heading: 'People come first',
        text: 'Happy clients and unhappy team? No, not here. Not with us.',
      },
      {
        heading: 'Impossible is nothing',
        text: "There's no such thing as limits. They are in your brain - nowhere else.",
      },
      {
        heading: "We're not executants",
        text: "We're part of the same team. We work with you, not for you.",
      },
      {
        heading: 'Every pixel matters',
        text: 'We strive to do things of which we are proud to say: "We have done this!"',
      },
      {
        heading: "Don't take yourself...",
        text: "...too seriously. Have fun, otherwise, it's not worth it.",
      },
    ],
  },
  team: {
    title: 'Our team',
    members: [
      { name: 'Michael Stevens', title: 'Founder, CEO', img: michael },
      { name: 'Ben Hansen', title: 'Product Manager', img: ben },
      { name: 'Ali Gomes', title: 'Front-end Developer', img: ali },
      { name: 'Jacob Willis', title: 'Back-end Developer', img: jacob },
      { name: 'Vince Watson', title: 'Product Designer', img: vince },
      { name: 'Jessie Walker', title: 'UX Designer', img: jessie },
    ],
  },
};

export const faqContent = {
  title: 'FAQs',
  text: "Quality is at the heart of everything we do, whether it's about the eco friendly materials we are using or the service we provide",
  accordions: [
    {
      question: 'How can I get a Price List or other literature?',
      answer:
        'Authorized dealers can request literature via e-mail, fax, or phone from Customer Service. If you are not an authorized Indiana Furniture Dealer, you should contact your local Rep using the information on the Rep Locator via this website.',
    },
    {
      question: 'Can my order drop ship to my customer?',
      answer:
        "You can specify a drop ship to any location within the continental United States that has a dock, can receive a 53' trailer and is not a residential area. Please include a phone number as our carrier will call prior to delivery.",
    },
    {
      question: 'What is the warranty on your products?',
      answer:
        'Casegood and Seating products carry a 12 year limited warranty; some exclusions apply. See the warranty page of each Price List for details.',
    },
    {
      question: 'Is there a freight charge on my order?',
      answer:
        'Shipments totaling less than $2000 (net value, product only) will be assessed a small order fee of $200 net per shipment.  This fee is waived for items shipped by small parcel carrier such as UPS.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'All orders are subjected to cancellation within 30 days of purchase with full refund by Vintage Furniture.',
    },
  ],
};

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
