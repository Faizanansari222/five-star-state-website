import {
  FiAward, FiFacebook, FiYoutube, FiTrendingUp, FiInstagram,
} from 'react-icons/fi';
import { AiFillTikTok } from 'react-icons/ai';
import {
  FaBuilding, FaHandshake, FaKey, FaChartLine,
  FaPaintBrush as FaPaint, FaBullhorn, FaShieldAlt,
  FaHeart, FaHome, FaCertificate, FaLeaf,
} from 'react-icons/fa';
import jLogo from '../assets/clients_LOGO/images.png';
import fgrfLogo from '../assets/clients_LOGO/FGRF_LOGO.png';
import saylaniLogo from '../assets/clients_LOGO/saylani_logo.png';

/* ═══════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════ */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

/* ═══════════════════════════════════════════════
   CITIES & PROJECTS
   ═══════════════════════════════════════════════ */
export const CITIES = [
  {
    id: 'karachi',
    name: 'Karachi',
    slug: 'karachi',
    image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800&q=80',
    description: 'Pakistan\'s largest city and economic hub, home to some of our most prestigious residential and commercial projects.',
  },
  {
    id: 'islamabad',
    name: 'Islamabad',
    slug: 'islamabad',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
    description: 'The capital city of Pakistan, offering premium investment opportunities in a well-planned metropolitan environment.',
  },
  {
    id: 'lahore',
    name: 'Lahore',
    slug: 'lahore',
    image: 'https://images.unsplash.com/photo-1580748142998-9cd33e5e7a96?w=800&q=80',
    description: 'The cultural heart of Pakistan, where heritage meets modern living through our thoughtfully designed projects.',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    slug: 'dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    description: 'Expanding our footprint internationally with premium investment opportunities in the world\'s most dynamic city.',
  },
];

