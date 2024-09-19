import express from 'express';

import  { getClothes } from '../controller/clothes.controller.js';

const router = express.Router();

router.get("/getClothes", getClothes);

export default router;