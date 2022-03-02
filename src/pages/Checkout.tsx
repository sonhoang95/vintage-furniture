import { PageHero, StripeCheckout } from '../components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../components/Buttons';

const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout" />
      <div className="container mx-auto px-8 lg:px-32">
        <section className="flex justify-center items-center gap-32">
          {cart.length < 1 ? (
            <div className="text-center">
              <h2 className="text-4xl font-semibold tracking-wider my-6">
                Your cart is empty
              </h2>
              <PrimaryButton btnText="Fill it" url="/products" />
            </div>
          ) : (
            <StripeCheckout />
          )}
        </section>
      </div>
    </main>
  );
};

export default Checkout;
