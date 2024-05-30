import React, { useState } from "react";

const RadioButton = (props) => {
	const {name, id, label, checked} = props
  return (
    <div className="flex items-center gap-x-2">
      <input type="radio" value={name} {...props} 
				className={checked ? 'opacity-70' : 'opacity-30'}
      />
      <label htmlFor={id} className="mb-0">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
