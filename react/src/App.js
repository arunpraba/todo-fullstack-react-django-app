import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Todos from './components/Todos'
import TodoDetail from './components/TodoDetail'

const App = () => {
  return (
    <div className="h-screen p-8 sm:p-16 bg-gray-200 overflow-y-scroll">
      <Switch>
        <Route path="/" exact component={Todos} />
        <Route path="/:id" exact component={TodoDetail} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
