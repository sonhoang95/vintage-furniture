import React from 'react';
import { PageHero } from '../components';
import aboutBcg from '../images/about-bcg.jpeg';

const aboutContent = {
  title: 'What we believe in',
  missionOne:
    'Our mission is to empower businesses to achieve their full potential by creating top-quality digital products, while fostering great relationships along the way.',
  missionTwo:
    'Our vision is a world where great user experience is the norm, not the exception, inspiring businesses and people to be at their best.',
};

const About = () => {
  return (
    <main>
      <PageHero title="about us" />
      <div className="container mx-auto px-8 lg:px-32">
        <section className="flex justify-between items-center gap-32">
          <div>
            <h1 className="font-bold text-5xl mb-6">{aboutContent.title}</h1>
            <div className="space-y-8 text-lg leading-loose">
              <p>{aboutContent.missionOne}</p>
              <p>{aboutContent.missionTwo}</p>
            </div>
          </div>
          <div>
            <img src={aboutBcg} alt="team" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
