import React from 'react'

const TodoForm = () => {
  return (
    <div id="js-user-input" className="flex-col items-center justify-between">
      <input
        placeholder="Add Title..."
        type="text"
        className="p-4 pr-20 border-2 border-gray-600 rounded bg-grey-400 text-gray-900 w-full outline-none"
      />
      <textarea
        placeholder="Add Description..."
        type="text"
        rows="6"
        className="p-4 mt-5 pr-20 border-2 border-gray-600 rounded bg-grey-400 text-gray-900 w-full outline-none"
      ></textarea>
      <button className="transition ease-in duration-200 text-gray-900 border-2 border-gray-600 rounded w-full mt-5 hover:bg-gray-700 hover:text-gray-100 bg-white font-semibold py-2 px-4 right-0 mr-2 focus:outline-none">
        Add
      </button>
    </div>
  )
}

export default TodoForm
