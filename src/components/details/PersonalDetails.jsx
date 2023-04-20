import React from 'react';
import pic from './profile.png';

const PersonalDetails = () => {
  return (
    <div className="personal-details">
      <div className="image-container">
        <img src={pic} alt="Profile" />
      </div>
      <div className="details-container">
        <h1>Anuj Sharma</h1>
        <p>Roll NO : 202120040</p>
        <p>MCA (Master of Computer Application)</p>
        <p>Maulana Azad National Institute of Technology</p>
      </div>
      <div className="contact-container">
        <p>Email: imanujsharma@gamil.com</p>
        <p>Phone: +91-9997025107</p>
        <p>Links: <a href="https://github.com/imanujsharma99">Github</a></p>
      </div>
    </div>
  );
};

export default PersonalDetails;
