import React from "react";

const RadioButton = (props) => {
	const {id, label, checked} = props
  return (
    <>
      <input type="radio" value={id} {...props} 
				className='opacity-0 absolute h-0 w-0'
      />
      <label htmlFor={id} className="mb-0 flex items-center gap-x-2">
      {checked ? 
        <div className="relative flex items-center justify-center">
          <div className="bg-primary w-5 h-5 rounded-full"></div>
          <div className="bg-white w-[10px] h-[10px] rounded-full absolute"></div>
        </div>  :
        <div className="border-border w-5 h-5 rounded-full border-[2.5px]"></div>
    }
      
        <span>{label}</span>
      </label>
    </>
  );
};

export default RadioButton;
