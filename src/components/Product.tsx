import { IProduct } from '../context/product_context';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ id, image, name, price }: IProduct) => {
  return (
    <article>
      <Link to={`products/${id}`}>
        <div className="relative cursor-pointer mb-3">
          <img src={image} alt={name} className="h-[275px] w-full" />
          <div className="absolute text-xl w-full h-full top-0 left-0 flex items-center justify-center opacity-0 hover:opacity-70 text-white bg-black transition-all duration-300">
            <FaSearch />
          </div>
        </div>
      </Link>
      <footer className="flex items-center justify-between capitalize tracking-wider font-semibold ">
        <h5>{name}</h5>
        <p className="text-orange-400">${price}</p>
      </footer>
    </article>
  );
};

export default Product;
