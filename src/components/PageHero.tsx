import { Link } from 'react-router-dom';

export interface PageHeroProps {
  title: string;
}

const PageHero = ({ title }: PageHeroProps) => {
  return (
    <div className="py-12 bg-gray-200 mb-16">
      <div className="container mx-auto px-8 lg:px-32">
        <h3 className="capitalize font-semibold text-3xl">
          <Link to="/" className="text-orange-500">
            Home{' '}
          </Link>{' '}
          / {title}
        </h3>
      </div>
    </div>
  );
};

export default PageHero;
