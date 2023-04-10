import React, { Component } from 'react';

class EducationalForm extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
        <div>
          <h2>General Information</h2>
          <label forHTML = "schoolname">School Name<input type='text' id='schoolname' name='schoolname'></input></label>
          <label forHTML = "major">Title of Study<input type='text' id='major' name='major'></input></label>
          <label forHTML = "phonenumber">Phone Number<input type='text' id='phonenumber' name='phonenumber'></input></label>
        </div>);
    }
}


export default EducationalForm;