const navLinks = [
  { id: "cocktails", title: "Cocktails" },
  { id: "about", title: "About Us" },
  { id: "art", title: "The Art" },
  { id: "menu", title: "Menu" },
  { id: "testimonials", title: "Reviews" },
  { id: "events", title: "Events" },
  { id: "team", title: "Team" },
  { id: "faq", title: "FAQ" },
  { id: "gallery", title: "Gallery" },
  { id: "contact", title: "Contact" },
];

const cocktailLists = [
  { name: "Chapel Hill Shiraz", country: "AU", detail: "Bottle", price: "£35" },
  { name: "Caten Malbee", country: "AU", detail: "Bottle", price: "£27" },
  { name: "Rhino Pale Ale", country: "CA", detail: "750 ml", price: "£5" },
  { name: "Irish Guinness", country: "IE", detail: "600 ml", price: "£6" },
];

const mockTailLists = [
  { name: "Tropical Bloom", country: "US", detail: "Bottle", price: "£7" },
  { name: "Passionfruit Mint", country: "US", detail: "Bottle", price: "£8" },
  { name: "Citrus Glow", country: "CA", detail: "750 ml", price: "£15" },
  { name: "Lavender Fizz", country: "IE", detail: "600 ml", price: "£9" },
];

const profileLists = [
  { imgPath: "/images/profile1.png" },
  { imgPath: "/images/profile2.png" },
  { imgPath: "/images/profile3.png" },
  { imgPath: "/images/profile4.png" },
];

const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
];

const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "Mon-Thu", time: "11:00am - 12am" },
  { day: "Fri", time: "11:00am - 2am" },
  { day: "Sat", time: "9:00am - 2am" },
  { day: "Sun", time: "9:00am - 1am" },
];

const socials = [
  { name: "Instagram", icon: "/images/insta.png", url: "#" },
  { name: "X (Twitter)", icon: "/images/x.png", url: "#" },
  { name: "Facebook", icon: "/images/fb.png", url: "#" },
];

const sliderLists = [
  {
    id: 1, name: "Classic Mojito", image: "/images/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description: "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 2, name: "Raspberry Mojito", image: "/images/drink2.png",
    title: "A Zesty Classic That Never Fails",
    description: "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it's always crisp & refreshing.",
  },
  {
    id: 3, name: "Violet Breeze", image: "/images/drink3.png",
    title: "Simple Ingredients, Bold Flavor",
    description: "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 4, name: "Curacao Mojito", image: "/images/drink4.png",
    title: "Crafted With Care, Poured With Love",
    description: "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    quote: "The best cocktails in town! The mojito is absolutely divine. The atmosphere is unmatched, and the bartenders truly know their craft.",
    rating: 5,
    img: "/images/profile1.png",
  },
  {
    name: "Michael Chen",
    role: "Food & Drink Blogger",
    quote: "Velvet Pour redefines what a cocktail bar should be. Every drink tells a story. The attention to detail is remarkable.",
    rating: 5,
    img: "/images/profile2.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Event Planner",
    quote: "We booked Velvet Pour for our corporate event and it was phenomenal. The staff was professional and the custom cocktail menu was a hit.",
    rating: 5,
    img: "/images/profile3.png",
  },
  {
    name: "David Thompson",
    role: "Hospitality Critic",
    quote: "An extraordinary experience from start to finish. The passion for mixology shines through every single creation they serve.",
    rating: 4,
    img: "/images/profile4.png",
  },
];

