'use client'
import { changeColor, incrementHeight, incrementWidth, incrementMarginLeft, changeBorderRadius } from '@/redux/reducerSlices/boxSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
  const dispatch = useDispatch()
  const { backgroundColor, width, height,marginLeft, borderRadius } = useSelector((state) => state.box)

  return (
    <div className="flex justify-center items-center h-[100lvh] bg-gradient-to-br from-indigo-100 via-white to-blue-100">
  <div className="p-6 rounded-2xl shadow-2xl bg-white border border-gray-200 space-y-6 w-full max-w-md">
    <h2 className="text-2xl font-bold text-indigo-700 text-center">🎨 Box Styler</h2>

    <div className="flex flex-wrap justify-center gap-3">
      <button
        onClick={() => dispatch(incrementHeight())}
        className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
      >
        + Increase Height
      </button>

      <button
        onClick={() => dispatch(incrementWidth())}
        className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
      >
        + Increase Width
      </button>

      <input
        type="text"
        onChange={(e) => dispatch(changeColor(e.target.value))}
        placeholder="change color"
        className="px-3 py-2 w-full text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <button
        onClick={() => dispatch(incrementMarginLeft())}
        className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
      >
        Change Margin
      </button>

      <button
        onClick={() => dispatch(changeBorderRadius())}
        className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
      >
        Change Radius
      </button>
    </div>

    <div
      className="transition-all duration-500 mx-auto border border-gray-300"
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
