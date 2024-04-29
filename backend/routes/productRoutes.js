//import products from '../data/products.js';
import express from 'express';

import Product from '../models/productModel.js';
import {
  getProducts,
  getProductById,
  createProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//const express = require('express');
const router = express.Router();



router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);

export default router;


