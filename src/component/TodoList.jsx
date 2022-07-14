import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({todos ,onRemove}) => {
  return (
    <div className='todolist'>

        {
 todos.map((todo)=>(
     <TodoListItem todo={todo} onRemove={onRemove} key={todo.id}/>
 ))            

        } 
        
       
    </div>
  )
}
export default TodoList