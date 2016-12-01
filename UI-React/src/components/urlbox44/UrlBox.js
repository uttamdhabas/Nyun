import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import UrlList from './UrlList'
import { addUrl } from '../../actions/url/index';
import { connect } from 'react-redux';
import VisibleTodoList from './VisibleTodoList'
import QRCode from 'qrcode.react'
import { Table } from 'semantic-ui-react'
import Group from '../common/Group';
import validateInput from '../../validations/url';
import axios from 'axios';


class UrlBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: '',
      errors:{},
      isLoading:false

      
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }


   onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      axios.post('/api/v1/url', {target:this.state.target}).then(res => {
          
    });
  }
}

        
        
      
    
  

  render() {
      const { target, errors, isLoading } = this.state;
    return (

      <div className="col-md-10 col-md-offset-1">
    
  
    
      <form onSubmit={this.onSubmit}>
     

        
        <Group
          error={errors.target}
          label=""
          onChange={this.onChange}
          
          value={this.state.target}
          field="target"
        />
       
        
      
      
        
          
      </form>
      <UrlList/>
    </div>
    );
  }
}

export default UrlBox;