import React from 'react';
import { PageHero } from '../components';

const Checkout = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <div className="container mx-auto px-8 lg:px-32">
        <section className="flex justify-between items-center gap-32"></section>
      </div>
    </main>
  );
};

export default Checkout;
