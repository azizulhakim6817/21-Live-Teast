import { productModel } from "../model/ProductModel.js";

//!Create ProductService................................................
export const creatproductService = async (req) => {
  try {
    let reqBody = req.body;

    let data = await productModel.create(reqBody);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Read ProductService................................................
export const readProductService = async (req, res) => {
  try {
    let productID = req.params.productID;
    let data = await productModel.findOne({ _id: productID });

    if (!data) {
      return res.status(404).json({
        type: "fail",
        message: "Product not found",
      });
    }

    return {
      status: "success",
      message: "Product Read successfully",
      data: data,
    };
  } catch (err) {
    return {
      status: "fail",
      message: "Product Read failed",
      error: err.toString(),
    };
  }
};

//!  update product data ......................................................
export const UpdateProductService = async (req, res) => {
  try {
    let productID = req.params.productID;
    console.log(productID);
    let reqBody = req.body;
    console.log(reqBody);

    let data = await productModel.updateOne(
      { _id: productID },
      { $set: reqBody }
    );

    if (!data) {
      return res.status(404).json({
        type: "fail",
        message: "Product not found",
      });
    }

    return {
      status: "success",
      message: "Product Update successfully",
      data: data,
    };
  } catch (err) {
    return {
      status: "fail",
      message: "Product Update failed",
      error: err.toString(),
    };
  }
};

//! delete product data ......................................................
export const DeleteProductService = async (req, res) => {
  try {
    let productID = req.params.productID;
    let data = await productModel.deleteOne({ _id: productID });

    if (!data) {
      return res.status(404).json({
        type: "fail",
        message: "Product not found",
      });
    }

    return {
      status: "success",
      message: "Product remove successfully",
      data: data,
    };
  } catch (err) {
    return {
      status: "fail",
      message: "Product remove failed",
      error: err.toString(),
    };
  }
};
