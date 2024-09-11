import express from 'express';

import  { getcustomer1 } from '../controller/customer.controller.js';

const router = express.Router();

router.get("/", getcustomer1);

export default router;