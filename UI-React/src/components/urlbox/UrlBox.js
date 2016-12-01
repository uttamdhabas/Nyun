import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import { addUrl } from '../../actions/url/index';
import { connect } from 'react-redux';
import VisibleTodoList from './VisibleTodoList'
import QRCode from 'qrcode.react'
import { Table } from 'semantic-ui-react'

class UrlBox extends React.Component {
  render() {
    const { addUrl } = this.props;
    return (
  	
  	<div>

    <AddTodo addUrl={addUrl}/>

    <Table celled fixed singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Orignal URL</Table.HeaderCell>
          <Table.HeaderCell>Short URL</Table.HeaderCell>
          <Table.HeaderCell>Hits</Table.HeaderCell>
          <Table.HeaderCell>Created At</Table.HeaderCell>

        </Table.Row>
      </Table.Header>
    <VisibleTodoList />
    </Table>
   
    <Footer />
    </div>
    
  
);
}
}
UrlBox.propTypes = {
  addUrl: React.PropTypes.func.isRequired,
  
}

export default connect(null, { addUrl })(UrlBox);