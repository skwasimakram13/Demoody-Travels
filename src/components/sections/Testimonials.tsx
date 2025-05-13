import React, { useState } from 'react';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('text');

  const textTestimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Travel Vlogger',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'The Dubai tour package was amazing! From the desert safari to the Burj Khalifa visit, everything was perfectly arranged. The special photography spots they arranged for my content were fantastic. I got some amazing shots for my channel!',
      rating: 5,
      location: 'Dubai, UAE',
    },
    {
      id: 2,
      name: 'Rahul Mehta',
      role: 'Instagram Influencer',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'As a content creator, I need the perfect spots for my Instagram posts. Demoody Travels understood this and curated the perfect Bali itinerary for me. The villa they booked had amazing lighting and views. Highly recommend for creators!',
      rating: 5,
      location: 'Bali, Indonesia',
    },
    {
      id: 3,
      name: 'Anjali Patel',
      role: 'Travel Blogger',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      content: "I have booked flights and hotels through them multiple times. They always give me the promised ₹300 off on flights, and their hotel selections are excellent. The customer service is prompt and efficient.",
      rating: 4,
      location: 'Thailand Tour',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'YouTuber',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
      content: 'The Kashmir photography tour was perfect for my YouTube channel. Their guides knew exactly where to take me for the best shots. The houseboat experience was unique and my audience loved the content I created there!',
      rating: 5,
      location: 'Kashmir, India',
    },
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: 'Neha Kakkar',
      role: 'Singer & Influencer',
      thumbnail: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      videoUrl: '#', // In a real project, this would be a YouTube embed or hosted video URL
      location: 'Dubai Tour',
    },
    {
      id: 2,
      name: 'Rohan Joshi',
      role: 'Comedian & Content Creator',
      thumbnail: 'https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      videoUrl: '#', // In a real project, this would be a YouTube embed or hosted video URL
      location: 'Thailand Experience',
    },
    {
      id: 3,
      name: 'Komal Pandey',
      role: 'Fashion Influencer',
      thumbnail: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      videoUrl: '#', // In a real project, this would be a YouTube embed or hosted video URL
      location: 'Bali Retreat',
    },
  ];

  // Function to render stars for ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear from content creators and influencers who have traveled with us
          </p>

          {/* Tabs */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === 'text'
                  ? 'bg-travel-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('text')}
            >
              Text Testimonials
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === 'video'
                  ? 'bg-travel-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('video')}
            >
              Video Testimonials
            </button>
          </div>
        </div>

        {/* Text Testimonials */}
        {activeTab === 'text' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {textTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-travel-blue">{testimonial.name}</h4>
                    <p className="text-travel-primary font-medium text-sm">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="text-sm text-gray-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Testimonials */}
        {activeTab === 'video' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative group">
                  <img
                    src={video.thumbnail}
                    alt={`${video.name} testimonial`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-travel-primary rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-travel-blue">{video.name}</h4>
                  <p className="text-travel-primary font-medium text-sm mb-2">{video.role}</p>
                  <div className="text-sm text-gray-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {video.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certification Banner */}
        <div className="mt-20 bg-gray-50 rounded-xl p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <div className="bg-travel-blue rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-travel-blue">Certified Flight Agent</h4>
                <p className="text-sm text-gray-600">IATA Accredited</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-travel-secondary rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-travel-blue">Authorized IRCTC Agent</h4>
                <p className="text-sm text-gray-600">For Train Bookings</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-travel-accent rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-travel-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-travel-blue">Registered Tour Operator</h4>
                <p className="text-sm text-gray-600">Ministry of Tourism Approved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
