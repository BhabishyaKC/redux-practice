'use client'
import { changeColor, incrementHeight, incrementWidth, incrementMarginLeft, changeBorderRadius } from '@/redux/reducerSlices/boxSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
  const dispatch = useDispatch()
  const { backgroundColor, width, height,marginLeft, borderRadius } = useSelector((state) => state.box)

  return (
    <div className="flex justify-center items-center h-[100lvh] bg-gradient-to-r from-gray-100 to-white">
  <div className="p-6 rounded-2xl shadow-xl bg-white border border-gray-200 space-y-4 w-full max-w-md">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">Customize Box</h2>

    <div className="flex flex-wrap justify-center gap-5">
      <button
        onClick={() => dispatch(incrementHeight())}
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        + Increase Height
      </button>

      <button
        onClick={() => dispatch(incrementWidth())}
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        + Increase Width
      </button>

      <input
        type="text"
        onChange={(e) => dispatch(changeColor(e.target.value))}
        placeholder="Change Color"
        className="px-3 py-2 bg-gray-100 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />

      <button
        onClick={() => dispatch(incrementMarginLeft())}
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Change Margin
      </button>

      <button
        onClick={() => dispatch(changeBorderRadius())}
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Change Radius
      </button>
    </div>

    <div
      className="transition-all duration-500 mx-auto"
      style={{
        backgroundColor,
        width,
        height,
        marginLeft,
        borderRadius,
      }}
    />
  </div>
</div>

    
  )
}
export default Box
