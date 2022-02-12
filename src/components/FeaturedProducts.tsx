import { useProductsContext } from '../context/products_context';
import { PrimaryButton } from './Buttons';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return (
      <section className="py-16 lg:py-32">
        <Loading />
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 lg:py-32">
        <Error />
      </section>
    );
  }
  return (
    <section className="py-12 lg:py-24">
      <div className="mb-6 lg:mb-12">
        <h2 className="text-2xl lg:text-4xl leading-normal font-semibold mb-2 lg:mb-3">
          Discover the interior design of your dream
        </h2>
        <p>
          From mixing and matching woods to understand which coffee tables are
          best for different types of sectional, styling a room is an art
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 mb-16">
        {featured.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <div className="text-center">
        <PrimaryButton btnText="View all products" url={'/products'} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
