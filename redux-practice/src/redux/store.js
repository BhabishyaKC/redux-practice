import { configureStore } from '@reduxjs/toolkit'
import  boxSlice  from './reducerSlices/boxSlice'

export default configureStore({
  reducer: {
    box: boxSlice,
  }
})