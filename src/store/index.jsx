import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./features/homeSlice"
import catsReducer from './features/catsSlice'

const store = configureStore({
  reducer: {
    home: homeReducer,
    cats: catsReducer
  },
})

export default store