import { PageHero } from '../components';

const Products = () => {
  return (
    <main>
      <PageHero title="products" />
      <div className="container mx-auto px-8 lg:px-32">
        <section className="flex justify-between items-center gap-32"></section>
      </div>
    </main>
  );
};

export default Products;
