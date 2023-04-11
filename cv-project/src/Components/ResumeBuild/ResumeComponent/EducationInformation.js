import React, {Component} from 'react';

class EducationInformation extends Component {
  constructor(props){
    super(props);
  }

  render(){
   const {school, location, year, major} = this.props
    return(
      <div>
        <h1 className='School'>{school}</h1>
        <p className='location'>{location}</p>
        <p className='year'>{year}</p>
        <p className='major'>{major}</p>
      </div>
    );
  }
}

export default EducationInformation;