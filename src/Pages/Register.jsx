import React, { useState } from "react";
import logo from "../assets/images/logo/Logo-round-big.png";
import { Eye, EyeOff } from "feather-icons-react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div
      className="container mx-auto h-screen px-2 py-5 xl:py-7 min-[1440px]:py-10"
    >
      <div className="flex h-fit flex-col items-center justify-center min-[1920px]:h-full">
        <img src={logo} alt="" className="max-w-[100px] " />
        <div className="mt-5 w-fit min-[416px]:w-full max-w-[400px] rounded-[5px] border-t-[1.5px] border-primary bg-white px-6 pb-4 pt-4 drop-shadow-normal-dark md:px-8 lg:px-9 lg:pb-5 lg:pt-10 xl:mt-6 min-[1440px]:mt-12">
          <p className="mb-6 text-desc">
            <span className="text-primary">Home</span> / Login
          </p>
          <h6 className="mb-4 text-heading">Login</h6>
          <p className="mb-10 text-desc">Input your username and password.</p>
          <form action="#">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              placeholder="e.g. rick"
              type="text"
              name="username"
              id="username"
            />
            <label htmlFor="password" className="mt-6">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="e.g. youknowtherulesandsodoi"
                id="password"
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-desc"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <Eye size="15" /> : <EyeOff size="15" />}
              </button>
            </div>

            <button className="mt-7 w-full rounded-[4px] bg-primary py-4 text-sm font-bold text-white">
              Login
            </button>
          </form>
        </div>
        <div className="my-10 flex flex-col gap-10 text-center text-sm text-desc">
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-link-active hover:text-desc">
              Create One!
            </a>
          </p>
          <span>© 2024 Lidia. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Register;