import React, { useState, useEffect } from 'react';
import OptionsNav from "../Navbars/OptionsNav";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import axios from 'axios';

// Import icons from FontAwesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar, faUsers, faDollarSign, faChair, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Decor() {
  const [diningOptions, setDiningOptions] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend server
    axios.get('http://localhost:5555/food')
      .then(response => {
        setDiningOptions(response.data); // Assuming data is stored in response.data
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching food items:', error);
        setLoading(false); // Set loading to false on error as well
      });
  }, []);

  const handleChooseDining = () => {
    if (selectedVenue !== null) {
      // Here you can perform any action with the selected venue, such as sending it to a server
      console.log("User's choice:", selectedVenue);
    } else {
      console.log("Please select a venue before choosing.");
    }
  };

  return (
    <div>
      <OptionsNav />
      <div className='container' style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'cursive' }}>
        <h1 style={{ color: '#b85cb1' }}>Choose your favourite food package</h1>
        {loading ? ( // Show loader if data is still loading
          <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-6 col-md-12" style={{ borderRadius: '10px' }}>
              <Splide
                options={{
                  type: 'slide',
                  rewind: true,
                  height: '400px', // Set the height of the Splide carousel
                }}
                onActive={(splide, slide) => setSelectedVenue(slide.index)}
              >
                {diningOptions.map((venue, index) => (
                  <SplideSlide key={index}>
                    <img src={venue.imageURL} alt={`Slide ${index + 1}`} style={{ borderRadius: '10px' }} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="col-lg-6 col-md-12" style={{ border: '2px solid #FF69B4', borderRadius: '10px', padding: '10px', textAlign: 'left' }}>
              {selectedVenue !== null && (
                <div style={{paddingLeft: '5%', padding:'5%'}}>
                  <p><FontAwesomeIcon icon={faUsers} /> Suited For: {diningOptions[selectedVenue].type}</p>
                  <p><FontAwesomeIcon icon={faDollarSign} /> Cost Per Person: PKR\- {diningOptions[selectedVenue].cost}</p>
                  <p><FontAwesomeIcon icon={faInfoCircle} /> Details: {diningOptions[selectedVenue].description}</p>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12">
            <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-4">
              <button onClick={handleChooseDining} className="btn btn-outline-danger" type="button">Choose this package</button>
              <button className="btn btn-danger" type="button">Contact us for custom package</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
