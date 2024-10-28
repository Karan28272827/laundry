import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const CMain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onSubmit function to handle form submission
  const onSubmit = async (data) => {
    const orderInfo = {
      name: data.name,
      address: data.address,
      service: data.service,
      delivery: data.delivery,
      quantity: data.quantity,
      instructions: data.instructions,
    };

    try {
      // Send the order data to the backend
      const res = await axios.post('http://localhost:4001/order/create', orderInfo);
      console.log(res.data);

      if (res.data) {
        toast.success('Order Submitted Successfully');
      }
    } catch (err) {
      if (err.response) {
        toast.error('Error: ' + err.response.data.message);
      } else {
        toast.error('Error: Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Place Your Order</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Input */}
          <div className="form-group">
            <label className="block text-gray-700 text-lg font-medium">Name</label>
            <input
              type="text"
              {...register('name', { required: true })}
              className="customer-signup-form-input"
              placeholder="Enter your name"
            />
            {errors.name && <span className="text-red-500">Name is required</span>}
          </div>

          {/* Address Input */}
          <div className="form-group">
            <label className="block text-gray-700 text-lg font-medium">Address</label>
            <input
              type="text"
              {...register('address', { required: true })}
              className="customer-signup-form-input"
              placeholder="Enter your address"
            />
            {errors.address && <span className="text-red-500">Address is required</span>}
          </div>

          {/* Service Type Dropdown */}
          <div className="form-group">
            <label className="block text-gray-700 text-lg font-medium">Service Type</label>
            <select
              {...register('service', { required: true })}
              className="customer-signup-form-input"
            >
              <option value="Washing">Washing</option>
              <option value="Ironing">Ironing</option>
              <option value="Dry Cleaning">Dry Cleaning</option>
            </select>
            {errors.service && <span className="text-red-500">Service is required</span>}
          </div>

          {/* Delivery Type Dropdown */}
          <div className="form-group">
            <label className="block text-gray-700 text-lg font-medium">Delivery Type</label>
            <select
              {...register('delivery', { required: true })}
              className="customer-signup-form-input"
            >
              <option value="Standard">Standard</option>
              <option value="Express">Express</option>
            </select>
            {errors.delivery && <span className="text-red-500">Delivery type is required</span>}
          </div>

          {/* Quantity Input */}
          <div className="form-group">
            <label className="block text-gray-700 text-lg font-medium">Quantity</label>
            <input
              type="number"
              {...register('quantity', { required: true })}
              className="customer-signup-form-input"
              placeholder="Enter quantity of clothes"
            />
            {errors.quantity && <span className="text-red-500">Quantity is required</span>}
          </div>

          {/* Special Instructions */}
          <div className="form-group">
            <label className="block text-gray-700 text-lg font-medium">Special Instructions</label>
            <textarea
              {...register('instructions')}
              className="customer-signup-form-input"
              placeholder="Any special instructions?"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
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
