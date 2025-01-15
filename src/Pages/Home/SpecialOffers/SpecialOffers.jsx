
const SpecialOffers = () => {
    return (
      <section className="py-12 bg-gray-100">
        <h2 className="mb-6 text-3xl font-bold text-center">Special Offers</h2>
        <div className="flex justify-center space-x-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">50% Off on Your First Order</h3>
            <p>Get 50% off your first order when you sign up for our newsletter.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Buy One Get One Free</h3>
            <p>Order any item and get another one for free. Limited time offer.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SpecialOffers;
  