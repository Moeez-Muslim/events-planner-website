import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OptionsNav from "../Navbars/OptionsNav";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faDollarSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Decor() {
  const [decors, setDecors] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5555/decor')
      .then(response => {
        setDecors(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching decor:', error));
  }, []);

  const handleAddDecor = () => {
    if (selectedVenue !== null) {
      console.log("User's choice:", decors[selectedVenue]);
      // Here you can perform any action with the selected venue, such as sending it to a server
    } else {
      console.log("Please select a venue before choosing.");
    }
  };

  return (
    <div>
      <OptionsNav />
      <div className='container' style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'cursive' }}>
        <h1 style={{ color: '#b85cb1' }}>Choose your favourite decor</h1>
        {loading ? (
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
                {decors.map((decor, index) => (
                  <SplideSlide key={index}>
                    <img src={decor.imageURL} alt={`Slide ${index + 1}`} style={{ borderRadius: '10px' }} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="col-lg-6 col-md-12" style={{ border: '2px solid #FF69B4', borderRadius: '10px', padding: '10px', textAlign: 'left' }}>
              {selectedVenue !== null && (
                <div style={{ paddingLeft: '5%', padding: '5%' }}>
                  <h2><u>{decors[selectedVenue].title}</u></h2>
                  <p><FontAwesomeIcon icon={faUsers} /> Suited For: {decors[selectedVenue].eventType}</p>
                  <p><FontAwesomeIcon icon={faDollarSign} /> Cost: PKR\- {decors[selectedVenue].cost}</p>
                  <p><FontAwesomeIcon icon={faInfoCircle} /> Details: {decors[selectedVenue].description}</p>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12">
            <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-4">
              <button onClick={handleAddDecor} className="btn btn-outline-danger" type="button">Add this decor</button>
              <button className="btn btn-outline-danger" type="button">Move to dining</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
