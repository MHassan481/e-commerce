import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllOrders = createAsyncThunk(
  "adminOrders/fetchAllProducts",
  async (_,{rejectWithValue}) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/admin/orders`,
           {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
        )
        return response.data;
    } catch (error) {
       return rejectWithValue(error.response.data)
    }
  }
);


export const updateOrderStatus = createAsyncThunk(
  "adminOrders/updateOrderStatus",
  async ({id,status},{rejectWithValue}) => {
    try { 
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_URL}/api/admin/orders/${id}`,
            {status},
           {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
        )
        return response.data;
    } catch (error) {
       return rejectWithValue(error.response.data)
    }
  }
);



export const deleteOrder = createAsyncThunk(
  "adminOrders/deleteingOrder",
  async (id,{rejectWithValue}) => {
    try {
        await axios.delete(
            `${process.env.REACT_APP_BACKEND_URL}/api/admin/orders/${id}`,
           {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
        )
        return id;
    } catch (error) {
       return rejectWithValue(error.response.data)
    }
  }
);