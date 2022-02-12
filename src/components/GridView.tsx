import { IProduct } from '../types';
import Product from './Product';

const GridView = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default GridView;
