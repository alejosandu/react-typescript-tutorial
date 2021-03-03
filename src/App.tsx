import React, { useState } from 'react'
import TodoList from './TodoList'
import NewTodo from './NewTodo'
import { Todo } from './Todo.model'

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([])
  
  const todosAddHandler = (text: string) => {
    setTodos((todos) => [...todos, { id: Math.random().toString(), text }])
  }
  
  return (
    <div className="App">
      <NewTodo onAddTodo={todosAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