export const PROJECTS = [
  // ── KARACHI ──
  {
    id: 'grand-mosque-view-tower',
    title: 'Grand Mosque View Tower',
    city: 'karachi',
    location: 'Bahria Town Karachi',
    type: 'Ongoing',
    area: 'Residential',
    price: 'PKR 1.2 Cr onwards',
    beds: '2-4 Bed',
    desc: 'This landmark residential project is currently underway, setting new standards in modern living. From luxurious amenities to sustainable design, every aspect is carefully curated to offer an unparalleled lifestyle experience near the Grand Mosque in Bahria Town Karachi.',
    longDesc: 'Grand Mosque View Tower is a premium residential development strategically located in the heart of Bahria Town Karachi, just a short distance from the iconic Grand Mosque. This project represents the pinnacle of modern architecture and thoughtful urban planning, offering residents a lifestyle that seamlessly blends luxury with convenience.\n\nThe tower features state-of-the-art amenities including a rooftop infinity pool, fully equipped gymnasium, landscaped gardens, 24/7 security, and dedicated parking. Each apartment is designed with premium finishes, spacious layouts, and panoramic views of the city skyline.\n\nWith flexible payment plans and high appreciation potential, Grand Mosque View Tower is not just a home — it\'s a smart investment in Pakistan\'s most sought-after real estate destination.',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    ],
    features: ['Modern Design', 'Prime Location', 'Luxury Amenities', '24/7 Security', 'Rooftop Pool', 'Smart Home'],
  },
  {
    id: 'usman-corner',
    title: 'Usman Corner',
    city: 'karachi',
    location: 'Jamshed Road, Karachi',
    type: 'Ongoing',
    area: '1200 Yards',
    price: 'PKR 2.5 Cr onwards',
    beds: 'Commercial & Residential',
    desc: 'Our mega project at Jamshed Road represents a pinnacle of prime real estate in Karachi. This exceptional 1200-yard development stands opposite the renowned Meerut Kabab House, offering a rare combination of luxury, convenience, and prime location.',
    longDesc: 'Usman Corner is a mixed-use development that redefines urban living on Jamshed Road, one of Karachi\'s most vibrant commercial corridors. Spanning 1200 yards with three sides open for optimal ventilation and natural light, this project is designed to be both a commercial powerhouse and a residential sanctuary.\n\nThe development features premium retail spaces on the ground and first floors, with luxury apartments on the upper floors. Each unit is crafted with attention to detail, featuring imported fittings, modular kitchens, and smart home integration.\n\nStrategically located opposite Meerut Kabab House, Usman Corner benefits from excellent connectivity to all major areas of Karachi, making it an ideal choice for businesses and families alike.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80',
    ],
    features: ['Three Sides Open', 'Commercial', 'Prime Location', 'Mixed Use', 'High ROI'],
  },
  {
    id: 'five-star-tower',
    title: 'Five Star Tower',
    city: 'karachi',
    location: 'Khalid bin Waleed Road, Karachi',
    type: 'Completed',
    area: 'Ground + 5',
    price: 'Sold Out',
    beds: 'Studio-3 Bed',
    desc: 'Located on the prestigious Khalid bin Waleed Road, beside Chase Value Centre. This architectural marvel boasts a unique and captivating elevation, making it a standout landmark on one of Karachi\'s most iconic roads.',
    longDesc: 'Five Star Tower is a completed architectural masterpiece situated on the iconic Khalid bin Waleed Road, one of Karachi\'s most prestigious addresses. Standing proudly beside Chase Value Centre, this ground-plus-five structure features a unique elevation that has become a recognizable landmark.\n\nThe tower offers a mix of studio, 1, 2, and 3-bedroom apartments, each designed with contemporary aesthetics and premium finishes. Residents enjoy access to a state-of-the-art gym, communal lounge, and 24/7 concierge service.\n\nWith a 100% occupancy rate and consistently high rental yields, Five Star Tower stands as testament to our commitment to delivering projects that offer exceptional returns on investment.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
    ],
    features: ['Landmark', 'Unique Elevation', 'Premium', 'High Rental Yield', '100% Occupied'],
  },
  {
    id: 'hussain-residency',
    title: 'Hussain Residency',
    city: 'karachi',
    location: 'Surjani Town, Karachi',
    type: 'Completed',
    area: '600 Sq Yards',
    price: 'PKR 85 Lac',
    beds: '4-5 Bed',
    desc: 'A luxurious completed project in the heart of Surjani Town. Sprawled across 600 square yards, it epitomizes luxury, comfort, and modern living.',
    longDesc: 'Hussain Residency is a masterpiece of residential architecture nestled in the heart of Surjani Town, Karachi. Sprawled across 600 square yards, this luxurious development epitomizes the perfect blend of comfort, elegance, and modern living.\n\nEvery detail of Hussain Residency has been carefully considered — from the spacious living areas and gourmet kitchen to the private garden and servant quarters. The project features premium marble flooring, imported fixtures, and energy-efficient systems throughout.\n\nMore than just a residence, Hussain Residency is a lifestyle statement for families who demand nothing but the best.',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    features: ['Luxury', '600 Sq Yards', 'Modern Design', 'Private Garden', 'Smart Systems'],
  },
  {
    id: '250-yards-housing',
    title: '250 Yards Residential Housing',
    city: 'karachi',
    location: 'Gulshan-e-Iqbal, Karachi',
    type: 'Ongoing',
    area: '250 Yards',
    price: 'PKR 65 Lac onwards',
    beds: '3-4 Bed',
    desc: 'Our commitment to affordable excellence shines through in this 250-yard project in Karachi\'s Gulshan-e-Iqbal Block 3 and 4, providing decent housing within reach.',
    longDesc: 'The 250 Yards Residential Housing project embodies our belief that quality housing should be accessible to everyone. Located in the well-established neighborhood of Gulshan-e-Iqbal Blocks 3 and 4, this project offers modern family homes at competitive prices.\n\nEach unit is designed to maximize space utilization while maintaining an airy, open feel. The development includes dedicated parking, children\'s play areas, and round-the-clock security.\n\nWith easy access to schools, hospitals, shopping centers, and public transport, this project is ideal for families looking for a comfortable home in a connected neighborhood.',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
    ],
    features: ['Affordable', 'Family Friendly', 'Modern Living', 'Gulshan-e-Iqbal'],
  },
  {
    id: 'five-star-commercial-plaza',
    title: 'Five Star Commercial Plaza',
    city: 'karachi',
    location: 'Clifton, Karachi',
    type: 'Completed',
    area: 'Commercial',
    price: 'Sold Out',
    beds: 'Shops & Offices',
    desc: 'A state-of-the-art commercial plaza in the heart of Clifton, offering premium retail and office spaces designed for modern businesses.',
    longDesc: 'Five Star Commercial Plaza is a premier business destination in the upscale Clifton neighborhood of Karachi. This state-of-the-art development offers premium retail shops on the lower floors and modern office spaces on the upper levels.\n\nThe plaza features contemporary architecture, high-speed elevators, backup power generation, and dedicated parking for tenants and visitors. Its prime location on a main commercial road ensures maximum foot traffic and visibility for businesses.\n\nFully occupied since its completion, Five Star Commercial Plaza continues to deliver exceptional rental returns, making it one of the most sought-after commercial addresses in Clifton.',
    img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=700&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    ],
    features: ['Commercial', 'Premium Location', 'Modern Facilities', 'High Foot Traffic'],
  },

  // ── ISLAMABAD ──
  {
    id: 'seven-wonders-enclave',
    title: 'Seven Wonders Enclave',
    city: 'islamabad',
    location: 'Islamabad Expressway',
    type: 'Ongoing',
    area: '5-10 Marla',
    price: 'PKR 1.5 Cr onwards',
    beds: '3-5 Bed',
    desc: 'A premium housing society inspired by the Seven Wonders of the World, offering luxury living with world-class amenities on Islamabad Expressway.',
    longDesc: 'Seven Wonders Enclave is a visionary housing project that brings world-class living to the twin cities. Located on the prime Islamabad Expressway, this gated community features themed areas inspired by the Seven Wonders of the World.\n\nThe project offers 5 to 10 marla residential plots and beautifully designed houses with modern architecture, smart home features, and eco-friendly construction. Residents enjoy access to themed parks, a community center, swimming pools, and 24/7 security.\n\nWith its strategic location offering easy access to Rawalpindi and Islamabad, Seven Wonders Enclave is an ideal investment for families seeking a premium lifestyle.',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    features: ['Gated Community', 'Themed Parks', 'Smart Homes', 'Eco-Friendly'],
  },
  {
    id: 'capital-view-residency',
    title: 'Capital View Residency',
    city: 'islamabad',
    location: 'F-11 Markaz, Islamabad',
    type: 'Ongoing',
    area: '1200-2500 sqft',
    price: 'PKR 2.8 Cr onwards',
    beds: '2-4 Bed',
    desc: 'Premium apartments in F-11 Markaz offering stunning views of the Margalla Hills with world-class amenities and unbeatable location.',
    longDesc: 'Capital View Residency is an exclusive residential project in the heart of F-11 Markaz, offering breathtaking views of the Margalla Hills. This luxury development combines modern architecture with the natural beauty of Islamabad.\n\nEach apartment features floor-to-ceiling windows, premium Italian marble flooring, imported kitchen appliances, and smart home automation. The building offers a rooftop lounge, fitness center, spa, and dedicated concierge services.\n\nLocated minutes from major roads, embassies, and the city center, Capital View Residency is the ultimate address for discerning professionals and families.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    ],
    features: ['Margalla Views', 'Smart Home', 'Premium Location', 'Concierge Service'],
  },

  // ── LAHORE ──
  {
    id: 'gulshan-e-iqbal-lahore',
    title: 'Gulshan-e-Iqbal Block 4',
    city: 'lahore',
    location: 'Gulshan-e-Iqbal, Lahore',
    type: 'Ongoing',
    area: '5-10 Marla',
    price: 'PKR 90 Lac onwards',
    beds: '3-4 Bed',
    desc: 'A well-planned residential community in Lahore offering affordable luxury with modern infrastructure and convenient location.',
    longDesc: 'Gulshan-e-Iqbal Block 4 in Lahore is a thoughtfully planned residential community that offers the perfect balance of affordability and modern living. Located in one of Lahore\'s most desirable areas, this project provides easy access to major roads, shopping centers, and educational institutions.\n\nThe development features beautifully designed houses with contemporary architecture, landscaped streets, and community parks. Each home is built with quality materials and modern construction techniques to ensure durability and comfort.\n\nWith flexible payment plans and a prime location, this project is an excellent opportunity for families and investors looking to secure their future in Lahore\'s thriving real estate market.',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    features: ['Affordable', 'Modern Infrastructure', 'Community Parks', 'Prime Location'],
  },
  {
    id: 'north-town-residency',
    title: 'North Town Residency Phase 4',
    city: 'lahore',
    location: 'Canal Road, Lahore',
    type: 'Ongoing',
    area: '3-5 Marla',
    price: 'PKR 55 Lac onwards',
    beds: '2-3 Bed',
    desc: 'Compact yet luxurious apartments on Canal Road, Lahore — perfect for young professionals and small families seeking quality urban living.',
    longDesc: 'North Town Residency Phase 4 brings affordable luxury to Canal Road, one of Lahore\'s most connected corridors. This phase of the popular North Town development offers compact yet beautifully designed apartments perfect for young professionals and small families.\n\nEach unit maximizes space with intelligent layouts, modern kitchens, and stylish bathrooms. The building features a rooftop garden, fitness center, and communal lounge areas.\n\nWith its unbeatable location near universities, hospitals, and commercial areas, North Town Residency Phase 4 offers an unmatched lifestyle at an accessible price point.',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    ],
    features: ['Compact Luxury', 'Canal Road', 'Rooftop Garden', 'Fitness Center'],
  },

  // ── DUBAI ──
  {
    id: 'shangrila-city-dubai',
    title: 'Shangrila City',
    city: 'dubai',
    location: 'Dubai Investment Park',
    type: 'Ongoing',
    area: 'Studio-3 Bed',
    price: 'AED 450K onwards',
    beds: 'Studio-3 Bed',
    desc: 'A premium residential community in Dubai Investment Park offering world-class amenities, stunning architecture, and exceptional investment returns.',
    longDesc: 'Shangrila City is an ambitious residential development in Dubai Investment Park, designed to offer a resort-style living experience in the heart of the city. This master-planned community features luxurious apartments, townhouses, and villas surrounded by lush landscaping and water features.\n\nResidents enjoy access to world-class amenities including a championship golf course, infinity pools, spa facilities, international schools, and retail promenades. The development is strategically located near Al Maktoum International Airport and major highways.\n\nWith its competitive pricing and high rental yields, Shangrila City represents an exceptional investment opportunity in Dubai\'s thriving real estate market.',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
      'https://images.unsplash.com/photo-1580748142998-9cd33e5e7a96?w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    ],
    features: ['Resort Living', 'Golf Course', 'High ROI', 'Airport Proximity'],
  },
  {
    id: 'marina-heights-dubai',
    title: 'Marina Heights',
    city: 'dubai',
    location: 'Dubai Marina',
    type: 'Completed',
    area: '1-3 Bed',
    price: 'AED 1.2M onwards',
    beds: '1-3 Bed',
    desc: 'Luxury waterfront living in Dubai Marina with stunning sea views, premium finishes, and world-class marina amenities.',
    longDesc: 'Marina Heights is a premium waterfront development in the heart of Dubai Marina, offering residents an unparalleled lifestyle with stunning views of the Arabian Gulf and the iconic Dubai skyline.\n\nEach apartment features floor-to-ceiling windows, premium European finishes, smart home technology, and private balconies with breathtaking views. The development includes a private beach access, infinity pool, state-of-the-art gym, and 24/7 concierge service.\n\nLocated steps from The Walk at JBR and a short drive from Dubai Mall and Downtown Dubai, Marina Heights offers the ultimate in luxury marina living.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    ],
    features: ['Waterfront', 'Sea Views', 'Marina Access', 'Premium Finishes'],
  },
];

