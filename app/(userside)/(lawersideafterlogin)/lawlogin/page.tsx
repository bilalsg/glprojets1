import React from 'react'

const page = () => {
  return (
    <div className="pt-28   flex items-center justify-center min-h-screen ">
    <div
      className="relative flex flex-col m-6 space-y-4 bg-white shadow-2xl  md:flex-row md:space-y-0"
    >
      <div className="flex flex-col justify-center p-8 md:p-14">
        <span className="mb-3 text-4xl font-bold">Welcome back</span>
        <span className="font-light text-gray-400 mb-8">
          Welcom back! Please enter your details
        </span>
        <div className="py-4">
          <span className="mb-2 text-md">Email</span>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="email"
            id="email"
          />
        </div>
        <div className="py-4">
          <span className="mb-2 text-md">Password</span>
          <input
            type="password"
            name="pass"
            id="pass"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
          />
        </div>
       
        <button
          className="w-full  bg-red-700 z-20 hover:bg-gray-900  text-white p-2  mb-6   hover:border hover:border-gray-300"
        >
          Sign in
        </button>
         <div className="flex justify-between w-full ">
        
          <span className="font-bold text-md">Forgot password</span>
        </div>
      </div>
      <div className="relative">
        <img
          src="law3.jpg"
          alt="img"
          className="w-[400px] h-full hidden  md:block object-cover"
        />
     
      </div>
    </div>
  </div>
  )
}

export default page