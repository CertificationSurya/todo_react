const TodoItem = ({id, title, completed, deleteTodo, toggleTodo}) => {
    return ( 
        <li key={id}>
            <label>
            <input type="checkbox" checked={completed} name="checkbox" id="checkbox" onChange={e => toggleTodo(id, e.target.checked)} />
            {title}
            </label>
            {completed && <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>}
        </li>
     );
}
 
export default TodoItem;