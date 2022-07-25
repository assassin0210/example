import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfilePhotos = createAsyncThunk(
  "getProfilePhotos",
  async () => {
    return await axios.get<any>("https://jsonplaceholder.typicode.com/photos");
  }
);
