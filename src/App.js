import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './Todo/AddTodo'
import PropTypes from 'prop-types';




function App() {

  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Buy PS5'},
    {id: 2, completed: true, title: 'Buy BMW 328'},
    {id: 3, completed: false, title: 'Walk with dog'}
  ])


  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  )
  }


function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}

function AddTodos(title) {
  setTodos(todos.concat([
    {
      title,
      id: Date.now(),
      completed: false
    }
  ]))
}



  return (
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
        <h1>React to-do list tutorial</h1>
        <AddTodo onCreate={AddTodos} />
        {todos.length ? (
        <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
        <h3>No to-do</h3>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
