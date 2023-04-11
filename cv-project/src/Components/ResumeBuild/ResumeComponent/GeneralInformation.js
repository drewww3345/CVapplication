import React, {Component} from 'react';

class GeneralInformation extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {name, location, phonenumber, emailaddress} = this.props
    return(
      <div>
        <h1 className='name'>{name}</h1>
        <p className='location'>{location}</p>
        <p className='phone number'>{phonenumber}</p>
        <p className='emailaddress'>{emailaddress}</p>
      </div>
    );
  }
}

export default GeneralInformation; 