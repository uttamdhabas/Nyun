import React from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios';



class UrlList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      urls:[]



      
    }

    this.onChange = this.onChange.bind(this);
    
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }


  
  componentDidMount() {
    axios.get('/user/3').then(data => {
      this.setState( { urls: data.urls } );
      console.log(this.urls)
    });
  }

        
        
      
    
  

  render() {
      const { urls } = this.state;
    return (
      <Table celled fixed singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Orignal URL</Table.HeaderCell>
          <Table.HeaderCell>Short URL</Table.HeaderCell>
          <Table.HeaderCell>Hits</Table.HeaderCell>
          <Table.HeaderCell>Created At</Table.HeaderCell>

        </Table.Row>
      </Table.Header>
      <Table.Body>
      {console.log(urls)}
      {urls.map(function(song) {
           return (
             console.log(song.user)
           );
          })}
    
  
      
  </Table.Body>
  </Table>
    );
  }
}

export default UrlList;