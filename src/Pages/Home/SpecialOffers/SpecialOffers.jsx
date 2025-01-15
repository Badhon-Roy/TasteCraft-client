import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const SpecialOffers = () => {
    return (
      <section className="py-16 ">
        <div className="container px-6 mx-auto text-center">
          <SectionTitle subHeading="Do not miss out on these amazing deals" heading="Limited Time Special Offers" />
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* First Offer */}
            <div className="p-8 text-black transition-all transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-semibold">50% Off on Your First Order</h3>
              <p className="mb-6 text-lg">Sign up for our newsletter and get 50% off on your first order. Enjoy great food at unbeatable prices!</p>
              <a
                href="/signup"
                className="bg-[#fd930b] text-white py-2 px-6 rounded-full hover:bg-[#ff7f00] transition duration-300"
              >
                Sign Up Now
              </a>
            </div>
  
            {/* Second Offer */}
            <div className="p-8 text-black transition-all transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-semibold">Buy One Get One Free</h3>
              <p className="mb-6 text-lg">Order any item from our menu and get another one for free. Limited time offer. Grab it before it is gone!</p>
              <a
                href="/menu"
                className="bg-[#fd930b] text-white py-2 px-6 rounded-full hover:bg-[#ff7f00] transition duration-300"
              >
                Order Now
              </a>
            </div>
  
            {/* Third Offer */}
            <div className="p-8 text-black transition-all transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-semibold">Free Delivery on Orders Above $50</h3>
              <p className="mb-6 text-lg">Enjoy free delivery on all orders above $50. Get your favorite dishes delivered straight to your doorstep.</p>
              <a
                href="/menu"
                className="bg-[#fd930b] text-white py-2 px-6 rounded-full hover:bg-[#ff7f00] transition duration-300"
              >
                Shop Now
              </a>
            </div>
          </div>
  
          {/* CTA Section */}
          <div className="mt-12">
            <h3 className="mb-4 text-2xl font-semibold">Exclusive Deal for Newsletter Subscribers!</h3>
            <p className="mb-6 text-lg">Sign up today to receive even more discounts, updates, and personalized offers.</p>
            <a
              href="/signup"
              className="bg-[#fd930b] text-white py-3 px-8 rounded-full text-xl hover:bg-[#ff7f00] transition duration-300"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default SpecialOffers;
  