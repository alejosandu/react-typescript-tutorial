import React from 'react'
import TodoList from './TodoList'
import NewTodo from './NewTodo'

const App: React.FC = () => {

  const todos = [{id: "1", text: "finish something"}]

  const todosAddHandler = (text: string) => {
    
  }
  
  return (
    <div className="App">
      <NewTodo onAddTodo={todosAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
