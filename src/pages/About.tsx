import { PageHero, Team, Values } from '../components';
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
        <Values values={values} />
      </div>
      <Team team={team} />
    </main>
  );
};

export default About;
