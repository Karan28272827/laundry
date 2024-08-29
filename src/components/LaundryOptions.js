import React from 'react';

function LaundryOptions() {
  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="Logo" className="h-8" />
          <div className="relative">
            <input type="text" placeholder="Search for laundry options" className="px-4 py-2 rounded border border-gray-300" />
            <button className="absolute inset-y-0 right-0 px-4 py-2 bg-green-500 text-white rounded-r">Search</button>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-sm text-gray-600">Help</button>
          <button className="text-sm text-gray-600">Contact Us</button>
          <button className="text-sm text-gray-600">Account</button>
        </div>
      </header>

      <div className="flex mt-4">
        <aside className="w-1/4 p-4 bg-white shadow-md">
          <h2 className="text-xl font-semibold">Filters</h2>
          <h3 className="mt-4 text-lg font-semibold">Popular services</h3>
          <input type="text" placeholder="Search.." className="w-full px-4 py-2 mt-2 rounded border border-gray-300" />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-gray-100 rounded">Wash & Fold</span>
            <span className="px-4 py-2 bg-gray-100 rounded">Dry Cleaning</span>
            <span className="px-4 py-2 bg-gray-100 rounded">Ironing</span>
            <span className="px-4 py-2 bg-gray-100 rounded">Laundry Subscription</span>
            <button className="text-blue-500">+ View More</button>
          </div>
          <h3 className="mt-4 text-lg font-semibold">Price Range</h3>
          <div className="mt-2">
            <input type="range" min="100" max="2000" className="w-full" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Service Type</h3>
          <div className="mt-2">
            <label className="block">
              <input type="checkbox" className="mr-2" /> Home Pickup
            </label>
            <label className="block mt-2">
              <input type="checkbox" className="mr-2" /> Drop-off at Store
            </label>
          </div>
        </aside>

        <div className="w-3/4 p-4">
          <h1 className="text-2xl font-semibold">Available Laundry Services</h1>
          <div className="flex mt-6 bg-white shadow-md p-4 rounded-lg">
            <div className="w-1/3">
              <img src="service1.jpg" alt="Service 1" className="rounded-lg" />
            </div>
            <div className="w-2/3 pl-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Wash & Fold</h2>
                <span className="text-sm text-red-500">Popular Service</span>
              </div>
              <p className="text-gray-600">Quick and affordable washing and folding service.</p>
              <div className="flex items-center mt-4">
                <span className="text-xl font-semibold text-gray-800">₹250</span>
                <p className="text-xs text-gray-500 ml-2">per load</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 text-sm bg-white text-gray-800 border border-gray-300 rounded">View Details</button>
                  <button className="px-4 py-2 text-sm bg-green-500 text-white rounded">Book Now</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LaundryOptions;