export const PROJECT_FILTERS = ['All', 'Ongoing', 'Completed'];

/* ═══════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════ */
export const SERVICES = [
  {
    icon: FaBuilding,
    title: 'Construction',
    desc: 'From conceptualization to realization, our construction services bring architectural visions to life, combining creativity, quality, and functionality.',
  },
  {
    icon: FaHandshake,
    title: 'Sale / Purchase',
    desc: 'Our expert team facilitates seamless property transactions, guiding clients through buying or selling with transparency and expertise.',
  },
  {
    icon: FaKey,
    title: 'Rental Solutions',
    desc: 'Finding the perfect rental space is effortless. We connect tenants to their ideal homes and property owners to responsible tenants.',
  },
  {
    icon: FaHome,
    title: 'Property Management',
    desc: 'Our property management services make ownership stress-free and profitable. We handle every aspect including seamless rental collection.',
  },
  {
    icon: FaChartLine,
    title: 'Property Investments',
    desc: 'Tailored investment services empowering you with strategic insights and opportunities for short and long-term financial growth.',
  },
  {
    icon: FaPaint,
    title: 'Interior / Exterior Decor',
    desc: 'Our interior and exterior décor services bring places to life, transforming them into captivating environments reflecting your style.',
  },
  {
    icon: FaBullhorn,
    title: 'Marketing',
    desc: 'Trusted marketing partners representing exceptional projects by HMR, GFS Builders, Saima Builders, Bahria Town, and more.',
  },
];

