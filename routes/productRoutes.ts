import express from 'express';
import * as productController from '../controllers/productController'

const router = express.Router();

router.all('/test', (req:any, res:any) => {
    productController.test(req.body).then(resultFromController => res.send(resultFromController))
})
productController.test