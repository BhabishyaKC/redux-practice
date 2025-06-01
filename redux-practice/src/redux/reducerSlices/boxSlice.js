import { createSlice } from '@reduxjs/toolkit'

export const boxSlice = createSlice({
  name: 'box',
  initialState: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: 100,
    height: 100,
    marginLeft:20,
    borderRadius: 0
  },
  reducers: {
    incrementHeight: state => {
      state.height = state.height + 10
    },
    incrementWidth: state => {
      state.width = state.width + 10
    },
    changeColor: (state, action) => {
      state.backgroundColor = 'black'
    },
    incrementMarginLeft: state => {
      state.marginLeft = state.marginLeft + 10
    },
      changeBorderRadius: state => {
      state.borderRadius = 100
  } }
})


export const { incrementHeight, incrementWidth, changeColor, incrementMarginLeft, changeBorderRadius } = boxSlice.actions

export default boxSlice.reducer
