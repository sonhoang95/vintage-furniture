import { Helmet } from 'react-helmet';
import { Filters, PageHero, ProductList, Sort } from '../components';

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Vintage Furniture | Products</title>
        <meta name="description" content="Browse our top quality products" />
      </Helmet>
      <main>
        <PageHero title="products" />
        <div className="container mx-auto px-8 lg:px-32 lg:pt-8 pb-20">
          <section className="grid lg:grid-cols-[200px_1fr]">
            <Filters />
            <div>
              <Sort />
              <ProductList />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Products;
