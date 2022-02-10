import { useProductsContext } from '../context/product_context';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';

const FeaturedProducts = () => {
  const {
    isLoading,
    isError,
    featured_products: featured,
  } = useProductsContext();

  if (isLoading) {
    return (
      <section className="py-16 lg:py-32">
        <Loading />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-16 lg:py-32">
        <Error />
      </section>
    );
  }
  return (
    <section className="py-12 lg:py-32">
      <div className="mb-6 lg:mb-12">
        <h2 className="text-2xl lg:text-4xl leading-normal font-semibold text-center mb-1 lg:mb-3">
          Featured products
        </h2>
        <div className="bg-orange-400 w-24 lg:w-32 h-1 lg:h-2 mx-auto"></div>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {featured.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
