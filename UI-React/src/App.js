import React, { Component } from 'react'
import { Container,Input} from 'semantic-ui-react'
import MainMenu from './components/MainMenu';
import userMenu from './components/userMenu';

export default class App extends Component {

	  
	  render() {
		      

		      return (
				        <Container>
				        <MainMenu/>
				        {this.props.children} 
				        </Container>
				      )
		    }
}
