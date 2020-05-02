import React from 'react'
import { Link, useLocation, Redirect } from 'react-router-dom'

const TodoDetail = () => {
  const {
    state: { todo }
  } = useLocation()
  console.log(todo)

  if (!todo) {
    return <Redirect to="/" />
  }

  return (
    <main className="m-auto max-w-md w-full overflow-y-scroll">
      <h1 className="font-serif uppercase text-2xl block font-bold py-6 text-gray-800 tracking-widest text-center">
        Detail Page
      </h1>
      <div className="max-w rounded border bg-white shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{todo.title}</div>
          <p className="text-gray-700 text-base">{todo.body}</p>
        </div>
        <div className="px-6 py-3">
          <Link
            className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2"
            to="/"
          >
            Back
          </Link>
        </div>
      </div>
    </main>
  )
}

export default TodoDetail
