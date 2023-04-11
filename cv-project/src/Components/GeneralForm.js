import React, { Component } from 'react';

class GeneralForm extends Component {
    constructor(props){
        super(props);
    }


    render(){
         
        return (
        <div>
          <h2>General Information</h2>
          <label forHTML = "name">Name<input type='text' id='name' name='name'></input></label>
          <label forHTML = "email">Email<input type='email' id='email' name='email'></input></label>
          <label forHTML = "phonenumber">Phone Number<input type='text' id='phonenumber' name='phonenumber'></input></label>
          <label forHTML = "generallocation">Location<input type='text' id='generallocation' name='generallocation'></input></label>
        </div>);
    }
}


export default GeneralForm;