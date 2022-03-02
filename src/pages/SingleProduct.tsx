/* eslint-disable react-hooks/exhaustive-deps */
import { single_product_url as url } from '../utils/constant';
import { formatPrice } from '../utils/helpers';
import { useProductsContext } from '../context/products_context';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { AddToCart, PageHero, ProductImages, Stars } from '../components';
import { SimpleButton } from '../components/Buttons';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const SingleProduct = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    getSingleProduct,
  } = useProductsContext();

  const navigate = useNavigate();

  useEffect(() => {
    getSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      if (error) {
        navigate('/');
      }
    }, 3000);

    return () => clearTimeout(errorTimeout);
  }, [navigate, error]);

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

  const {
    name,
    price,
    description,
    stars,
    stock,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <>
      <PageHero title={name} showProduct />
      <div className="container mx-auto px-8 lg:px-32">
        <SimpleButton
          url="/products"
          btnText="back to products"
          icon={<AiOutlineArrowLeft />}
        />
        <section className="mt-8 mb-16 flex flex-col lg:flex-row gap-12">
          <ProductImages images={images} />
          <div className="lg:w-1/2 space-y-3">
            <h2 className="text-3xl font-bold capitalize">{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="text-lg text-orange-700 font-semibold">
              {formatPrice(price)}
            </h5>
            <p className="leading-loose pb-8">{description}</p>
            <p className="grid grid-cols-[125px_1fr]">
              <span className="font-bold">Available : </span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className="grid grid-cols-[125px_1fr]">
              <span className="font-bold">SKU : </span>
              {sku}
            </p>
            <p className="capitalize grid grid-cols-[125px_1fr]">
              <span className="font-bold">Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
