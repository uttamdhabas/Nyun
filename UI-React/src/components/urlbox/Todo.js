import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
 
  <li  className="list-group-item" >
    {text}
  </li>
  



 
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo