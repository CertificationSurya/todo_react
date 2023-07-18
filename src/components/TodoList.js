import TodoItem from "./TodoItem";

const TodoList = ({todos,toggleTodo,deleteTodo}) => {
    
    return ( 
    <ul className='list' >
      {!todos.length && <p>No Todo list Found</p>}

      {
        todos.map(todo => {
          return (
            // basically {...todo} below sends all data as props after destructing
            <TodoItem {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id}/>
          )})
      }
    </ul>
     );
}
 
export default TodoList;