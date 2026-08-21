import express from 'express';
import { authenticateSeller } from '../middlewares/auth.middleware.js';
import { createProduct, getSellerProducts } from '../controllers/product.controller.js';
import { createProductValidator } from '../validator/product.validator.js';
import multer from 'multer'
const upload = multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize: 5*1024*1024 // 5mb
    }
})

const router = express.Router();

/**
 * @route POST /api/products
 * @description Create a new product
 * @acess Private(seller only)
 */


router.post("/", authenticateSeller,createProductValidator,upload.array('images',7),createProduct);

/**
 * @route GET /api/products/seller
 * @description get all products
 * @access Private
 */

router.get("/seller",authenticateSeller,getSellerProducts)


export default router;