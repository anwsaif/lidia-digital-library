import React, { useState, useEffect } from "react";

const RadioButton = (props) => {
	const {id, label, checked} = props
  const [radio, setRadio] = useState(null)

  useEffect(() => {
    setRadio(document.getElementById(id))
  }, [])

  const handleClick = () => {
    radio.click()
  }
  return (
    <div className="flex items-center gap-x-2">
      <input type="radio" value={id} {...props} 
				className='opacity-0 absolute'
      />
      <div onClick={handleClick}>
      {checked ? 
        <div className="relative flex items-center justify-center">
          <div className="bg-primary w-5 h-5 rounded-full"></div>
          <div className="bg-white w-[10px] h-[10px] rounded-full absolute"></div>
        </div>  :
        <div className="border-border w-5 h-5 rounded-full border-[2.5px]"></div>
    }</div>
      <label htmlFor={id} className="mb-0">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
