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
                      ? 'border-b border-gray-900 text-gray-900'
                      : null
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          {/* end of categories */}
          {/* companies */}
          <div className="border-b lg:border-none border-gray-200 mb-6 pb-5 lg:pb-3 lg:mb-0">
            <h5 className="font-semibold mb-3">Company</h5>
            <select
              name="company"
              value={company}
              onChange={handleFilters}
              className="capitalize"
            >
              {companies.map((c, index) => (
                <option key={index}>{c}</option>
              ))}
            </select>
          </div>
          {/* end of companies */}
          {/* colors */}
          <div className="border-b lg:border-none border-gray-200 mb-6 pb-7 lg:pb-2 lg:mb-3">
            <h5 className="font-semibold mb-3">Colors</h5>
            <div className="flex gap-2 items-center text-sm z-0">
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      type="button"
                      key={index}
                      name="color"
                      onClick={handleFilters}
                      data-color="all"
                      className={`text-gray-500 ${
                        color === c
                          ? 'border-b text-gray-900 border-gray-900'
                          : null
                      }`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    type="button"
                    key={index}
                    name="color"
                    style={{ background: c as string }}
                    data-color={c}
                    className={`w-[17px] h-[17px] rounded-full opacity-70 bg-gray-500 flex items-center justify-center ${
                      c === color ? 'opacity-100' : null
                    }`}
                    onClick={handleFilters}
                  >
                    {color === c ? (
                      <FaCheck className="text-[10px] text-white" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end colors */}
          {/* price */}
          <div className="border-b lg:border-none border-gray-200 mb-3 pb-6 lg:pb-0">
            <h5 className="font-semibold mb-3">Price</h5>
            <p>{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={handleFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end price */}
          {/* shipping */}
          <div className="border-b lg:border-none border-gray-200 mb-6 pt-4 lg:pt-0 pb-7 lg:pb-0 flex items-center gap-2">
            <label htmlFor="shipping">Free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={handleFilters}
            />
          </div>
          {/* end shipping */}
        </form>
        <button
          type="button"
          onClick={clearFilters}
          className="px-4 py-1 text-white bg-red-600 rounded-lg hover:bg-red-700 mb-6 lg:mb-0 transition-colors duration-300"
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
};

export default Filters;