/* ═══════════════════════════════════════════════
   TEAM
   ═══════════════════════════════════════════════ */
export const TEAM = [
  {
    name: 'Haji Amin Bakhrani',
    role: 'CEO Five Star Group',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    socials: { facebook: '#', linkedin: '#' },
  },
  {
    name: 'Mubeen Amin',
    role: 'Construction Department',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    socials: { facebook: '#', linkedin: '#' },
  },
  {
    name: 'Naveed Amin',
    role: 'Sales Department',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    socials: { facebook: '#', linkedin: '#' },
  },
  {
    name: 'Waqas Raza Attari',
    role: 'Marketing Manager',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    socials: { facebook: '#', linkedin: '#' },
  },
];

/* ═══════════════════════════════════════════════
   CLIENTS
   ═══════════════════════════════════════════════ */
export const CLIENTS = [
  { name: 'J.', logo: jLogo },
  { name: 'Saylani Welfare', logo: saylaniLogo },
  { name: 'Dawateislami', logo: null },
  { name: 'FGRF', logo: fgrfLogo },
  { name: "Rivaj Men's Wear", logo: null },
];

/* ═══════════════════════════════════════════════
   CORE VALUES
   ═══════════════════════════════════════════════ */
export const CORE_VALUES = [
  { icon: FiAward, title: 'Integrity', desc: 'We uphold the highest standards of honesty and transparency in every interaction.' },
  { icon: FaShieldAlt, title: 'Quality', desc: 'Excellence is not just a goal but a standard we maintain in every project.' },
  { icon: FiTrendingUp, title: 'Innovation', desc: 'Embracing new technologies and methods to stay at the forefront of real estate.' },
  { icon: FaHandshake, title: 'Collaboration', desc: 'Working together with clients and partners to achieve shared success.' },
  { icon: FaLeaf, title: 'Sustainability', desc: 'Committed to eco-friendly practices for a better tomorrow.' },
  { icon: FaHeart, title: 'Client Centricity', desc: 'Every decision we make centers around delivering value to our clients.' },
];

