import React, { useState } from 'react';
import OptionsNav from "../Navbars/OptionsNav";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// Import icons from FontAwesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar, faUsers, faDollarSign, faChair, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Decor({ decors }) {
  const [selectedVenue, setSelectedVenue] = useState(null);

  const handleAddDecor = () => {
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
        <h1 style={{ color: '#b85cb1' }}>Choose your favourite decor</h1>
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
              {decors.map((venue, index) => (
                <SplideSlide key={index}>
                  <img src={venue.imageURL} alt={`Slide ${index + 1}`} style={{ borderRadius: '10px' }} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="col-lg-6 col-md-12" style={{ border: '2px solid #FF69B4', borderRadius: '10px', padding: '10px', textAlign: 'left' }}>
            {selectedVenue !== null && (
              <div style={{paddingLeft: '5%', padding:'5%'}}>
                <p><FontAwesomeIcon icon={faUsers} /> Suited For: {decors[selectedVenue].eventType}</p>
                <p><FontAwesomeIcon icon={faDollarSign} /> Cost: PKR\- {decors[selectedVenue].cost}</p>
                <p><FontAwesomeIcon icon={faInfoCircle} /> Details: {decors[selectedVenue].description}</p>
              </div>
            )}
          </div>
        </div>
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
