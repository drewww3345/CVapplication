import React, {Component} from 'react';

class WorkExperience extends Component {
  constructor(props){
    super(props);
  }

  render(){
     const {company, role, location, tenure} = this.props;
    return(
      <div>
        <h1 className='company'>{company}</h1>
        <p className='role'>{role}</p>
        <p className='location'>{location}</p>
        <p className='tenure'>{tenure}</p>
      </div>
    );
  }
}

export default WorkExperience;