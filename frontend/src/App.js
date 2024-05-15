import './App.css';
import Login from './Login-Signup/Login';
import Signup from './Login-Signup/Signup';
import Veneue from './CustomEvent/Veneue';

function App() {
  const venuesData = [
    {
      title: "Crescent Marquee",
      imageURL: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481477.jpg?t=st=1715689792~exp=1715693392~hmac=bc641898d800e40922a505ab733d6b4493e46df2776e1eb68524db5af690abf6&w=740",
      location: "City A",
      rating: 4.5,
      suitedFor: ["Weddings", "Events"],
      reviews: [
        { giverName: "John Doe", feedbackText: "Great venue! Loved the decor." },
        { giverName: "Jane Smith", feedbackText: "Perfect for weddings." }
      ],
      costPerPerson: 50,
      seatingCapacity: 200
    },
    {
      title: "Royal Banquet",
      imageURL: "https://img.freepik.com/free-photo/classic-luxury-style-restaurant-with-tables-chairs_140725-9390.jpg?t=st=1715683722~exp=1715687322~hmac=d2a89a88c8d1ac1b1bd71539541fbb44be07b9bc30baf4c8f2a7c7023598eaa4&w=740",
      location: "City B",
      rating: 4.0,
      suitedFor: ["Dining", "Events"],
      reviews: [
        { giverName: "Alice Johnson", feedbackText: "Wonderful atmosphere!" },
        { giverName: "Bob Brown", feedbackText: "Great food and service." }
      ],
      costPerPerson: 30,
      seatingCapacity: 100
    },
    {
      title: "Majestic Moments",
      imageURL: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481468.jpg?t=st=1715692205~exp=1715695805~hmac=aa30d7b8750334baa3b728fbf86f757dd8d36612c9f9443140ae408fb1001ebb&w=740",
      location: "City C",
      rating: 4.2,
      suitedFor: ["Weddings", "Events"],
      reviews: [
        { giverName: "Emily White", feedbackText: "Stunning venue! Highly recommend." },
        { giverName: "David Clark", feedbackText: "Perfect for weddings." }
      ],
      costPerPerson: 60,
      seatingCapacity: 150
    }
  ];
  
  return (
    <div className="App">
      <Veneue venues={venuesData}/>
    </div>
  );
}

export default App;
