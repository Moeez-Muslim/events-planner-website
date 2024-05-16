import './App.css';
import Login from './Login-Signup/Login';
import Signup from './Login-Signup/Signup';
import Veneue from './CustomEvent/Veneue';
import Decor from './CustomEvent/Decor';
import Dining from "./CustomEvent/Dining"


function App() {

  const dummyDecors = [
    {
      title: 'Elegant Flower Arrangement',
      imageURL: 'https://img.freepik.com/premium-photo/photo-is-must-everyday-work-ai-generated-best-wonderful-photo_1070043-225622.jpg?w=740',
      eventType: 'Wedding',
      cost: 1000,
      description: 'Beautiful floral arrangements with roses, lilies, and orchids for a luxurious wedding.'
    },
    {
      title: 'Corporate Event Backdrop',
      imageURL: 'https://img.freepik.com/free-psd/logo-mockup-black-hang-sign_145275-191.jpg?t=st=1715810610~exp=1715814210~hmac=90878b5c0383cdaad645b07c482b927f852799da7da2bb714f424e9f3b329af4&w=740',
      eventType: 'Corporate Event',
      cost: 800,
      description: 'Customizable backdrop with company logo and colors for corporate events and conferences.'
    },
    {
      title: 'Colorful Balloon Arch',
      imageURL: 'https://img.freepik.com/premium-photo/ai-generated-ai-generative-balloon-garland-arc-decoration-wedding-ceremony-fashion_95211-20645.jpg?w=900',
      eventType: 'Party',
      cost: 500,
      description: 'Vibrant balloon arches in various colors and designs for birthday parties and celebrations.'
    },
    {
      title: 'Wedding Aisle Decor',
      imageURL: 'https://img.freepik.com/premium-photo/entrance-garden_865967-425156.jpg?w=740',
      eventType: 'Wedding',
      cost: 1200,
      description: 'Romantic aisle decor with flower petals, candles, and fairy lights for a dreamy wedding ceremony.'
    },
    {
      title: 'Party Table Centerpieces',
      imageURL: 'https://img.freepik.com/premium-photo/bouquets-pink-roses-hydrangeas-stand-dinner-table_8353-4593.jpg?w=740',
      eventType: 'Party',
      cost: 300,
      description: 'Fun and festive table centerpieces with balloons, confetti, and party favors for any celebration.'
    },
    {
      title: 'Ceremony Stage Decor',
      imageURL: 'https://img.freepik.com/premium-photo/flowers-vase_1048944-23859941.jpg?w=740',
      eventType: 'Ceremony',
      cost: 1500,
      description: 'Grand stage decor with drapes, lights, and floral arrangements for formal ceremonies and events.'
    },
    {
      title: 'Multimedia Projection Mapping',
      imageURL: 'https://img.freepik.com/free-photo/film-projector-dark-background-close-up-old-retro-things-shoot-with-vintage-style-colors-toned_155003-32076.jpg?t=st=1715810722~exp=1715814322~hmac=6388f29d1fcd0257c8d54fa6ba0c06b195c409d486da35090b8f6052225940ee&w=900',
      eventType: 'Corporate Event',
      cost: 2000,
      description: 'Immersive multimedia projection mapping for corporate presentations and product launches.'
    },
    {
      title: 'Festive Party Banners',
      imageURL: 'https://img.freepik.com/free-photo/confetti-waffle-cone_23-2147654688.jpg?t=st=1715810852~exp=1715814452~hmac=2668a1f174b6121eb990e47b4aceb6e8070a2f1519df7b7f0a455688b730e9c4&w=740',
      eventType: 'Party',
      cost: 400,
      description: 'Colorful party banners and garlands to add a festive touch to any indoor or outdoor celebration.'
    },
    {
      title: 'Wedding Venue Lighting',
      imageURL: 'https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481493.jpg?t=st=1715810252~exp=1715813852~hmac=608e8b4368f543fe1d8a1be9824d96654322df6fec1f9e6650c363754807700e&w=740',
      eventType: 'Wedding',
      cost: 1800,
      description: 'Elegant lighting design to enhance the ambiance of wedding venues and create a romantic atmosphere.'
    },
    {
      title: 'Ceremony Entrance Decor',
      imageURL: 'https://img.freepik.com/free-photo/beautiful-wedding-flower-arrangement-seats-along-aisle_1127-3212.jpg?t=st=1715810286~exp=1715813886~hmac=bc759fb30473915e281478715b62a75514d262081970d305c985d2fdd5cf8f09&w=740',
      eventType: 'Ceremony',
      cost: 1000,
      description: 'Beautiful decor for the entrance of ceremony venues, including floral arches and welcome signs.'
    }
  ];
  
  

  return (
    <div className="App">
      <Decor decors = {dummyDecors}/>
    </div>
  );
}

export default App;
