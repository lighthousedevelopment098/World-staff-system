import React from 'react';

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-4">Your form is submitted successfully.</p>
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <a href="/" className="text-blue-500 hover:underline">Go to our Homepage</a>
      </div>
    </div>
  );
}

export default ThankYou;
