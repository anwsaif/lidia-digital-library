import React, { useState } from "react";
import { Eye, EyeOff } from "feather-icons-react";

const PasswordInput = ({isConfirm = false}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = (e) => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name={isConfirm ? "confirm_password" : "password"}
        placeholder="e.g. youknowtherulesandsodoi"
        id="password"
      />
      <button
      type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-desc"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <Eye size="15" /> : <EyeOff size="15" />}
      </button>
    </div>
  );
};

export default PasswordInput;
