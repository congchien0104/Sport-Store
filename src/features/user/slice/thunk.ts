import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProductAsync,
  payloadGetAllProduct,
} from "../../../apis/product/getallproduct.api";

export const getAllProductAsyncc = createAsyncThunk(
  "Product/getAllProduct",
  async (payload: payloadGetAllProduct): Promise<any> => {
    const response = await getAllProductAsync(payload);
    return response.data;
  }
);
