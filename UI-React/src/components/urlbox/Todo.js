import React, { PropTypes } from 'react'
import { Table } from 'semantic-ui-react'
import QRCode from 'qrcode.react'
const Todo = ({ onClick, completed, text,hits,showComponent }) => (
 


  <Table.Row>
          <Table.HeaderCell><a href={text.target} 
    >{text.target}</a></Table.HeaderCell>
          <Table.HeaderCell><a href={text.shortUrl}>{text.shortUrl}</a></Table.HeaderCell>
          
          <Table.HeaderCell>{text.hits}</Table.HeaderCell>
         
          <Table.HeaderCell><QRCode value={text.shortUrl} size={250}/></Table.HeaderCell>

  </Table.Row>
  
  
  
  




 
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo