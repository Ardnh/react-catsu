import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getRandomCats = createAsyncThunk(
    'cats/getRandomCats',
    async () => {
        const res = await axios.get("images/search", { params: { limit: 12 } })
        return res.data
    }
)


const homeSlice = createSlice({
    name: "home", 
    initialState: {
        catsLists: [],
        catDetails: {}
    },
    reducers: {
        goTheCatsApi: () => {
            window.open("https://thecatapi.com/")
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getRandomCats.fulfilled, (state, action) => {
            state.catsLists = [...action.payload]
        })
    }
})


export const { goTheCatsApi } = homeSlice.actions
export default homeSlice.reducer