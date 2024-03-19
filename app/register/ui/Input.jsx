import React from "react";

function Input({ name, placeholder, value, onChange }) {
  return (
    <>
      <input
        className="px-2 rounded-lg"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
