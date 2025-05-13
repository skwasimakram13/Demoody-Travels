import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About Demoody Travels</h2>
          <p className="section-subtitle">
            Your trusted partner for all travel needs with special focus on content creators
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507608616040-a5db07e5ea81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Travel Agency Office"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-10 right-10 bg-white rounded-lg shadow-xl p-6 w-64">
              <div className="flex flex-col space-y-4">
                <div>
                  <span className="text-4xl font-bold text-travel-primary">7+</span>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-travel-secondary">10k+</span>
                  <p className="text-gray-600">Happy Travelers</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-travel-accent">50+</span>
                  <p className="text-gray-600">Tour Destinations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h3 className="text-2xl font-bold text-travel-blue mb-6">We Specialize in Creating Memorable Travel Experiences</h3>
            <p className="text-gray-600 mb-6">
              Demoody Travels is a premier travel and tour company dedicated to providing exceptional travel experiences. We specialize in catering to the unique needs of content creators, influencers, and YouTubers, helping them capture stunning content while enjoying their travels.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of experienced travel professionals offers end-to-end services including flight bookings, train reservations, hotel accommodations, and curated tour packages. With flat ₹300 off on every flight booking and special discounts for influencers, we ensure you get the best value for your money.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start">
                <div className="bg-travel-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-travel-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-travel-blue mb-2">Expert Travel Planning</h4>
                  <p className="text-gray-600 text-sm">Customized itineraries designed by travel experts</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-travel-secondary bg-opacity-10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-travel-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-travel-blue mb-2">Best Price Guarantee</h4>
                  <p className="text-gray-600 text-sm">Competitive prices and exclusive discounts</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-travel-accent bg-opacity-10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-travel-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-travel-blue mb-2">Instant Confirmations</h4>
                  <p className="text-gray-600 text-sm">Quick booking confirmations for all services</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-travel-purple bg-opacity-10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-travel-purple">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-travel-blue mb-2">24/7 Support</h4>
                  <p className="text-gray-600 text-sm">Round-the-clock assistance for travelers</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Contact Us
              </a>
              <a href="#services" className="btn-secondary">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
