import express from 'express';

import  { getcustomer1 } from '../controller/customer.controller.js';

const router = express.Router();

router.post("/getcustomer1", getcustomer1);
export default router;