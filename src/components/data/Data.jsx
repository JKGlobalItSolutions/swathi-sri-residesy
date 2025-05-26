import { Link } from "react-router-dom";

export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/gallery",
    text: "Gallery",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },

   {
    id: 4,
    path: "/aminitie",
    text: "Aminitie",
  },

  // {
  //   id: 5,
  //   path: "/page",
  //   text: "Page",
  //   subItems: [
  //     {
  //       id: 51,
  //       path: "/booking",
  //       text: "Booking",
  //     },
  //     {
  //       id: 52,
  //       path: "/team",
  //       text: "Our Team",
  //     },
  //     {
  //       id: 53,
  //       path: "/testimonial",
  //       text: "Testimonial",
  //     },
  //   ],
  // },

  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];

export const socialIcons = [
  { iconClass: "fab fa-facebook-f" },
  { iconClass: "fab fa-twitter" },
  { iconClass: "fab fa-instagram" },
  { iconClass: "fab fa-linkedin-in" },
  { iconClass: "fab fa-youtube" },
];



export const carouselData = [
  {
    img: "../assets/img/carousel-1.jpg",
    title: "Discover A Brand Luxurious Rooms",
    subtitle: "luxury living",
    btn1: "View Room",
    btn2: "Book Room",

    link1: "/rooms", 
    link2: "/contact",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "Discover A Brand Luxurious Rooms",
    subtitle: "luxury living",
    btn1: "View Room",
    btn2: "Book Room",
    
    link1: "/rooms", 
    link2: "/contact",
  },
];



export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms & Appartment",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-spa fa-2x text-primary"></i>,
    name: "Spa & Fitness",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
];

export const team = [
  {
    image: "../assets/img/team-1.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-2.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Food & Restaurant",
      },
      {
        name: "Spa & Fitness",
      },
      {
        name: "Sports & Gaming",
      },
      {
        name: "Event & Party",
      },
      {
        name: "GYM & Yoga",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "123 Street, New York, USA",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+012 345 67890",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "info@example.com",
  },
];

// export const contact = [
//   {
//     icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
//     title: "Booking",
//     email: "book@example.com",
//   },
//   {
//     icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
//     title: "Technical",
//     email: "tech@example.com",
//   },
//   {
//     icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
//     title: "General",
//     email: "info@example.com",
//   },
// ];

export const testimonial = [
  {
    description:
      "The service provided by this company was excellent. They value time highly and are always ready to assist.",
    name: "Ramesh Kumar",
    profession: "Computer Engineer",
    icon: (
      <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
   
  },
  {
    description:
      "This has been a great partner for the growth of my business. The service is very reliable and prompt.",
    name: "Sourabh Chandran",
    profession: "Entrepreneur",
    icon: (
      <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),

  },
  {
    description:
      "The technical knowledge and experience of the team here are commendable. Their support service was excellent.",
    name: "Lalitha Ravichandran",
    profession: "School Teacher",
    icon: (
      <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    
  },
];



export const roomItems = [
  {
    img: "../assets/img/bad1.jpg",
    price: "₹2,000/night",
    name: "Single Bed",
    type: "AC",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Perfect for solo travellers, offering cosy bedding and all essential amenities.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
  {
    img: "../assets/img/bad2.jpg",
    price: "₹2,500/night",
    name: "Double Bed",
    type: "AC",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Spacious room ideal for two guests, equipped with modern interiors.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
  {
    img: "../assets/img/bad3.jpg",
    price: "₹3,000/night",
    name: "Triple Bed",
    type: "AC",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Ideal for small groups or families, with all necessary comforts provided.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
  {
    img: "../assets/img/bad4.jpg",
    price: "₹3,500/night",
    name: "Four Bed",
    type: "AC",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Perfect for larger families or groups, featuring multiple beds and ample space.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },

  // ✅ Corrected Non-AC rooms
  {
    img: "../assets/img/one.jpg",
    price: "₹1,500/night",
    name: "Single Bed",
    type: "Non-AC", // ✅ Corrected
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Perfect for solo travellers, offering cosy bedding and all essential amenities.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
  {
    img: "../assets/img/two.jpeg",
    price: "₹2,000/night",
    name: "Double Bed",
    type: "Non-AC", // ✅ Corrected
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Spacious room ideal for two guests, equipped with modern interiors.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
  {
    img: "../assets/img/three.jpg",
    price: "₹2,500/night",
    name: "Triple Bed",
    type: "Non-AC", // ✅ Corrected
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Ideal for small groups or families, with all necessary comforts provided.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
  {
    img: "../assets/img/four.jpg",
    price: "₹3,000/night",
    name: "Four Bed",
    type: "Non-AC", // ✅ Corrected
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Perfect for larger families or groups, featuring multiple beds and ample space.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
];


// export const facility = [
//   {
//     icon: <i class="fa fa-bed text-primary me-2"></i>,
//     quantity: 3,
//     facility: "bed",
//   },
//   {
//     icon: <i class="fa fa-bath text-primary me-2"></i>,
//     quantity: 2,
//     facility: "bath",
//   },
//   {
//     icon: <i class="fa fa-wifi text-primary me-2"></i>,
//     facility: "Wifi",
//   },
  
// ];
