import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Table } from 'semantic-ui-react'
import QRCode from 'qrcode.react'
import axios from 'axios'
import {fetchURL} from '../../actions/url/index';
class UserPage extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    urls:[]
	  };
}
	
	componentDidMount(){
        var th=this;
        axios.get('/user/1').then(function(response) {
          return response.json();
        }).then(function(data) {
          th.setState({urls:data.urls});
        }).catch(function() {
          console.log("Booo");
        });
}
	  
	

	  render() {
		      

		      return (

		      	<Table celled fixed singleLine>
				      <Table.Header>
				        <Table.Row>
				          <Table.HeaderCell>Orignal URL</Table.HeaderCell>
				          <Table.HeaderCell>Short URL</Table.HeaderCell>
				          <Table.HeaderCell>Hits</Table.HeaderCell>
				          
				          <Table.HeaderCell>QRCode</Table.HeaderCell>

				        </Table.Row>
				      </Table.Header>
				        <Table.Body>
				        
				        {this.state.urls.map(function(url) {
          return (
            <Table.Row>
		          <Table.HeaderCell>
		          		<a href={url.target}>{url.target}</a>
		    		</Table.HeaderCell>
		          <Table.HeaderCell><a href={url.shortUrl}>{url.shortUrl}</a></Table.HeaderCell>
		          
		          <Table.HeaderCell>{url.hits}</Table.HeaderCell>
		         
		          <Table.HeaderCell><QRCode value={url.shortUrl} size={250}/></Table.HeaderCell>

 			 </Table.Row>
          );
        })}
				        </Table.Body>
				        </Table>
				      )
		    }
}


    

export default UserPage