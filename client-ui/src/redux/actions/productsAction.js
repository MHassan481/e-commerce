import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsByFilters = createAsyncThunk(
  "products/fetchByFilters",
  async ({
    collection,
    size,
    color,
    gender,
    minPrice,
    maxPrice,
    sortBy,
    search,
    category,
    material,
    brand,
    limit,
  }) => {
    const query = new URLSearchParams();
    if (collection) query.append("collection", collection);
    if (size) query.append("size", size);
    if (color) query.append("color", color);
    if (gender) query.append("gender", gender);
    if (minPrice) query.append("minPrice", minPrice);
    if (maxPrice) query.append("maxPrice", maxPrice);
    if (sortBy) query.append("sortBy", sortBy);
    if (search) query.append("search", search);
    if (category) query.append("category", category);
    if (material) query.append("material", material);
    if (brand) query.append("brand", brand);
    if (limit) query.append("limit", limit);

    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/products?${query.toString()}`
    );
    return response.data;
  }
);

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`
    );
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, productData }) => {
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}api/products/${id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    return response.data;
  }
);


export const fetchSimilarProducts = createAsyncThunk(
  "products/fetchSimilarProducts",
  async ({id}) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}api/products/similar/${id}`
    );
    return response.data;
  }
);