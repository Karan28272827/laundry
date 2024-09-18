import express from 'express';

import  { getorder1 } from '../controller/order.controller.js';

const router = express.Router();

router.get("/getorder1", getorder1);
export default router;