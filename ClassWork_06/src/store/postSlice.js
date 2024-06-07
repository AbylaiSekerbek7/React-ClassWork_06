import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../actions/post.action";

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        status: "idle",
        error: null,
    },
    reducer: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllPosts.pending, (state) => {
            state.status = "Loading...";
        })
        .addCase(getAllPosts.fulfilled, (state, action) => {
            state.status = "Successful";
            state.posts = action.payload;
        })
        .addCase(getAllPosts.rejected, (state, action) => {
            state.status = "Error";
            state.error = action.error.message;
        });
    },
});

export const postReducer = postSlice.reducer;