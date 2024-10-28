import express from 'express';
import createOrder from '../controller/order.controller.js'; // Importing the default export

const router = express.Router();

// Route to create an order
router.post("/create", createOrder);

export default router;
