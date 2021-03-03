import React from 'react'
import TodoList from './TodoList'

const App: React.FC = () => {

  const todos = [{id: "1", text: "finish something"}]

  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
}

export default App;
