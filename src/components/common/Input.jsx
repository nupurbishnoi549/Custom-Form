import React from 'react';

const Input = ({ name, value, onChange, type = "text", placeholder, InputClass = "" }) => {
    return (
        <input
            className={`border border-black mb-3 pl-2 py-1 w-full rounded ${InputClass}`}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
        />
    );
};

export default Input;
