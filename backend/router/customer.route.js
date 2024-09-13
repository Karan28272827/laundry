import express from 'express';

import  { getcustomer1,login } from '../controller/customer.controller.js';

const router = express.Router();

router.post("/getcustomer1", getcustomer1);
router.post("/login",login)
export default router;