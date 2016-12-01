import React from 'react';
import classnames from 'classnames';

const Group = ({ field, value, label, error, type, onChange, checkUserExists }) => {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label className="control-label">{label}</label>
      <div className="input-group">
      <input
        onChange={onChange}
        onBlur={checkUserExists}
        value={value}
        type={type}
        name={field}
        className="form-control"
      />
       <span className="input-group-btn">
        <button className="btn btn-primary" type="submit">Go!</button>
      </span>
      </div>
    {error && <span className="help-block">{error}</span>}
    
      
    </div>  );
}

Group.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  
}

Group.defaultProps = {
  type: 'text'
}

export default Group;
