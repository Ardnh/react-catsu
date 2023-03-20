import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const getCategories = createAsyncThunk(
    'cats/getCategories',
    async () => {
        const res = await axios.get("/categories")
        return res.data
    }
)

export const getCatsByCategory = createAsyncThunk(
    'cats/getCatsByCategory',
    async (id) => {
        const res = await axios.get("images/search", { params: { limit: 15, category_ids: id  } })
        return res.data
    }
)

export const downloadCatImage = createAsyncThunk(
    'cats/downloadImage',
    async (url) => {
        const image = await fetch(url)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
      
        const link = document.createElement('a')
        link.href = imageURL
        link.download = 'image file name here'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
)

const catsSlice = createSlice({
    name: "cats",
    initialState: {
        categories: [],
        catsLists: [],
    },
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = [{ id:"", name:"All" }, ...action.payload]
        })

        builder.addCase(getCatsByCategory.fulfilled, (state,action) => {
            state.catsLists = [...action.payload]
        })
    }
})

export default catsSlice.reducer