import ToDoListItem from "./itemList";

function TodoList({ todos }) {
    return (
      <ul className="TodoList">
        {todos.map((todo) => (
          <ToDoListItem
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    );
  }

  export default TodoList