import React from "react";

const StayInTouch = () => {
  return (
    <div className="bg-blue-800 text-white py-10 px-5 text-center">
      <h1 className="text-3xl font-bold mb-4">LET'S STAY IN TOUCH!</h1>
      <p className="mb-6">
        Sign up now for gut health tips, exclusive offers, and new products.
        <br />
        Check your inbox for 10% off your first order!
      </p>
      <div className="flex justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email here"
          className="p-3 w-1/3 rounded-l-lg text-gray-700 focus:outline-none"
        />
        <button className="bg-pink-500 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-pink-600">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default StayInTouch;
