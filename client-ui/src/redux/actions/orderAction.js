import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserOrder = createAsyncThunk(
  "orders/fetchUserOrder",
  async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}api/my-orders`,
        {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            }
        }
    )
    return response.data;
    } catch (error) {
        console.error(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const fetchOrderDetail = createAsyncThunk(
  "orders/fetchOrderDetail",
  async (orderId, { rejectWithValue }) => {
    try {
        const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}api/orders/${orderId}`,
        {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            }
        }
    )
    return response.data;
    } catch (error) {
        console.error(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);