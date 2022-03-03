import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useUserContext } from '../context/user_context';
import { useCartContext } from '../context/cart_context';
import { formatPrice } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY || '');

const CheckoutForm = () => {
  const { cart, shipping_fees, total_amount, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  const navigate = useNavigate();

  // STRIPE STUFF
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        '/.netlify/functions/create-payment-intent',
        JSON.stringify({ cart, shipping_fees, total_amount })
      );
      setClientSecret(data.clientSecret);
    } catch (error: any) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    createPaymentIntent();
    // eslint-disable-next-line
  }, []);

  const handleChange = async () => {
    console.log('hello');
  };
  const handleSubmit = async () => {
    console.log('hello');
  };

  return (
    <div>
      {succeeded ? (
        <article>
          <h4>Thank you, {myUser && myUser.name}!</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirect to homepage shortly</h4>
        </article>
      ) : (
        <article className="space-y-3 capitalize mb-6 mt-12 text-center">
          <h4 className="text-2xl lg:text-3xl font-semibold text-orange-400">
            Great! That's {formatPrice(shipping_fees + total_amount)}!
          </h4>
          <p className="text-sm lg:text-base text-gray-500">
            — Test card number: 4242 4242 4242 4242 —
          </p>
        </article>
      )}
      <form
        action=""
        id="payment-form"
        className="stripe-form mb-24"
        onSubmit={handleSubmit}
      >
        <CardElement
          id="cart-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          id="submit"
          className="stripe-button mt-4"
          disabled={disabled || processing || succeeded}
        >
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              `Pay: ${formatPrice(shipping_fees + total_amount)}`
            )}
          </span>
        </button>
        {/* Show any error when processing payment */}
        {error && (
          <div id="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success msg upon completion */}
        <p className={succeeded ? 'result-message' : 'result-message hidden'}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {' '}
            Stripe dashboard.
          </a>{' '}
          Refresh the page to pay again.
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <section>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </section>
  );
};

export default StripeCheckout;
