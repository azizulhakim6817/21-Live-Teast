import express from "express";
const router = express.Router();
import * as ProductController from "../app/controllers/ProductController.js";

router.post("/creatProduct", ProductController.creatProduct);
router.get("/readProduct/:productID", ProductController.readProduct);
router.post("/UpdateProduct/:productID", ProductController.UpdateProduct);
router.delete("/DeleteProduct/:productID", ProductController.DeleteProduct);

export default router;
