import React, { useState } from "react";
import logo from "../assets/images/logo/Logo-round-big.png";
import PasswordInput from "../Elements/PasswordInput";

function Register() {
  return (
    <div className="container mx-auto h-screen px-2 py-5 xl:py-7 min-[1440px]:py-10">
      <div className="flex h-fit flex-col items-center justify-center min-[1920px]:h-full">
        <img src={logo} alt="" className="max-w-[100px] " />
        <div className="mt-5 w-fit max-w-[730px] rounded-[5px] border-t-[1.5px] border-primary bg-white px-6 pb-4 pt-4 drop-shadow-normal-dark min-[416px]:w-full md:px-8 lg:px-9 lg:pb-5 lg:pt-10 xl:mt-6 min-[1440px]:mt-12">
          <p className="mb-6 text-desc">
            <span className="text-primary">Home</span> / Register
          </p>
          <h6 className="mb-4 text-heading">Sign Up</h6>
          <p className="mb-10 text-desc">
            Register yourself to do something on Lidia.
          </p>
          <form action="#">
            <div className="grid grid-cols-2 gap-x-7 gap-y-6">
              <div>
                <label htmlFor="username">Username</label>
                <input
                  autoFocus
                  placeholder="e.g. rick"
                  type="text"
                  name="username"
                  id="username"
                />
              </div>
              <div>
                <label htmlFor="password" className="mt-6">
                  Password
                </label>
                <PasswordInput />
              </div>
              <div>
                <label htmlFor="confirm_password" className="mt-6">
                  Confirm Password
                </label>
                <PasswordInput isConfirm="true" />
              </div>
            </div>
            <button className="mt-7 w-full rounded-[4px] bg-primary py-4 text-sm font-bold text-white">
              Sign Up
            </button>
          </form>
        </div>
        <div className="my-10 flex flex-col gap-10 text-center text-sm text-desc">
          <span>© 2024 Lidia. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
