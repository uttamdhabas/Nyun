import React, { PropTypes } from 'react'
import { Table } from 'semantic-ui-react'
const Todo = ({ onClick, completed, text,hits }) => (
 
 
  <Table.Row>
          <Table.HeaderCell>{text.target}</Table.HeaderCell>
          <Table.HeaderCell>{text.shortUrl}</Table.HeaderCell>
          
          <Table.HeaderCell>{text.hits}</Table.HeaderCell>
          <Table.HeaderCell>{text.createdAt}</Table.HeaderCell>

  </Table.Row>
  
  



 
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo