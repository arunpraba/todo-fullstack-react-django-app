import React from 'react'
import { useHistory } from 'react-router-dom'

const TodoItem = ({ todo }) => {
  const history = useHistory()

  const viewDetail = () => {
    history.push({
      pathname: `/${todo.id}`,
      state: { todo }
    })
  }

  return (
    <li
      className="cursor-pointer p-4 mt-5 pr-20 border-2 border-gray-600 rounded"
      onClick={viewDetail}
    >
      {todo.title}
    </li>
  )
}

export default TodoItem