const events = [
  {
    title: "Live Jazz Night",
    desc: "Every Thursday, enjoy live jazz performances while sipping our signature cocktails. Music starts at 8 PM.",
    date: "Every Thursday",
    time: "8 PM - 11 PM",
  },
  {
    title: "Mixology Workshop",
    desc: "Learn the art of cocktail making from our master bartenders. Perfect for date nights and group outings.",
    date: "Every Saturday",
    time: "3 PM - 5 PM",
  },
  {
    title: "Happy Hour",
    desc: "Enjoy 2-for-1 on all classic cocktails and half-price appetizers. The perfect way to unwind after work.",
    date: "Mon-Fri",
    time: "5 PM - 7 PM",
  },
  {
    title: "Seasonal Tasting Menu",
    desc: "A curated five-course cocktail tasting experience featuring our latest seasonal creations. Limited seating available.",
    date: "First Friday Monthly",
    time: "7 PM - 9 PM",
  },
];

const teamMembers = [
  {
    name: "Marco Rossi",
    role: "Head Mixologist",
    bio: "With 15 years of experience, Marco crafts cocktails that are both innovative and timeless. He's won multiple national bartending competitions.",
    img: "/images/abt1.png",
  },
  {
    name: "Priya Sharma",
    role: "Bar Manager",
    bio: "Priya brings 10 years of hospitality expertise and a passion for creating unforgettable guest experiences. She curates our seasonal menu.",
    img: "/images/profile2.png",
  },
  {
    name: "James O'Brien",
    role: "Senior Bartender",
    bio: "James specializes in whiskey and bourbon cocktails. His knowledge of spirits is unparalleled, and he loves educating guests on their drinks.",
    img: "/images/abt5.png",
  },
  {
    name: "Aiko Tanaka",
    role: "Sommelier & Mixologist",
    bio: "Aiko blends her expertise in wine with innovative cocktail techniques, creating unique flavor combinations that surprise and delight.",
    img: "/images/profile4.png",
  },
];

const faqItems = [
  {
    q: "Do I need a reservation?",
    a: "While walk-ins are always welcome, we recommend reserving a table for weekends and special events to guarantee your spot.",
  },
  {
    q: "Do you serve food?",
    a: "Yes! We offer a carefully curated menu of small plates, appetizers, and bar snacks designed to pair perfectly with our cocktails.",
  },
  {
    q: "Can I book the bar for private events?",
    a: "Absolutely! We host private events for groups of 20-100 guests. Contact us for custom catering and cocktail menu options.",
  },
  {
    q: "Do you offer non-alcoholic options?",
    a: "Yes! Our mocktail menu features creative, alcohol-free alternatives that are just as delicious and beautifully presented as our cocktails.",
  },
  {
    q: "What is your dress code?",
    a: "We encourage smart casual attire. Feel free to dress up — our bar provides the perfect backdrop for a night out.",
  },
  {
    q: "Do you accept walk-in groups?",
    a: "Small groups of up to 6 people are welcome as walk-ins. For larger parties, we recommend booking in advance.",
  },
  {
    q: "Is there parking available?",
    a: "We offer valet parking on weekends. Street parking and several nearby garages are also available throughout the week.",
  },
  {
    q: "Can I buy gift vouchers?",
    a: "Yes! Gift vouchers are available for any amount and can be used towards drinks, food, or our mixology workshops.",
  },
];

const galleryImages = [
  { src: "/images/abt1.png", alt: "Bartender making a cocktail" },
  { src: "/images/abt2.png", alt: "Happy customers at the bar" },
  { src: "/images/abt3.png", alt: "Line of colorful cocktails" },
  { src: "/images/abt4.png", alt: "Cocktail with fruit garnishes" },
  { src: "/images/abt5.png", alt: "Bartender pouring a drink" },
  { src: "/images/under-img.jpg", alt: "Bartender pouring a mojito" },
  { src: "/images/drink1.png", alt: "Classic mojito" },
  { src: "/images/drink2.png", alt: "Raspberry mojito" },
  { src: "/images/drink3.png", alt: "Violet breeze cocktail" },
  { src: "/images/drink4.png", alt: "Curacao mojito" },
];

export {
  navLinks, cocktailLists, mockTailLists, profileLists,
  featureLists, goodLists, openingHours, storeInfo, socials,
  sliderLists, testimonials, events, teamMembers, faqItems, galleryImages,
};
