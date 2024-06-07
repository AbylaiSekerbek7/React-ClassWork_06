import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getAllPosts = createAsyncThunk('post/getAllPosts', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        throw error;
    }
});