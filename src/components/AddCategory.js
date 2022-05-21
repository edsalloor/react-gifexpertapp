import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (!value) return;

        const trimmedValue = value.trim();
        if (trimmedValue) {
            setCategories( prevCategories => [value, ...prevCategories]);
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
