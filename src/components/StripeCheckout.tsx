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
    console.log('hello from stripe checkout');
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const handleChange = async () => {
    console.log('hello');
  };
  const handleSubmit = async () => {
    console.log('hello');
  };

  return (
    <div>
      <form
        action=""
        id="payment-form"
        className="stripe-form"
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
            {processing ? <div className="spinner" id="spinner"></div> : 'Pay'}
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
