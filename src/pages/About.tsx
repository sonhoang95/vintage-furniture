import React from 'react';
import { PageHero } from '../components';
import aboutBcg from '../images/about-bcg.jpeg';
import { aboutContent } from '../utils/constant';

const About = () => {
  const { hero, values, team } = aboutContent;
  return (
    <main>
      <PageHero title="about us" />
      <div className="container mx-auto px-8 lg:px-32">
        <section className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-32 mb-32">
          <div>
            <h1 className="font-bold text-4xl lg:text-5xl mb-6">
              {hero.title}
            </h1>
            <div className="space-y-8 lg:text-lg leading-loose">
              <p>{hero.missionOne}</p>
              <p>{hero.missionTwo}</p>
            </div>
          </div>
          <div>
            <img src={aboutBcg} alt="team" />
          </div>
        </section>
        <section className="lg:w-5/6 mx-auto mb-32">
          <h2 className="text-center font-bold text-4xl lg:text-5xl mb-12">
            {values.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {values.details.map((value, index) => {
              const { heading, text } = value;
              return (
                <article key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold">{heading}</h3>
                  <p className="leading-loose font-light">{text}</p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
      <section className="bg-gray-200 py-24">
        <div className="container mx-auto px-8 lg:px-32">
          <h2 className="text-center font-bold text-4xl lg:text-5xl mb-12">
            {team.title}
          </h2>
          <div className="grid grid-cols-3 gap-y-8">
            {team.members.map((member, index) => {
              const { name, title, img } = member;
              return (
                <article
                  key={index}
                  className="w-3/4 mx-auto p-4 bg-white transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    <img src={img} alt={name} />
                  </div>
                  <h4 className="font-semibold text-xl mt-2">{name}</h4>
                  <p className="text-gray-800 font-thin text-sm">{title}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
