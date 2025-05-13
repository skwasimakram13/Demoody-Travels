import React from 'react';

const SpecialOffers = () => {
  return (
    <section id="offers" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Special Offers</h2>
          <p className="section-subtitle">
            Take advantage of our limited-time deals and exclusive promotions
          </p>
        </div>

        {/* Featured Offer Banner */}
        <div className="relative bg-gradient-to-r from-travel-blue to-travel-purple rounded-xl overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Luxury Hotel Room"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 py-12 md:py-16 text-white">
            <span className="inline-block bg-white text-travel-primary font-bold px-4 py-1 rounded-full text-sm mb-6">LIMITED TIME OFFER</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Influencer Special: 30% OFF on Luxury Hotel Bookings</h3>
            <p className="text-lg mb-8 opacity-90">
              Exclusive offer for YouTubers and content creators. Includes complimentary spa access and content creation assistance.
            </p>
            <a href="#" className="bg-white text-travel-blue font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 inline-block">
              Book Now
            </a>
            <div className="flex items-center mt-6">
              <div className="bg-white bg-opacity-30 rounded-full px-4 py-1 text-sm font-medium">
                Use Code: CREATOR30
              </div>
              <div className="ml-4 text-sm">
                Valid until: June 30, 2025
              </div>
            </div>
          </div>
        </div>

        {/* Other Offers in Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Offer 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Flight Booking"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20"></div>
              <div className="absolute top-4 right-4 bg-travel-primary text-white font-bold px-3 py-1 rounded-full text-sm">
                ₹300 OFF
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-travel-blue mb-2">Flight Booking Discount</h3>
              <p className="text-gray-600 mb-4">
                Flat ₹300 off on every flight booking. No minimum booking amount required. Available for both domestic and international flights.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-xs text-gray-500">Use Code</span>
                  <div className="font-bold text-travel-primary">FLYNOW300</div>
                </div>
                <a href="#" className="text-travel-blue font-medium hover:text-travel-primary transition-colors">
                  Book Now →
                </a>
              </div>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Train Booking"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20"></div>
              <div className="absolute top-4 right-4 bg-travel-accent text-travel-blue font-bold px-3 py-1 rounded-full text-sm">
                Premium
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-travel-blue mb-2">Premium Tatkal Service</h3>
              <p className="text-gray-600 mb-4">
                Get guaranteed tatkal ticket booking for AC & Sleeper class with our premium service. Secure your tickets even during peak season.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-xs text-gray-500">Service Fee</span>
                  <div className="font-bold text-travel-accent">+₹200 only</div>
                </div>
                <a href="#" className="text-travel-blue font-medium hover:text-travel-accent transition-colors">
                  Book Now →
                </a>
              </div>
            </div>
          </div>

          {/* Offer 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Bali Package"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20"></div>
              <div className="absolute top-4 right-4 bg-travel-secondary text-white font-bold px-3 py-1 rounded-full text-sm">
                15% OFF
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-travel-blue mb-2">Group Booking Offer</h3>
              <p className="text-gray-600 mb-4">
                Book as a group of 5 or more and get 15% off on any international tour package. Ideal for content creators traveling with teams.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-xs text-gray-500">Min. Group Size</span>
                  <div className="font-bold text-travel-secondary">5 Persons</div>
                </div>
                <a href="#" className="text-travel-blue font-medium hover:text-travel-secondary transition-colors">
                  Book Now →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-travel-primary bg-opacity-10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-travel-primary mb-4">
            Subscribe to Our Newsletter for Exclusive Offers
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Be the first to know about our special promotions, new destinations, and travel tips for content creators.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-travel-primary"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
