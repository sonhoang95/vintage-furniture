import { Link } from 'react-router-dom';
import { IProduct } from '../types';
import { formatPrice } from '../utils/helpers';

const ListView = ({ products }: { products: IProduct[] }) => {
  return (
    <div>
      {products.map(product => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id} className="flex flex-col lg:flex-row gap-12 mb-12">
            <div className="lg:w-[650px]">
              <img src={image} alt={name} className="w-full h-[200px]" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold capitalize">{name}</h4>
              <h5 className="font-semibold text-orange-700">
                {formatPrice(price)}
              </h5>
              <p className="leading-loose text-gray-600 pb-2">
                {description.substring(0, 175)}...
              </p>
              <Link
                to={`/products/${id}`}
                className="px-3 py-1 bg-orange-400 hover:bg-orange-700 transition-colors duration-200 text-white inline-block text-sm capitalize rounded-lg"
              >
                View details
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView;
