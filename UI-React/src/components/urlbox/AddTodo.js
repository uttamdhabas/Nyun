import React from 'react'

import validateInput from '../../validations/url';

import Group from '../common/Group';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: '',
      errors: {},
      isLoading: false,
      urls:[]
    };

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
      this.props.addUrl(this.state).then(
        
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
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
    </div>
  );
}
}
AddTodo.propTypes = {
  addUrl: React.PropTypes.func.isRequired
}
AddTodo.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default AddTodo