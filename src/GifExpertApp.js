import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ initialCategories=[] }) => {
  const [categories, setCategories] = useState(initialCategories);

  return (<>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={setCategories}/>
    <hr/>
    <ol>
      {categories.map((category) => (
        <GifGrid key={category} category={category}/>
      ))}
    </ol>
  </>)
};

GifExpertApp.propTypes = {
  initialCategories: PropTypes.array
};

export default GifExpertApp;
