import React, { PropTypes } from 'react'
import Todo from './Todo'
import { Table } from 'semantic-ui-react'
const TodoList = ({ todos, onTodoClick }) => (
  
 
   <Table.Body>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </Table.Body>
  
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList