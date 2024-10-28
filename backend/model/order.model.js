// models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: false }, // Optional for general orders
  products: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  address: { type: String, required: true }, // Required for general orders
  service: { type: String, required: true }, // Service type, required for all orders
  delivery: { type: String, required: true }, // Delivery type, required for all orders
  instructions: { type: String, required: false }, // Optional instructions
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Order', orderSchema);


