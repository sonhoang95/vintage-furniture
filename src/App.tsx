import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import {
  About,
  Cart,
  FAQ,
  Error,
  Home,
  Products,
  SingleProduct,
  Checkout,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
