import express from 'express';
import  { signup } from '../controller/customer.controller.js';

const router = express.Router();

// router.post("/getcustomer1", getcustomer1);
router.post("/signup", signup);
export default router;