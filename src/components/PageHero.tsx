import { Link } from 'react-router-dom';

export interface PageHeroProps {
  title: string;
  showProduct?: boolean;
}

const PageHero = ({ title, showProduct }: PageHeroProps) => {
  return (
    <div className="py-12 bg-gray-100 mb-8">
      <div className="container mx-auto px-8 lg:px-32">
        <h3 className="capitalize font-semibold text-2xl">
          <Link to="/" className="text-orange-600">
            Home{' '}
            {showProduct && (
              <Link to="/products" className="text-orange-600">
                {' '}
                / Products
              </Link>
            )}{' '}
          </Link>{' '}
          / {title}
        </h3>
      </div>
    </div>
  );
};

export default PageHero;
