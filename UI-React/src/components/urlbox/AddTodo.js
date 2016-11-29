import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/url/index'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="col-md-10 col-md-offset-1">
    
  
    
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Enter URL..." ref={node => {
          input = node
        }} />
      <span className="input-group-btn">
        <button className="btn btn-default" type="submit">Nyun !!</button>
      </span>
      </div>
        
          
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo