import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AddCategoryInput from './components/AddCategoryInput';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ initialCategories=[] }) => {
  const [categories, setCategories] = useState(initialCategories);

  const onAddCategory = newCategory => {
    const categoryIndex = categories.indexOf(newCategory);

    if (categoryIndex >= 0) {
      const remainingCategories = [...categories];
      remainingCategories.splice(categoryIndex, 1);
      setCategories([newCategory, ...remainingCategories]);
      return;
    };

    setCategories([newCategory, ...categories]);
  };

  return (<>
    <h1>Gif Expert App</h1>
    <AddCategoryInput onAddCategory={onAddCategory}/>
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
