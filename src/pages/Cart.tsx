import { CartContent, PageHero } from '../components';
import { PrimaryButton } from '../components/Buttons';
import { useCartContext } from '../context/cart_context';

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main>
        <div className="container mx-auto px-8 lg:px-32">
          <div className="flex flex-col items-center justify-center lg:h-60">
            <h2 className="text-3xl tracking-wider font-bold mb-6 capitalize">
              Your cart is empty
            </h2>
            <PrimaryButton btnText="fill it" url="/products" />
          </div>
        </div>
      </main>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <div className="container mx-auto px-8 lg:px-32">
        <CartContent />
      </div>
    </main>
  );
};

export default Cart;
