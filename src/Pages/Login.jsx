import React from 'react'
import logo from '../assets/images/logo/Logo-round-big.png'

function Login() {
  return (
    <div id='login' className="container mx-auto h-screen px-2 py-4 xl:py-7 2xl:py-10">
      <img src={logo} alt="" className='mx-auto'/>
      <div className="mx-auto w-[400px] rounded-[5px] bg-white px-9 pb-5 pt-10 drop-shadow-normal-dark xl:mt-6 2xl:mt-12">
        <p className='mb-6 text-desc'><span className='text-primary'>Home</span> / Login</p>
        <h6 className='mb-4 text-heading'>Login</h6>
        <p className='mb-10 text-desc'>Input your username and password.</p>
        <form action="#">
          <label htmlFor="username">Username</label>
          <input type="text" name='username'  id='username'/>
          <label htmlFor="password" className='mt-6'>Password</label>
          <input type="text" name='password'  id='password'/>
          <button className='mt-7 w-full rounded-[4px] bg-primary py-4 text-sm font-bold text-white'>Login</button>
        </form>
      </div>
      <div className='mt-10 flex flex-col gap-10 text-sm text-desc'>
        <p>Don't have an account? <a href="#" className='text-link-active hover:text-desc'>Create One!</a></p>
        <span>© 2024 Lidia. All rights reserved.</span>
      </div>
    </div>  
  )
}

export default Login
