import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
  const {
    grid_view,
    filtered_products: products,
    setGridView,
    setListView,
    sort,
    handleSort,
  } = useFilterContext();
  return (
    <section className="mb-4 grid grid-cols-2 md:grid-cols-[auto_auto_1fr_auto] lg:grid-cols-[auto_auto_1fr_auto] gap-2 lg:gap-4 items-center">
      <div className="space-x-1 text-xs">
        <button
          onClick={setGridView}
          className={`p-[2px] border border-black rounded ${
            grid_view ? 'bg-gray-900 text-white' : null
          }`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          className={`p-[2px] border border-black rounded ${
            !grid_view ? 'bg-gray-900 text-white' : null
          }`}
        >
          <BsList />
        </button>
      </div>
      <p className="capitalize text-sm">{products.length} products found</p>
      <hr className="hidden md:block lg:block" />
      <form className="text-sm col-span-2 lg:col-auto">
        <label htmlFor="sort" className="capitalize font-semibold">
          sort by :
        </label>
        <select
          name="sort"
          id="sort"
          className="border-none capitalize px-[0.25rem] py-[0.5rem] font-semibold"
          value={sort}
          onChange={handleSort}
        >
          <option value="price-lowest">Price (lowest)</option>
          <option value="price-highest">Price (highest)</option>
          <option value="name-a">Name (A-Z)</option>
          <option value="name-z">Name (Z-A)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
