import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Discover the World with <span className="text-travel-accent">Demoody Travels</span>
          </h1>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
            Exclusive travel packages for influencers and content creators.
            Special discounts on flights, hotels, and tour packages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#tours" className="btn-primary">
              Explore Tour Packages
            </a>
            <a href="#services" className="btn-secondary">
              Our Services
            </a>
          </div>
        </div>

        {/* Floating Feature Cards */}
        <div className="hidden md:flex absolute bottom-0 left-0 right-0 transform translate-y-1/2 justify-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 flex items-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-travel-primary rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-travel-blue mb-1">Flight Bookings</h3>
                  <p className="text-gray-600">Flat ₹300 off on every flight</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 flex items-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-travel-secondary rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-travel-blue mb-1">Hotel Bookings</h3>
                  <p className="text-gray-600">Premium stays at discounted rates</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 flex items-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-travel-accent rounded-full text-travel-blue mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-travel-blue mb-1">Train Tickets</h3>
                  <p className="text-gray-600">AC & Sleeper with Tatkal options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
