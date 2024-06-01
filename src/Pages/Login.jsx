import React, { useState, useLayoutEffect } from "react";
import logo from "../assets/images/logo/Logo-round-big.png";
import PasswordInput from "../Elements/PasswordInput";
import { Link } from "react-router-dom";
import { Cube } from 'react-preloaders'

function Login() {
  const [screenLoading, setScreenLoading] = useState(true)
  useLayoutEffect(() => {
    document.getElementsByTagName('body')[0].style.position = 'static'
    document.getElementsByTagName('body')[0].style.overflow = 'auto'
    setTimeout(() => {
      document.getElementById('preloader').style.opacity = 0
      setTimeout(() => {
        setScreenLoading(false);
      }, 1000)
    }, 1000)
  })
  return (
    <>
    {screenLoading ? (
      <Cube color="rgb(68, 117, 242)" />
    ) : ''}
    <div
      id="login"
      className="container mx-auto h-screen px-2 py-5 xl:py-7 min-[1440px]:py-10"
      data-aos="fade-zoom-in" data-aos-duration="800"
    >
      <div className="flex h-fit flex-col items-center justify-center min-[1920px]:h-full">
        <Link to={"/"} className=" hover:opacity-100">
        <img src={logo} alt="" className="max-w-[100px] " />
        </Link>
        
        <div className="mt-5 w-fit max-w-[400px] rounded-[5px] border-t-[1.5px] border-primary bg-white px-6 pb-4 pt-4 drop-shadow-normal-dark min-[416px]:w-full md:px-8 lg:px-9 lg:pb-5 lg:pt-10 xl:mt-6 min-[1440px]:mt-12">
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
            <PasswordInput />

            <button className="mt-7 w-full rounded-[4px] bg-primary py-4 text-sm font-bold text-white">
              Login
            </button>
          </form>
        </div>
        <div className="my-10 flex flex-col gap-10 text-center text-sm text-desc">
          <p>
            Don't have an account?{" "}
            <Link to={"/register"} className="text-link-active hover:text-desc">
              Create One!
            </Link>
          </p>
          <span>© 2024 Lidia. All rights reserved.</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
