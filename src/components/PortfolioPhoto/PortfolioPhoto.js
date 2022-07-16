import React from 'react';
import PropTypes from 'prop-types';
import './PortfolioPhoto.css';

const PortfolioPhoto = () => (
  <div className="PortfolioPhoto">
    <div className="photo">
      <img className="mainPhoto" src="https://live.staticflickr.com/65535/51761786269_a8c3419448_k.jpg" alt="portfolio"/>
    </div>
  </div>
);

PortfolioPhoto.propTypes = {};

PortfolioPhoto.defaultProps = {};

export default PortfolioPhoto;
