const CartColumns = () => {
  return (
    <>
      <div className="hidden text-gray-600 lg:grid grid-cols-[316px_1fr_1fr_1fr_auto] justify-items-center capitalize tracking-wider font-semibold mb-12">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
    </>
  );
};

export default CartColumns;
