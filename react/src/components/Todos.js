import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:8000/api/?format=json'
        )
        setTodos(data)
        setError(null)
      } catch (error) {
        setError(error.message)
        setTodos([])
      }
    }

    getTodos()
  }, [])

  if (error) {
    return <h1>Something went wrong</h1>
  }

  return (
    <main className="m-auto max-w-md w-full overflow-y-scroll">
      <h1 className="font-serif uppercase text-2xl block font-bold py-6 text-gray-800 tracking-widest text-center">
        React Django Todo
      </h1>
      <TodoForm />
      <div className="p-1 my-5  bg-gray-400" />
      <ul className="m-0 my-4 p-0 list-none w-full">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  )
}

export default Todos
