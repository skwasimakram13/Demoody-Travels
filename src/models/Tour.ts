export interface Tour {
  id: number;
  title: string;
  location: string;
  country: string;
  duration: string;
  price: string;
  priceNumber: number; // For sorting and filtering
  image: string;
  gallery: string[]; // Additional images for the tour detail page
  category: 'international' | 'domestic';
  features: string[];
  specialForInfluencers: boolean;
  description: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

// Expanded tour data for detailed pages
export const tourData: Tour[] = [
  {
    id: 1,
    title: 'Exotic Dubai Adventure',
    location: 'Dubai, UAE',
    country: 'United Arab Emirates',
    duration: '6 Days / 5 Nights',
    price: '₹85,000',
    priceNumber: 85000,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'international',
    features: ['Desert Safari', 'Burj Khalifa Tour', 'Luxury Hotel Stay', 'Instagram Photo Spots'],
    specialForInfluencers: true,
    description: 'Experience the glitz and glamour of Dubai with our specially curated package for content creators. From the towering Burj Khalifa to the golden sands of the desert, this tour offers the perfect backdrop for your social media content. Enjoy VIP access to exclusive locations and capture content that will make your followers envious!',
    highlights: [
      'VIP access to the top of Burj Khalifa for exclusive photos',
      'Private desert safari with professional photoshoot',
      'Luxury yacht cruise with Dubai skyline views',
      'Shopping experience at Dubai Mall with personal stylist',
      'Visit to Palm Jumeirah and Atlantis Hotel'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & City Introduction',
        description: 'Arrive at Dubai International Airport and transfer to your luxury hotel. Enjoy a welcome dinner with orientation about the city.',
        activities: ['Airport pickup', 'Hotel check-in', 'Welcome dinner']
      },
      {
        day: 2,
        title: 'Dubai City Tour & Burj Khalifa',
        description: 'Explore the highlights of Dubai city and visit the iconic Burj Khalifa with special access for content creators.',
        activities: ['Dubai Museum visit', 'Old Dubai tour', 'Burj Khalifa VIP access', 'Dubai Mall shopping']
      },
      {
        day: 3,
        title: 'Desert Safari Adventure',
        description: 'Experience the thrill of a desert safari with dune bashing, camel riding, and a special sunset photoshoot.',
        activities: ['Dune bashing', 'Camel riding', 'Professional desert photoshoot', 'BBQ dinner with entertainment']
      },
      {
        day: 4,
        title: 'Dubai Marina & Palm Jumeirah',
        description: 'Spend the day exploring Dubai Marina and the famous Palm Jumeirah with its luxurious resorts.',
        activities: ['Dubai Marina cruise', 'Palm Jumeirah tour', 'Atlantis Hotel visit', 'Luxury beach club experience']
      },
      {
        day: 5,
        title: 'Abu Dhabi Day Trip',
        description: 'Take a day trip to Abu Dhabi to visit the Sheikh Zayed Grand Mosque and other attractions.',
        activities: ['Sheikh Zayed Grand Mosque', 'Ferrari World photo stop', 'Corniche Beach visit', 'Luxury mall shopping']
      },
      {
        day: 6,
        title: 'Departure Day',
        description: 'Final day to pick up souvenirs before your departure transfer to the airport.',
        activities: ['Last-minute shopping', 'Airport transfer', 'Departure assistance']
      }
    ],
    inclusions: [
      'Luxury hotel accommodation (5 nights)',
      'Daily breakfast and selected meals',
      'Private air-conditioned transportation',
      'English-speaking guide specialized in photography spots',
      'Special access to content creation locations',
      'Desert safari with professional photographer',
      'Burj Khalifa VIP access',
      'Dubai Marina yacht cruise',
      'All entrance fees to mentioned attractions',
      'Airport transfers'
    ],
    exclusions: [
      'International airfare',
      'Travel insurance',
      'Personal expenses',
      'Meals not mentioned in inclusions',
      'Tips for guides and drivers',
      'Optional activities'
    ],
    faqs: [
      {
        question: 'Is this package suitable for solo content creators?',
        answer: 'Yes, this package is perfect for solo content creators. We provide individual attention and can customize the itinerary to focus on your specific content needs.'
      },
      {
        question: 'Will I have time to edit and post content during the trip?',
        answer: 'Yes, the itinerary is designed with content creators in mind. We include downtime at the hotel where you can edit and post your content. The hotel also provides high-speed WiFi.'
      },
      {
        question: 'Do you provide any equipment for content creation?',
        answer: 'While we don\'t provide cameras or recording equipment, our professional photographer during the desert safari will share their photos with you. We can also arrange equipment rental at an additional cost.'
      },
      {
        question: 'Can I get special permission to film in restricted areas?',
        answer: 'We can help arrange filming permits for certain locations, but this requires advance notice and may incur additional fees. Please inform us at least 30 days before your trip.'
      }
    ]
  },
  {
    id: 2,
    title: 'Tropical Bali Retreat',
    location: 'Bali, Indonesia',
    country: 'Indonesia',
    duration: '7 Days / 6 Nights',
    price: '₹70,000',
    priceNumber: 70000,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542897644-e04428948020?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'international',
    features: ['Private Villa', 'Rice Terrace Visit', 'Water Temple Tour', 'Content Creation Workshop'],
    specialForInfluencers: true,
    description: 'Discover the tropical paradise of Bali with our exclusive retreat designed for content creators and influencers. Stay in a luxurious private villa with Instagram-worthy backdrops at every turn. From lush rice terraces to ancient temples and pristine beaches, Bali offers endless opportunities for creating stunning content that will captivate your audience.',
    highlights: [
      'Private villa with infinity pool for exclusive content creation',
      'Visit to iconic Tegallalang Rice Terraces at sunrise',
      'Exclusive access to Lempuyang Temple (Gates of Heaven)',
      'Traditional Balinese cooking class for food content creators',
      'Secret waterfalls and beaches for unique photo opportunities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Villa Check-in',
        description: 'Arrive at Ngurah Rai International Airport and transfer to your private villa in Ubud. Enjoy a welcome dinner and spa treatment.',
        activities: ['Airport pickup', 'Private villa check-in', 'Welcome dinner', 'Complimentary massage']
      },
      {
        day: 2,
        title: 'Ubud & Sacred Monkey Forest',
        description: 'Explore the cultural heart of Bali with visits to the Sacred Monkey Forest, local art markets, and a traditional dance performance.',
        activities: ['Sacred Monkey Forest', 'Ubud Art Market', 'Ubud Palace', 'Traditional Balinese dance show']
      },
      {
        day: 3,
        title: 'Rice Terraces & Water Temples',
        description: 'Early morning visit to Tegallalang Rice Terraces followed by tours of Bali\'s famous water temples.',
        activities: ['Sunrise at Tegallalang Rice Terraces', 'Tirta Empul Temple', 'Ulun Danu Beratan Temple', 'Coffee plantation visit']
      },
      {
        day: 4,
        title: 'East Bali Exploration',
        description: 'Journey to East Bali to visit the famous Gates of Heaven at Lempuyang Temple and the water palaces.',
        activities: ['Lempuyang Temple (Gates of Heaven)', 'Tirta Gangga Water Palace', 'Ujung Water Palace', 'Traditional village visit']
      },
      {
        day: 5,
        title: 'Beach Day & Sunset Session',
        description: 'Relax at some of Bali\'s most beautiful beaches and capture the perfect sunset content.',
        activities: ['Beach club day pass', 'Professional sunset photoshoot', 'Seafood dinner on the beach', 'Night market exploration']
      },
      {
        day: 6,
        title: 'Content Creation Workshop & Free Time',
        description: 'Morning workshop on content creation strategies followed by free time to revisit favorite spots.',
        activities: ['Content creation workshop', 'Free time for personal shooting', 'Farewell dinner with traditional entertainment']
      },
      {
        day: 7,
        title: 'Departure Day',
        description: 'Final morning in Bali before your departure transfer to the airport.',
        activities: ['Last-minute shopping', 'Airport transfer', 'Departure assistance']
      }
    ],
    inclusions: [
      'Luxury private villa accommodation (6 nights)',
      'Daily breakfast and selected meals',
      'Private air-conditioned transportation',
      'English-speaking guide with knowledge of best photo spots',
      'Content creation workshop',
      'Entrance fees to all attractions',
      'Professional photoshoot session',
      'Airport transfers',
      'Welcome dinner and farewell dinner'
    ],
    exclusions: [
      'International airfare',
      'Travel insurance',
      'Personal expenses',
      'Meals not mentioned in inclusions',
      'Tips for guides and drivers',
      'Optional activities'
    ],
    faqs: [
      {
        question: 'What is the best time to visit Bali for photography?',
        answer: 'The dry season (April to October) is generally the best time for photography in Bali. The light is beautiful, and there\'s less chance of rain interfering with your shoots.'
      },
      {
        question: 'Is high-speed internet available at the villa?',
        answer: 'Yes, all our villas are equipped with high-speed fiber internet, perfect for uploading content and staying connected with your audience.'
      },
      {
        question: 'Are drones allowed at the locations we\'ll visit?',
        answer: 'Drone regulations vary by location in Bali. Many temples and tourist areas prohibit drones, but your guide will advise on suitable locations where drone photography is permitted.'
      },
      {
        question: 'Can I extend my stay at the villa?',
        answer: 'Yes, subject to availability, you can extend your stay at the villa. Please let us know in advance, and we can arrange this for you at special rates.'
      }
    ]
  },
  {
    id: 3,
    title: 'Amazing Thailand',
    location: 'Bangkok & Phuket, Thailand',
    country: 'Thailand',
    duration: '8 Days / 7 Nights',
    price: '₹65,000',
    priceNumber: 65000,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'international',
    features: ['Island Hopping', 'Thai Cooking Class', 'Luxury Resort', 'Night Market Tour'],
    specialForInfluencers: true,
    description: 'Experience the best of Thailand with our comprehensive tour covering the bustling streets of Bangkok and the paradise islands of Phuket. This package is specially designed for content creators looking to capture the perfect blend of culture, cuisine, and natural beauty. From ancient temples to crystal-clear waters, Thailand offers diverse backdrops for creating compelling content.',
    highlights: [
      'Exclusive early morning access to temples before tourist crowds',
      'Luxury speedboat tour of Phi Phi Islands with private beach time',
      'Floating market experience with local guide',
      'Rooftop bar sunset sessions in Bangkok',
      'Private Thai cooking class with market tour'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bangkok',
        description: 'Arrive at Suvarnabhumi Airport and transfer to your hotel in Bangkok. Evening orientation and welcome dinner.',
        activities: ['Airport pickup', 'Hotel check-in', 'Bangkok orientation', 'Welcome dinner at rooftop restaurant']
      },
      {
        day: 2,
        title: 'Bangkok Temple Tour',
        description: 'Early morning visit to Bangkok\'s most iconic temples before the crowds arrive, perfect for content creation.',
        activities: ['Grand Palace & Wat Phra Kaew', 'Wat Pho (Reclining Buddha)', 'Wat Arun (Temple of Dawn)', 'Long-tail boat canal tour']
      },
      {
        day: 3,
        title: 'Floating Markets & City Life',
        description: 'Visit the famous floating markets outside Bangkok and explore the city\'s vibrant urban culture.',
        activities: ['Damnoen Saduak Floating Market', 'Jim Thompson House', 'MBK and Siam shopping', 'Evening street food tour']
      },
      {
        day: 4,
        title: 'Bangkok to Phuket',
        description: 'Morning flight to Phuket and transfer to your beachfront resort. Afternoon free for beach content creation.',
        activities: ['Domestic flight', 'Resort check-in', 'Beach time', 'Sunset cocktails']
      },
      {
        day: 5,
        title: 'Phi Phi Islands Adventure',
        description: 'Full-day speedboat tour of the stunning Phi Phi Islands with opportunities for amazing water content.',
        activities: ['Maya Bay visit', 'Snorkeling in crystal waters', 'Monkey Beach', 'Viking Cave', 'Pileh Lagoon']
      },
      {
        day: 6,
        title: 'Phuket Exploration',
        description: 'Discover Phuket Island\'s cultural and natural attractions with plenty of content opportunities.',
        activities: ['Big Buddha visit', 'Old Phuket Town walking tour', 'Kata Viewpoint', 'Traditional Thai massage']
      },
      {
        day: 7,
        title: 'Free Day & Cooking Class',
        description: 'Morning free time followed by an authentic Thai cooking class to create food content.',
        activities: ['Morning at leisure', 'Local market visit', 'Thai cooking class', 'Farewell dinner']
      },
      {
        day: 8,
        title: 'Departure Day',
        description: 'Final morning in Thailand before your departure transfer to the airport.',
        activities: ['Last-minute shopping', 'Airport transfer', 'Departure assistance']
      }
    ],
    inclusions: [
      '4-star hotel accommodation in Bangkok (3 nights)',
      'Luxury beachfront resort in Phuket (4 nights)',
      'Daily breakfast and selected meals',
      'Domestic flight from Bangkok to Phuket',
      'Private transportation in both cities',
      'English-speaking guides with photography expertise',
      'Phi Phi Islands speedboat tour',
      'Thai cooking class',
      'Temple entrance fees',
      'Airport transfers'
    ],
    exclusions: [
      'International airfare',
      'Travel insurance',
      'Personal expenses',
      'Meals not mentioned in inclusions',
      'Tips for guides and drivers',
      'Optional activities'
    ],
    faqs: [
      {
        question: 'What is the ideal content creation schedule in Thailand?',
        answer: 'Early mornings (6-8 AM) are best for temple visits and cultural sites to avoid crowds, while late afternoons (4-6 PM) offer the best light for beach and sunset content.'
      },
      {
        question: 'Are there any cultural sensitivity issues I should be aware of when creating content?',
        answer: 'Yes, when visiting temples, shoulders and knees must be covered. Always ask permission before photographing monks or local people. Some temples also restrict certain types of posed photos.'
      },
      {
        question: 'Is it safe to bring expensive camera equipment?',
        answer: 'Thailand is generally safe for traveling with camera equipment, but we recommend normal precautions. Your hotels will have safes, and our guides can advise on secure storage during various activities.'
      },
      {
        question: 'Will there be opportunities to collaborate with local Thai influencers?',
        answer: 'Upon request, we can arrange meetings with local Thai influencers for potential collaborations, though this may incur additional costs and requires advance notice.'
      }
    ]
  },
  {
    id: 4,
    title: 'Majestic Kashmir',
    location: 'Srinagar & Gulmarg, India',
    country: 'India',
    duration: '5 Days / 4 Nights',
    price: '₹35,000',
    priceNumber: 35000,
    image: 'https://images.unsplash.com/photo-1566837497312-7be4486cf6a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589365252845-092198ba5474?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1626183421113-cc9dde0aa77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1603283370754-acb8c99a9d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1601811169180-1e13e654d5fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'domestic',
    features: ['Shikara Ride', 'Gondola Cable Car', 'Houseboat Stay', 'Photography Tour'],
    specialForInfluencers: true,
    description: 'Experience the paradise on earth with our specially curated Kashmir tour for content creators. From the serene Dal Lake to the snow-capped mountains of Gulmarg, this tour offers breathtaking backdrops for your photography and videos. Stay in traditional houseboats, capture the local culture, and create content that will transport your audience to this magical destination.',
    highlights: [
      'Authentic houseboat stay on Dal Lake with mountain views',
      'Exclusive sunrise Shikara ride with professional guide',
      'Gulmarg Gondola ride to one of the highest cable cars in the world',
      'Traditional Kashmiri cuisine experiences',
      'Interactions with local artisans for cultural content'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        description: 'Arrive at Srinagar Airport and transfer to your houseboat on Dal Lake. Evening Shikara ride to capture sunset.',
        activities: ['Airport pickup', 'Houseboat check-in', 'Evening Shikara ride', 'Welcome Kashmiri dinner']
      },
      {
        day: 2,
        title: 'Srinagar Exploration',
        description: 'Full day exploring Srinagar\'s gardens, markets, and cultural sites with a focus on content creation.',
        activities: ['Mughal Gardens visit', 'Old City walking tour', 'Local craft workshops', 'Floating vegetable market']
      },
      {
        day: 3,
        title: 'Gulmarg Adventure',
        description: 'Day trip to Gulmarg with its stunning mountain scenery and adventure activities.',
        activities: ['Gondola cable car ride', 'Panoramic mountain views', 'Seasonal activities (skiing in winter/trekking in summer)', 'Local Kashmiri lunch']
      },
      {
        day: 4,
        title: 'Pahalgam Valley',
        description: 'Visit the beautiful Pahalgam Valley with its rivers, mountains, and meadows.',
        activities: ['Lidder River photoshoot', 'Betaab Valley exploration', 'Aru Valley visit', 'Optional horseback riding']
      },
      {
        day: 5,
        title: 'Departure Day',
        description: 'Final morning on the houseboat before your departure transfer to the airport.',
        activities: ['Sunrise on Dal Lake', 'Last-minute shopping', 'Airport transfer']
      }
    ],
    inclusions: [
      'Deluxe houseboat accommodation (4 nights)',
      'Daily breakfast and dinner',
      'Private transportation with experienced driver',
      'English-speaking guide with knowledge of photography spots',
      'Shikara rides on Dal Lake',
      'Gondola ticket in Gulmarg (Phase 1)',
      'All entrance fees to gardens and monuments',
      'Airport transfers'
    ],
    exclusions: [
      'Airfare to/from Srinagar',
      'Travel insurance',
      'Personal expenses',
      'Lunches',
      'Tips for guides and drivers',
      'Optional activities',
      'Gondola Phase 2 ticket (can be arranged on-site)'
    ],
    faqs: [
      {
        question: 'What is the best season to visit Kashmir for photography?',
        answer: 'Kashmir offers unique photography opportunities in every season. Spring (April-May) features blooming gardens, summer (June-August) offers lush green landscapes, autumn (September-November) has golden hues, and winter (December-February) showcases snow-covered wonderlands.'
      },
      {
        question: 'How is the internet connectivity for uploading content?',
        answer: 'Internet connectivity in Kashmir can be intermittent, especially in remote areas. Houseboats typically offer WiFi, but speeds may vary. We recommend bringing portable data options as backup.'
      },
      {
        question: 'Are there any photography restrictions in Kashmir?',
        answer: 'Photography is generally permitted in tourist areas, but there may be restrictions around military installations and some government buildings. Your guide will advise on specific locations.'
      },
      {
        question: 'Is it possible to extend the stay on the houseboat?',
        answer: 'Yes, subject to availability, you can extend your stay on the houseboat. We recommend booking extensions in advance during peak season (April-June and October-November).'
      }
    ]
  },
  {
    id: 5,
    title: 'Goa Beach Holiday',
    location: 'North & South Goa, India',
    country: 'India',
    duration: '4 Days / 3 Nights',
    price: '₹25,000',
    priceNumber: 25000,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1451810703499-3b5b8ebb4305?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470198563436-cad3d2ede365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'domestic',
    features: ['Beach Parties', 'Water Sports', 'Beachside Resort', 'Cruise Experience'],
    specialForInfluencers: false,
    description: 'Enjoy the perfect blend of relaxation and excitement in Goa. This package takes you to both North and South Goa, allowing you to experience the energetic beach parties and water sports as well as the serene beaches and Portuguese architecture. An ideal destination for creating diverse content, from vibrant nightlife to peaceful sunsets.',
    highlights: [
      'Stay at a premium beachfront resort',
      'North Goa beach hopping and nightlife experience',
      'South Goa\'s pristine beaches and Portuguese heritage',
      'Sunset cruise with dinner and entertainment',
      'Adventure water sports package'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & North Goa Beaches',
        description: 'Arrive at Goa Airport and transfer to your beachfront resort. Afternoon beach hopping in North Goa.',
        activities: ['Airport pickup', 'Resort check-in', 'Calangute & Baga beach visit', 'Evening at Tito\'s lane']
      },
      {
        day: 2,
        title: 'Water Sports & Old Goa',
        description: 'Morning water sports activities followed by cultural exploration of Old Goa\'s Portuguese heritage.',
        activities: ['Parasailing, jet skiing & banana boat', 'Basilica of Bom Jesus', 'Se Cathedral', 'Spice plantation visit with lunch']
      },
      {
        day: 3,
        title: 'South Goa Exploration',
        description: 'Day trip to the serene beaches and historical sites of South Goa.',
        activities: ['Palolem & Agonda beach visit', 'Cabo de Rama Fort', 'Beachside seafood lunch', 'Sunset dinner cruise']
      },
      {
        day: 4,
        title: 'Departure Day',
        description: 'Morning at leisure before your departure transfer to the airport.',
        activities: ['Beach time', 'Last-minute shopping', 'Airport transfer']
      }
    ],
    inclusions: [
      'Beachfront resort accommodation (3 nights)',
      'Daily breakfast',
      'Private air-conditioned transportation',
      'Water sports package (parasailing, jet ski, banana boat)',
      'Sunset dinner cruise',
      'Spice plantation visit with lunch',
      'Airport transfers'
    ],
    exclusions: [
      'Airfare to/from Goa',
      'Travel insurance',
      'Personal expenses',
      'Meals not mentioned in inclusions',
      'Tips for guides and drivers',
      'Optional activities',
      'Alcoholic beverages'
    ],
    faqs: [
      {
        question: 'When is the best time to visit Goa?',
        answer: 'The best time to visit Goa is from November to February when the weather is pleasant and perfect for beach activities. The water is clear, making it ideal for underwater photography.'
      },
      {
        question: 'Are the beaches in Goa good for content creation?',
        answer: 'Yes, Goa\'s beaches offer diverse backdrops from bustling beach shacks in North Goa to serene, less crowded shores in South Goa. Golden hour (sunrise and sunset) provides exceptional lighting for beach content.'
      },
      {
        question: 'Is it safe to carry expensive camera equipment on the beaches?',
        answer: 'While Goa is generally safe, we recommend keeping an eye on your equipment, especially in crowded areas. The resort provides secure storage, and our drivers ensure vehicle security during beach visits.'
      },
      {
        question: 'Can we visit the famous beach clubs and parties?',
        answer: 'Yes, we can arrange visits to popular beach clubs. Some exclusive venues may require advance reservations, which we can help organize. Featured clubs vary based on the season and current popularity.'
      }
    ]
  },
  {
    id: 6,
    title: 'Scenic Ladakh',
    location: 'Leh & Nubra Valley, India',
    country: 'India',
    duration: '7 Days / 6 Nights',
    price: '₹40,000',
    priceNumber: 40000,
    image: 'https://images.unsplash.com/photo-1589556264428-54a0bc53be0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626001684875-23978c8063c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554703869-da51b7aee05f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516720290926-4046de4f664d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583492646158-56de5f7e4883?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'domestic',
    features: ['Pangong Lake', 'Magnetic Hill', 'Monastery Visit', 'Camping Experience'],
    specialForInfluencers: false,
    description: 'Discover the breathtaking landscapes of Ladakh on this high-altitude adventure. From the crystal-clear blue waters of Pangong Lake to the ancient monasteries perched on hilltops, Ladakh offers some of the most dramatic and photogenic scenery in India. This tour is designed for those looking to capture the raw beauty of this Himalayan region.',
    highlights: [
      'Two days at Pangong Lake including an overnight stay',
      'Visit to the highest motorable pass in the world - Khardung La',
      'Monastery tour including Thiksey, Hemis, and Diskit',
      'Nubra Valley with sand dunes and double-humped camels',
      'Scenic drives through some of the world\'s most beautiful mountain landscapes'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Leh',
        description: 'Arrive at Leh Airport and transfer to your hotel. Rest day for acclimatization to the high altitude.',
        activities: ['Airport pickup', 'Hotel check-in', 'Rest and acclimatization', 'Brief orientation walk (if feeling well)']
      },
      {
        day: 2,
        title: 'Leh Local Sightseeing',
        description: 'Visit local attractions in and around Leh to begin your exploration while continuing to acclimatize.',
        activities: ['Leh Palace', 'Shanti Stupa', 'Leh Market', 'Hall of Fame museum']
      },
      {
        day: 3,
        title: 'Monastery Tour',
        description: 'Full day exploring the ancient monasteries around Leh Valley.',
        activities: ['Thiksey Monastery morning prayer ceremony', 'Hemis Monastery', 'Shey Palace', 'Stok Palace Museum']
      },
      {
        day: 4,
        title: 'Nubra Valley via Khardung La',
        description: 'Drive over the famous Khardung La Pass (18,380 ft) to the beautiful Nubra Valley.',
        activities: ['Khardung La Pass photostop', 'Diskit Monastery', 'Hunder sand dunes', 'Bactrian camel ride']
      },
      {
        day: 5,
        title: 'Nubra to Pangong Lake',
        description: 'Journey from Nubra Valley to the famous Pangong Lake, crossing the Shyok river route.',
        activities: ['Scenic drive through mountain passes', 'Pangong Lake arrival', 'Sunset photography session', 'Overnight at lake camps']
      },
      {
        day: 6,
        title: 'Pangong Lake to Leh',
        description: 'Morning at Pangong Lake before returning to Leh via Chang La Pass.',
        activities: ['Sunrise at Pangong Lake', 'Chang La Pass', 'Druk White Lotus School (3 Idiots school)', 'Farewell dinner in Leh']
      },
      {
        day: 7,
        title: 'Departure Day',
        description: 'Final morning in Leh before your departure transfer to the airport.',
        activities: ['Last-minute shopping', 'Airport transfer']
      }
    ],
    inclusions: [
      'Hotel accommodation in Leh (4 nights)',
      'Camp/guesthouse stay in Nubra (1 night)',
      'Camp stay at Pangong Lake (1 night)',
      'Daily breakfast and dinner',
      'Private vehicle with experienced Ladakh driver',
      'Oxygen cylinder and first aid kit in vehicle',
      'Inner Line Permits for restricted areas',
      'Monastery entrance fees',
      'Airport transfers'
    ],
    exclusions: [
      'Airfare to/from Leh',
      'Travel insurance',
      'Personal expenses',
      'Lunches',
      'Tips for guides and drivers',
      'Optional activities',
      'Camel rides in Hunder'
    ],
    faqs: [
      {
        question: 'How should I prepare for high altitude in Ladakh?',
        answer: 'Ladakh\'s average altitude is around 11,500 ft. We include two acclimatization days in Leh, but we recommend avoiding alcohol, staying hydrated, and consulting your doctor before the trip. Carry any prescribed altitude medication.'
      },
      {
        question: 'What is the best time for photography in Ladakh?',
        answer: 'The summer months (June-September) offer the best weather conditions with clear blue skies. For landscape photography, early morning and late afternoon provide the best light. Stars and night sky photography is exceptional due to minimal light pollution.'
      },
      {
        question: 'Will there be electricity at the camps?',
        answer: 'Our camps at Pangong and Nubra have electricity, usually available from evening until early morning. We recommend bringing portable power banks and extra batteries for your equipment.'
      },
      {
        question: 'How cold does it get at night?',
        answer: 'Even in summer, temperatures can drop to near freezing at night, especially at Pangong Lake. The camps provide warm bedding, but bring warm clothes for evening photography sessions.'
      }
    ]
  }
];

// Function to get a tour by ID
export const getTourById = (id: number): Tour | undefined => {
  return tourData.find(tour => tour.id === id);
};

// Function to get all tours
export const getAllTours = (): Tour[] => {
  return tourData;
};
