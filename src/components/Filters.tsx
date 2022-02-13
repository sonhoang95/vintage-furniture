import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useFilterContext } from '../context/filter_context';
import { formatPrice, getUniqueValues } from '../utils/helpers';

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      max_price,
      min_price,
      price,
      shipping,
    },
    handleFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <section>
      <div>
        <form>
          {/* search input */}
          <div>
            <input
              type="text"
              name="text"
              placeholder="search"
              className="capitalize bg-gray-100 text-sm tracking-wider px-2 py-1 rounded"
              value={text}
              onChange={handleFilters}
            />
          </div>
          {/* end search input */}
          {/* categories */}
          <div className="my-6 lg:my-3 border-y lg:border-none border-gray-200 py-3 lg:py-0">
            <h5 className="font-semibold mb-3">Categories</h5>
            <div className="flex flex-col items-start gap-3">
              {categories.map((c, index) => (
                <button
                  key={index}
                  onClick={handleFilters}
                  name="category"
                  type="button"
                  className={`capitalize text-sm text-gray-500 hover:text-gray-900 tracking-wider ${
                    category === c?.toString().toLowerCase()
                      ? 'underline text-gray-900'
                      : null
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Filters;
