import './App.css';
import Login from './Login-Signup/Login';
import Signup from './Login-Signup/Signup';
import Veneue from './CustomEvent/Veneue';
import Decor from './CustomEvent/Decor';
import Dining from "./CustomEvent/Dining"


function App() {
  const venuesData = [
    {
      title: "Grand Pavilion",
      imageURL: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481468.jpg?t=st=1715799016~exp=1715802616~hmac=6868aba46dc55419f909afb481152b9aabfea0ce31b0f795150f6b89e9c35f4e&w=740",
      location: "F-6, Islamabad",
      rating: 4.6,
      suitedFor: ["Wedding", "Ceremony"],
      reviews: [
        { giverName: "Ava Brown", feedbackText: "Exquisite venue with impeccable service." },
        { giverName: "William Garcia", feedbackText: "Our wedding was magical thanks to this place." }
      ],
      costPerPerson: 3000,
      seatingCapacity: 300
    },
    {
      title: "Skyline Terrace",
      imageURL: "https://media.istockphoto.com/id/1203186332/photo/wedding-arch-decoration-with-garlands-wedding-reception.jpg?s=612x612&w=0&k=20&c=0dbJxIlNZzIlNlfUM7b7xzU_54hs0yt15VbD-u7t2mk=",
      location: "F-7, Islamabad",
      rating: 4.4,
      suitedFor: ["Corporate Event", "Party"],
      reviews: [
        { giverName: "Liam Clark", feedbackText: "Great view and spacious venue for our company event." },
        { giverName: "Charlotte Rodriguez", feedbackText: "Awesome rooftop party spot!" }
      ],
      costPerPerson: 2800,
      seatingCapacity: 120
    },
    {
      title: "Crystal Hall",
      imageURL: "https://img.freepik.com/free-photo/decorated-hall-restaurant-wedding_8353-9837.jpg?t=st=1715798894~exp=1715802494~hmac=43713de2db3098b292e7d447ca1f81d55ede889b44a52d9e1d0d7c70e9799b1e&w=740",
      location: "F-8, Islamabad",
      rating: 4.9,
      suitedFor: ["Wedding", "Ceremony"],
      reviews: [
        { giverName: "Mia Nguyen", feedbackText: "Absolutely breathtaking venue, highly recommended." },
        { giverName: "Ethan King", feedbackText: "Our wedding day was perfect, thanks to this stunning location." }
      ],
      costPerPerson: 2500,
      seatingCapacity: 280
    },
    {
      title: "Summit View",
      imageURL: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481468.jpg?t=st=1715799016~exp=1715802616~hmac=6868aba46dc55419f909afb481152b9aabfea0ce31b0f795150f6b89e9c35f4e&w=740",
      location: "G-11, Islamabad",
      rating: 4.7,
      suitedFor: ["Corporate Event"],
      reviews: [
        { giverName: "Harper Scott", feedbackText: "Excellent facilities and attentive staff for our corporate retreat." },
        { giverName: "Alexander Hill", feedbackText: "Productive business conference held here." }
      ],
      costPerPerson: 2300,
      seatingCapacity: 180
    },
    {
      title: "Riverside Manor",
      imageURL: "https://img.freepik.com/premium-photo/stage-with-flowers-chandelier-wedding_1090087-13282.jpg?w=740",
      location: "Gulberg, Lahore",
      rating: 4.3,
      suitedFor: ["Wedding", "Party"],
      reviews: [
        { giverName: "Evelyn Stewart", feedbackText: "Charming venue for our wedding celebration." },
        { giverName: "Noah Turner", feedbackText: "Had a blast at my friend's birthday party here." }
      ],
      costPerPerson: 2500,
      seatingCapacity: 220
    },
    {
      title: "Metropolitan Hall",
      imageURL: "https://www.chennaiconventioncentre.com/wp-content/uploads/2019/02/chennaiCC-820x410.jpg",
      location: "PCSIR, Lahore",
      rating: 4.6,
      suitedFor: ["Corporate Event", "Wedding"],
      reviews: [
        { giverName: "Grace Walker", feedbackText: "Professional and elegant setting for our business conference." },
        { giverName: "Logan Flores", feedbackText: "Impressive venue, exceeded our expectations." }
      ],
      costPerPerson: 2700,
      seatingCapacity: 200
    },
    {
      title: "Sunset Terrace",
      imageURL: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481485.jpg?t=st=1715799320~exp=1715802920~hmac=9d3779f226f3da2a38e6c96f60d597e607e4c19d6f51674a685cf8ae56b00c8b&w=740",
      location: "Gulberg, Lahore",
      rating: 4.5,
      suitedFor: ["Party", "Ceremony"],
      reviews: [
        { giverName: "Avery Morgan", feedbackText: "Lovely outdoor venue for our anniversary celebration." },
        { giverName: "Sofia Perez", feedbackText: "Beautiful sunset view made our ceremony unforgettable." }
      ],
      costPerPerson: 3500,
      seatingCapacity: 150
    },
    {
      title: "Harbor View Pavilion",
      imageURL: "https://prestigiousvenues.com/wp-content/uploads/bb-plugin/cache/Gala-Dinner-Venue-In-London-Gibson-Hall-Prestigious-Venues-panorama-e59dc799b93c25c0dc960e904af705e0-59099a98687f6.jpg",
      location: "Abdalians, Lahore",
      rating: 4.8,
      suitedFor: ["Wedding", "Corporate Event"],
      reviews: [
        { giverName: "Jackson Cook", feedbackText: "Elegant venue with stunning views, perfect for our wedding." },
        { giverName: "Chloe Bailey", feedbackText: "Professional atmosphere for our company event." }
      ],
      costPerPerson: 2600,
      seatingCapacity: 250
    },
    {
      title: "Golden Sands Resort",
      imageURL: "https://img.freepik.com/premium-photo/wedding-ceremony-with-flowers-floor-couch_1090087-26317.jpg?w=740",
      location: "Clifton, Karachi",
      rating: 4.4,
      suitedFor: ["Wedding", "Party"],
      reviews: [
        { giverName: "Madison Price", feedbackText: "Dreamy beachfront venue, our wedding was like a fairytale." },
        { giverName: "Lucas Cooper", feedbackText: "Fun beach party spot!" }
      ],
      costPerPerson: 2800,
      seatingCapacity: 230
    },
    {
      title: "Oakwood Manor",
      imageURL: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481533.jpg?t=st=1715799467~exp=1715803067~hmac=9456c0b55a71486498624a33ab39caf43d11d6183502e09122a7614a90472d49&w=740",
      location: "Sadar, Karachi",
      rating: 4.7,
      suitedFor: ["Wedding", "Ceremony"],
      reviews: [
        { giverName: "Luna Rivera", feedbackText: "Magical venue for our wedding, felt like a fairy tale." },
        { giverName: "Gabriel Martinez", feedbackText: "Charming rustic setting, loved every moment." }
      ],
      costPerPerson: 2300,
      seatingCapacity: 600
    },
    {
      title: "Prestige Plaza",
      imageURL: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481511.jpg?t=st=1715799559~exp=1715803159~hmac=fbc936f2c627e41509848a5e5e80650e76e0eee05ecf67017aeac24080cf8f06&w=740",
      location: "Clifton, Karachi",
      rating: 4.6,
      suitedFor: ["Corporate Event"],
      reviews: [
        { giverName: "Scarlett Ward", feedbackText: "Impressive venue for our corporate event, great facilities." },
        { giverName: "Carter Ross", feedbackText: "Successful business conference held here." }
      ],
      costPerPerson: 1800,
      seatingCapacity: 200
    },
    {
      title: "Garden Oasis",
      imageURL: "https://img.freepik.com/premium-photo/wedding-ceremony-with-flowers-floor-large-bouquet-flowers-right_1090087-23820.jpg?w=740",
      location: "Clifton, Karachi",
      rating: 4.8,
      suitedFor: ["Wedding", "Party"],
      reviews: [
        { giverName: "Elena Torres", feedbackText: "Breathtaking garden venue, perfect for weddings." },
        { giverName: "Mateo Perez", feedbackText: "Had a fantastic birthday party here." }
      ],
      costPerPerson: 2100,
      seatingCapacity: 250
    },
    {
      title: "Lakeside Lodge",
      imageURL: "https://img.freepik.com/free-photo/decorated-hall-wedding-is-ready-celebration_8353-10236.jpg",
      location: "Cantonement, Lahore",
      rating: 4.5,
      suitedFor: ["Wedding", "Party"],
      reviews: [
        { giverName: "Nora Murphy", feedbackText: "Serene lakeside venue, our wedding was magical." },
        { giverName: "Elijah Flores", feedbackText: "Perfect setting for a romantic ceremony." }
      ],
      costPerPerson: 2600,
      seatingCapacity: 220
    },
    {
      title: "Urban Loft",
      imageURL: "https://img.freepik.com/premium-photo/wedding-with-flowers-chandelier-with-flowers-top_1090087-26518.jpg?w=740",
      location: "Nishtar, Lahore",
      rating: 4.3,
      suitedFor: ["Party", "Corporate Event"],
      reviews: [
        { giverName: "Isabella Gonzales", feedbackText: "Trendy loft space, ideal for parties." },
        { giverName: "Matthew Ward", feedbackText: "Great venue for our company event." }
      ],
      costPerPerson: 1700,
      seatingCapacity: 180
    },
    {
      title: "Riverfront Retreat",
      imageURL: "https://img.freepik.com/premium-photo/bride-groom-are-standing-red-carpet-wedding-ceremony_865967-194802.jpg?w=740",
      location: "Phase 8, Islamabad",
      rating: 4.7,
      suitedFor: ["Wedding", "Ceremony"],
      reviews: [
        { giverName: "Aria James", feedbackText: "Scenic riverfront venue, highly recommended for weddings." },
        { giverName: "Landon Diaz", feedbackText: "Had a beautiful ceremony here." }
      ],
      costPerPerson: 2400,
      seatingCapacity: 300
    },
    {
      title: "Sapphire Palace",
      imageURL: "https://junebugweddings.com/wedding-blog/wp-content/uploads/2019/10/ultimate-wedding-venue-guide-1.jpg",
      location: "Phase 7, Islamabad",
      rating: 4.4,
      suitedFor: ["Corporate Event", "Ceremony"],
      reviews: [
        { giverName: "Hannah Patel", feedbackText: "Elegant venue with top-notch facilities for our corporate event." },
        { giverName: "Dylan Hill", feedbackText: "Successful conference held in a professional setting." }
      ],
      costPerPerson: 2800,
      seatingCapacity: 200
    },
    {
      title: "Grand Terrace",
      imageURL: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481468.jpg?t=st=1715799016~exp=1715802616~hmac=6868aba46dc55419f909afb481152b9aabfea0ce31b0f795150f6b89e9c35f4e&w=740",
      location: "Korangi, Karachi",
      rating: 4.6,
      suitedFor: ["Wedding", "Party"],
      reviews: [
        { giverName: "Victoria Stewart", feedbackText: "Stunning terrace venue, our wedding was unforgettable." },
        { giverName: "Nicholas Walker", feedbackText: "Awesome venue for our party." }
      ],
      costPerPerson: 2700,
      seatingCapacity: 250
    },
    {
      title: "Emerald Hall",
      imageURL: "https://nishathotels.com/wp-content/uploads/2022/02/img1-2-1024x596.jpg",
      location: "Malir, Karachi",
      rating: 4.5,
      suitedFor: ["Corporate Event", "Wedding"],
      reviews: [
        { giverName: "Zoe Turner", feedbackText: "Impressive venue for our corporate gathering." },
        { giverName: "Brandon Collins", feedbackText: "Excellent facilities for our conference." }
      ],
      costPerPerson: 2100,
      seatingCapacity: 220
    },
    {
      title: "Villa Serenity",
      imageURL: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481468.jpg?t=st=1715799016~exp=1715802616~hmac=6868aba46dc55419f909afb481152b9aabfea0ce31b0f795150f6b89e9c35f4e&w=740",
      location: "Inner Lahore",
      rating: 4.8,
      suitedFor: ["Wedding", "Party"],
      reviews: [
        { giverName: "Penelope Hernandez", feedbackText: "Romantic villa setting, perfect for weddings." },
        { giverName: "Sebastian Barnes", feedbackText: "Magical ceremony held in this beautiful venue." }
      ],
      costPerPerson: 1700,
      seatingCapacity: 300
    },
    {
      title: "Skyline Lounge",
      imageURL: "https://cdn0.hitched.co.uk/article/1000/3_2/960/jpg/130001-large-capacity-wedding-venues-the-glasshouse.jpeg",
      location: "DHA, Islmabad",
      rating: 4.3,
      suitedFor: ["Party", "Corporate Event"],
      reviews: [
        { giverName: "Lily Scott", feedbackText: "Spectacular views and great atmosphere for our party." },
        { giverName: "Christopher Young", feedbackText: "Professional setting for our corporate event." }
      ],
      costPerPerson: 2700,
      seatingCapacity: 180
    }
  ];
    
  
  const dummyDecorData = [
    {
        imageURL: 'https://example.com/balloons.jpg',
        eventType: 'Birthday',
        cost: 100,
        description: 'Colorful balloons for birthday parties.'
    },
    {
        imageURL: 'https://example.com/multimedia.jpg',
        eventType: 'Conference',
        cost: 500,
        description: 'Multimedia setup for conferences and meetings.'
    },
    {
        imageURL: 'https://example.com/flowers.jpg',
        eventType: 'Wedding',
        cost: 1000,
        description: 'Elegant flower arrangements for weddings.'
    },
    // Add more dummy data as needed
];

// Dummy data
const dummyFoods = [
  {
    title: 'Deluxe Wedding Buffet',
    description: 'A lavish spread featuring prime rib, lobster tail, gourmet salads, artisanal cheeses, and decadent desserts.',
    type: 'wedding',
    cost: 5000,
    imageURL: 'https://example.com/deluxe-wedding-buffet.jpg'
  },
  {
    title: 'Conference Breakfast Package',
    description: 'Assorted pastries, fresh fruit platter, yogurt parfait bar, and freshly brewed coffee.',
    type: 'conference',
    cost: 800,
    imageURL: 'https://example.com/conference-breakfast-package.jpg'
  },
  {
    title: 'Birthday Bash Platter',
    description: 'Customizable platter with sliders, mini tacos, chicken wings, veggie sticks with dip, and assorted mini desserts.',
    type: 'birthday',
    cost: 300,
    imageURL: 'https://example.com/birthday-bash-platter.jpg'
  },
  {
    title: 'Afternoon Snack Break',
    description: 'Cheese and cracker platter, assorted nuts, fresh fruit skewers, and iced tea.',
    type: 'conference',
    cost: 400,
    imageURL: 'https://example.com/afternoon-snack-break.jpg'
  }
];


  return (
    <div className="App">
      <Veneue/>
    </div>
  );
}

export default App;
