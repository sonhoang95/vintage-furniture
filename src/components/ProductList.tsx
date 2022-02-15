import React from 'react';
import GridView from './GridView';
import ListView from './ListView';
import { useFilterContext } from '../context/filter_context';

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <h5 className="text-xl font-bold tracking-wider">
        Sorry, no product matched your search...
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

export default ProductList;
