import PropTypes from 'prop-types';
import React from 'react';

const GifGridItem = ({ title, url }) => (
  <div className="card animate__animated animate__fadeIn">
    <img src={url} alt={title} />
    <p>{title}</p>
  </div>
);

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default GifGridItem;
