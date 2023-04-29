import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategoryInput = ({ onAddCategory }) => {
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const trimmedValue = value.trim();
    if (!trimmedValue) {
      return;
    }

    onAddCategory(trimmedValue);
    setValue('');
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search gif" value={value} onChange={handleChange} />
    </form>
  );
};

AddCategoryInput.propTypes = {
  onAddCategory: PropTypes.func.isRequired
};

export default AddCategoryInput;
