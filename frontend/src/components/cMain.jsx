import React, { useState } from 'react';

const CMain = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    address: '',
    serviceType: 'Washing',
    deliveryType: 'Standard',
    quantity: '',
    instructions: '',
  });

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Submitted:', orderDetails);
    // Add your logic here to process the order, maybe an API call to store it in a database
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Place Your Order</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={orderDetails.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Address Input */}
          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={orderDetails.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Service Type Dropdown */}
          <div>
            <label className="block text-gray-700">Service Type</label>
            <select
              name="serviceType"
              value={orderDetails.serviceType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value="Washing">Washing</option>
              <option value="Ironing">Ironing</option>
              <option value="Dry Cleaning">Dry Cleaning</option>
            </select>
          </div>

          {/* Delivery Type Dropdown */}
          <div>
            <label className="block text-gray-700">Delivery Type</label>
            <select
              name="deliveryType"
              value={orderDetails.deliveryType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value="Standard">Standard</option>
              <option value="Express">Express</option>
            </select>
          </div>

          {/* Quantity Input */}
          <div>
            <label className="block text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={orderDetails.quantity}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter quantity of clothes"
              required
            />
          </div>

          {/* Special Instructions */}
          <div>
            <label className="block text-gray-700">Special Instructions</label>
            <textarea
              name="instructions"
              value={orderDetails.instructions}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Any special instructions?"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CMain;

