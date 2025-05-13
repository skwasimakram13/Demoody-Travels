import React, { useState } from 'react';

const TourPackages = () => {
  const [category, setCategory] = useState('all');

  const tourPackages = [
    {
      id: 1,
      title: 'Exotic Dubai Adventure',
      location: 'Dubai, UAE',
      duration: '6 Days / 5 Nights',
      price: '₹85,000',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'international',
      features: ['Desert Safari', 'Burj Khalifa Tour', 'Luxury Hotel Stay', 'Instagram Photo Spots'],
      specialForInfluencers: true,
    },
    {
      id: 2,
      title: 'Tropical Bali Retreat',
      location: 'Bali, Indonesia',
      duration: '7 Days / 6 Nights',
      price: '₹70,000',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'international',
      features: ['Private Villa', 'Rice Terrace Visit', 'Water Temple Tour', 'Content Creation Workshop'],
      specialForInfluencers: true,
    },
    {
      id: 3,
      title: 'Amazing Thailand',
      location: 'Bangkok & Phuket, Thailand',
      duration: '8 Days / 7 Nights',
      price: '₹65,000',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'international',
      features: ['Island Hopping', 'Thai Cooking Class', 'Luxury Resort', 'Night Market Tour'],
      specialForInfluencers: true,
    },
    {
      id: 4,
      title: 'Majestic Kashmir',
      location: 'Srinagar & Gulmarg, India',
      duration: '5 Days / 4 Nights',
      price: '₹35,000',
      image: 'https://images.unsplash.com/photo-1566837497312-7be4486cf6a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'domestic',
      features: ['Shikara Ride', 'Gondola Cable Car', 'Houseboat Stay', 'Photography Tour'],
      specialForInfluencers: true,
    },
    {
      id: 5,
      title: 'Goa Beach Holiday',
      location: 'North & South Goa, India',
      duration: '4 Days / 3 Nights',
      price: '₹25,000',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'domestic',
      features: ['Beach Parties', 'Water Sports', 'Beachside Resort', 'Cruise Experience'],
      specialForInfluencers: false,
    },
    {
      id: 6,
      title: 'Scenic Ladakh',
      location: 'Leh & Nubra Valley, India',
      duration: '7 Days / 6 Nights',
      price: '₹40,000',
      image: 'https://images.unsplash.com/photo-1589556264428-54a0bc53be0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'domestic',
      features: ['Pangong Lake', 'Magnetic Hill', 'Monastery Visit', 'Camping Experience'],
      specialForInfluencers: false,
    },
  ];

  const filteredPackages = category === 'all'
    ? tourPackages
    : tourPackages.filter(pkg => pkg.category === category);

  return (
    <section id="tours" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Popular Tour Packages</h2>
          <p className="section-subtitle">
            Discover our handpicked destinations with special packages designed for content creators and influencers
          </p>

          <div className="flex justify-center space-x-4 mt-8 mb-12">
            <button
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                category === 'all'
                  ? 'bg-travel-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setCategory('all')}
            >
              All Packages
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                category === 'international'
                  ? 'bg-travel-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setCategory('international')}
            >
              International
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                category === 'domestic'
                  ? 'bg-travel-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setCategory('domestic')}
            >
              Domestic
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((tourPackage) => (
            <div key={tourPackage.id} className="tour-card">
              <div className="relative">
                <img
                  src={tourPackage.image}
                  alt={tourPackage.title}
                  className="tour-card-image"
                />
                <div className="tour-price">{tourPackage.price}</div>
                {tourPackage.specialForInfluencers && (
                  <div className="absolute top-4 left-4 bg-travel-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded">
                    Influencer Special
                  </div>
                )}
              </div>

              <div className="tour-card-content">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {tourPackage.location}
                </div>

                <h3 className="text-xl font-bold text-travel-blue mb-2">{tourPackage.title}</h3>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {tourPackage.duration}
                </div>

                <div className="border-t border-gray-100 pt-4 mt-2">
                  <div className="text-sm text-gray-600 mb-2 font-medium">Package includes:</div>
                  <ul className="space-y-1">
                    {tourPackage.features.map((feature, idx) => (
                      <li key={`${tourPackage.id}-feature-${idx}`} className="flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2 text-travel-green">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <a href="/tour-details" className="btn-primary w-full block text-center">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/all-packages" className="btn-secondary">
            View All Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
