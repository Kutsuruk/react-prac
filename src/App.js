import React from 'react';
import TodoList from './Todo/TodoList'


const todos = [
  {id: 1, completed: false, title: 'Buy PS5'},
  {id: 2, completed: true, title: 'Buy BMW 328'},
  {id: 3, completed: true, title: 'Walk with dog'}
]

function App() {
  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
