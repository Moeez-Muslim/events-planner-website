import React, { useState, useEffect } from 'react';
import OptionsNav from "../Navbars/OptionsNav";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import axios from 'axios';

// Import icons from FontAwesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar, faUsers, faDollarSign, faChair } from '@fortawesome/free-solid-svg-icons';

export default function Venue() {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend server
    axios.get('http://localhost:5555/venue')
      .then(response => {
        setVenues(response.data.data); // Assuming data is stored in response.data.data
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching venues:', error);
        setLoading(false); // Set loading to false on error as well
      });
  }, []);
  

  const handleChooseVenue = () => {
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
        <h1 style={{ color: '#b85cb1' }}>Choose your favourite venue</h1>
        {loading ? ( // Show loader if data is still loading
          <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-6 col-11 mb-4" style={{ borderRadius: '10px' }}>
              <Splide
                options={{
                  type: 'slide',
                  rewind: true,
                  height: '400px', // Set the height of the Splide carousel
                }}
                onActive={(splide, slide) => setSelectedVenue(slide.index)}
              >
                {venues.map((venue, index) => (
                  <SplideSlide key={index}>
                    <img src={venue.imageURL} alt={`Slide ${index + 1}`} style={{ borderRadius: '10px' }} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="col-lg-6 col-11 mb-4" style={{ border: '2px solid #FF69B4', borderRadius: '10px', padding: '10px', textAlign: 'left' }}>
              {selectedVenue !== null && (
                <div style={{paddingLeft: '5%'}}>
                  <h2><u>{venues[selectedVenue].title}</u></h2>
                  <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {venues[selectedVenue].location}</p>
                  <p><FontAwesomeIcon icon={faStar} /> Rating: {venues[selectedVenue].rating}/5</p>
                  <p><FontAwesomeIcon icon={faUsers} /> Suited For: {venues[selectedVenue].suitedFor.join(', ')}</p>
                  <p><FontAwesomeIcon icon={faDollarSign} /> Cost Per Person: PKR\- {venues[selectedVenue].costPerPerson}</p>
                  <p><FontAwesomeIcon icon={faChair} /> Seating Capacity: {venues[selectedVenue].seatingCapacity}</p>
                  <p><FontAwesomeIcon icon={faChair} /> Outdoor Seating: Available</p>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12">
            <div className="d-grid gap-2 col-6 mx-auto">
              <button onClick={handleChooseVenue} className="btn btn-outline-danger" type="button">Choose this venue</button>
            </div>
          </div>
        </div>
        {selectedVenue !== null && (
          <div className="row mt-4 justify-content-center">
            <div className="col-11 col-md-12 mb-4" style={{ border: '2px solid #FF69B4', borderRadius: '10px', padding: '10px', textAlign: 'left' }}>
              <h3><u>Reviews</u></h3>
              <ul>
                {venues[selectedVenue].reviews.map((review, index) => (
                  <li key={index}>
                    <strong>{review.giverName}:</strong> {review.feedbackText}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
