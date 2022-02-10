import { Link } from 'react-router-dom';
import { links, socials } from '../utils/constant';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer className="lg:text-lg py-6 bg-gray-900 text-gray-50">
      <div className="container mx-auto px-8 lg:px-32 py-4">
        <div className="py-8 border-b border-gray-600 flex flex-col lg:flex-row items-center justify-center gap-6">
          <p className="text-3xl lg:text-4xl font-bold text-center lg:text-left">
            Here's what we are made of
          </p>
          <div className="px-6 p-2 rounded-full bg-orange-400 text-white flex items-center gap-2 cursor-pointer hover:bg-orange-500 transform hover:scale-105 transition-all duration-300">
            <Link to="/about-us">Know us better</Link>
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>
        </div>
        <section className="flex flex-col lg:flex-row items-center justify-between pt-6">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
            <h1 className="text-2xl font-bold">
              Vint<span className="text-orange-400">age</span>
            </h1>
            <div className="flex flex-col lg:flex-row list-none items-center gap-4 lg:gap-16 capitalize text-base mb-8 lg:mb-0">
              {links.map(link => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <Link to={url} className="hover:text-orange-400">
                      {text}
                    </Link>
                  </li>
                );
              })}
            </div>
          </div>
          <div className="flex list-none items-center gap-6">
            {socials.map(socialLink => {
              const { id, icon } = socialLink;
              return (
                <li key={id}>
                  <Link to="" className="hover:text-orange-400">
                    {icon}
                  </Link>
                </li>
              );
            })}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