/* ═══════════════════════════════════════════════
   CERTIFICATIONS
   ═══════════════════════════════════════════════ */
export const CERTIFICATIONS = [
  { label: 'SBCA Certified', desc: 'Sindh Building Control Authority' },
  { label: 'ABAD Licensed', desc: 'Association of Builders & Developers' },
  { label: 'Local Authority Approved', desc: 'Various authorities in Karachi' },
];

/* ═══════════════════════════════════════════════
   CSR ACTIVITIES
   ═══════════════════════════════════════════════ */
export const CSR_ACTIVITIES = [
  'Building Quranic Centres',
  'Food Aid Programs',
  'Monthly Household Support',
  'Flood Victim Housing',
  'Orphan Education Sponsorship',
  'Animal Welfare',
  'Environmental Protection',
  'Community Development',
];

/* ═══════════════════════════════════════════════
   SOCIAL LINKS
   ═══════════════════════════════════════════════ */
export const SOCIAL_LINKS = [
  { icon: FiFacebook, href: 'https://www.facebook.com/fivestarestate26/', label: 'Facebook' },
  { icon: FiYoutube, href: 'https://www.youtube.com/@fivestarestate1', label: 'YouTube' },
  { icon: FiInstagram, href: 'https://www.instagram.com/fivestarestate.pk?igsi=ZXk5aXR3d3NwODcx', label: 'Instagram' },
  { icon: AiFillTikTok, href: 'https://www.tiktok.com/@fivestarestate1', label: 'TikTok' },
];

/* ═══════════════════════════════════════════════
   CONTACT INFO
   ═══════════════════════════════════════════════ */
export const CONTACT = {
  address: 'Office #123, Clifton, Karachi, Pakistan',
  phone: '+92 300 123 4567',
  email: 'info@fivestarestate.pk',
};

/* ═══════════════════════════════════════════════
   CEO QUOTE
   ═══════════════════════════════════════════════ */
export const CEO_QUOTE = {
  text: "Our success is deeply rooted in our values — Integrity, Quality, Innovation, Collaboration, Sustainability, and Client Centricity. These principles guide us in every endeavor.",
  name: 'Haji Amin Bakhrani',
  title: 'CEO Five Star Group',
};
