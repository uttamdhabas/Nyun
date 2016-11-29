import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/url/index'
import { addUrl } from '../../actions/url/index';
import Group from '../common/Group';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addUrl(this.state);
  }
  render() {
    const { target, errors, isLoading } = this.state;
  return (
    <div className="col-md-10 col-md-offset-1">
    
  
    
      <form onSubmit={this.onSubmit}>
     

        <Group
          field="target"
          label=""
          name="target"
          value={target}
          onChange={this.onChange}
          error={errors.target}
        />
       

      
      
        
          
      </form>
    </div>
  );
}
}
AddTodo.propTypes = {
  addUrl: React.PropTypes.func.isRequired
}

export default connect(null, { addUrl })(AddTodo);