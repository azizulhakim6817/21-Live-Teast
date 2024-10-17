import {
  creatproductService,
  DeleteProductService,
  readProductService,
  UpdateProductService,
} from "../service/ProductService.js";

export const creatProduct = async (req, res) => {
  let result = await creatproductService(req, res);
  return res.json(result);
};

export const readProduct = async (req, res) => {
  let result = await readProductService(req, res);
  return res.json(result);
};

export const UpdateProduct = async (req, res) => {
  let result = await UpdateProductService(req, res);
  return res.json(result);
};

export const DeleteProduct = async (req, res) => {
  let result = await DeleteProductService(req, res);
  return res.json(result);
};
