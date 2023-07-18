import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("TodoItems");
    if(!localValue) return [];
    return JSON.parse(localValue)
  });

// useEffect Hook
  useEffect(()=>{
    localStorage.setItem("TodoItems", JSON.stringify(todos))
  },[todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }
  

const toggleTodo = (id, completed) => {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      
      return todo
    })
  })

}

const deleteTodo = (id) => {
  const newList = todos.filter(todo => todo.id !== id)
  setTodos(newList)
}

return (
  <>
    <TodoForm addTodo={addTodo} todos={todos}/>
    <h1 className='header'>Todo List</h1>
    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>

  </>
);
}
export default App;
