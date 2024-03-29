import React from 'react';
import PropTypes from 'prop-types';

import GifGridItem from 'components/GifGridItem';
import useFetchGifs from 'hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data: images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {isLoading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {images.map(img => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifGrid;
