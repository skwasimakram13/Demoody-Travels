import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-travel-primary">
            Demoody<span className="text-travel-secondary"> Travels</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-travel-blue hover:text-travel-primary font-medium">Home</a>
          <a href="#services" className="text-travel-blue hover:text-travel-primary font-medium">Services</a>
          <a href="#tours" className="text-travel-blue hover:text-travel-primary font-medium">Tours</a>
          <a href="#offers" className="text-travel-blue hover:text-travel-primary font-medium">Offers</a>
          <a href="#testimonials" className="text-travel-blue hover:text-travel-primary font-medium">Testimonials</a>
          <a href="#about" className="text-travel-blue hover:text-travel-primary font-medium">About</a>
          <a href="#contact" className="text-travel-blue hover:text-travel-primary font-medium">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-travel-blue focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <a href="#home" className="text-travel-blue hover:text-travel-primary font-medium py-2">Home</a>
            <a href="#services" className="text-travel-blue hover:text-travel-primary font-medium py-2">Services</a>
            <a href="#tours" className="text-travel-blue hover:text-travel-primary font-medium py-2">Tours</a>
            <a href="#offers" className="text-travel-blue hover:text-travel-primary font-medium py-2">Offers</a>
            <a href="#testimonials" className="text-travel-blue hover:text-travel-primary font-medium py-2">Testimonials</a>
            <a href="#about" className="text-travel-blue hover:text-travel-primary font-medium py-2">About</a>
            <a href="#contact" className="text-travel-blue hover:text-travel-primary font-medium py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
