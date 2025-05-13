import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions about our services or need a custom travel package? Reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-travel-blue mb-6">Send Us a Message</h3>

            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-travel-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-travel-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-travel-primary"
                  placeholder="+91 1234567890"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-travel-primary"
                >
                  <option value="">Select a service</option>
                  <option value="flight">Flight Booking</option>
                  <option value="train">Train Ticket</option>
                  <option value="hotel">Hotel Booking</option>
                  <option value="tour">Tour Package</option>
                  <option value="influencer">Influencer Special Package</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-travel-primary"
                  placeholder="Tell us about your travel requirements..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-travel-blue mb-6">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-travel-primary bg-opacity-10 p-4 rounded-full mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-travel-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-travel-blue mb-2">Office Address</h4>
                  <p className="text-gray-600">
                    123 Travel Plaza, Park Street<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-travel-secondary bg-opacity-10 p-4 rounded-full mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-travel-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-travel-blue mb-2">Phone Numbers</h4>
                  <p className="text-gray-600 mb-2">
                    Bookings: <a href="tel:+919876543210" className="text-travel-primary hover:underline">+91 9876 543 210</a>
                  </p>
                  <p className="text-gray-600 mb-2">
                    Customer Support: <a href="tel:+919876543211" className="text-travel-primary hover:underline">+91 9876 543 211</a>
                  </p>
                  <p className="text-gray-600">
                    WhatsApp: <a href="https://wa.me/919876543212" className="text-travel-primary hover:underline">+91 9876 543 212</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-travel-accent bg-opacity-10 p-4 rounded-full mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-travel-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-travel-blue mb-2">Email Addresses</h4>
                  <p className="text-gray-600 mb-2">
                    Bookings: <a href="mailto:bookings@demoody.com" className="text-travel-primary hover:underline">bookings@demoody.com</a>
                  </p>
                  <p className="text-gray-600 mb-2">
                    Customer Support: <a href="mailto:support@demoody.com" className="text-travel-primary hover:underline">support@demoody.com</a>
                  </p>
                  <p className="text-gray-600">
                    Influencer Partnerships: <a href="mailto:creators@demoody.com" className="text-travel-primary hover:underline">creators@demoody.com</a>
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="font-bold text-travel-blue mb-4">Follow Us On Social Media</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.48 7.3h-4.37v2.08h4.37c1.34 0 2.42 1.09 2.42 2.42 0 1.34-1.08 2.42-2.42 2.42h-4.37v2.08h4.37c2.49 0 4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5z"></path>
                      <path d="M14.11 9.38H5.5v2.08h8.61c1.34 0 2.42 1.09 2.42 2.42 0 1.34-1.08 2.42-2.42 2.42H5.5v2.08h8.61c2.49 0 4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5z"></path>
                      <path d="M8.61 7.3H7.11l-4.5 9.5h1.74l.9-1.92h5.24l.9 1.92h1.74l-4.52-9.5zm-4.5 5.5l1.74-3.65 1.74 3.65H4.11z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-pink-600 text-white rounded-full p-3 hover:bg-pink-700 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-400 text-white rounded-full p-3 hover:bg-blue-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-red-600 text-white rounded-full p-3 hover:bg-red-700 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 border-t border-gray-100 pt-8">
                <h4 className="font-bold text-travel-blue mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    24/7 Support available for travelers with bookings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
