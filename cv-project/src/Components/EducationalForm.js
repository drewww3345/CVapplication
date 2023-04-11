import React, { Component } from 'react';

class EducationalForm extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
        <div>
          <h2>Educational Information</h2>
          <label forHTML = "schoolname">School Name<input type='text' id='schoolname' name='schoolname'></input></label>
          <label forHTML = "major">Title of Study<input type='text' id='major' name='major'></input></label>
          <label forHTML = "schoollocation">Location<input type='text' id='schoollocation' name='schoollocation'></input></label>
          <label forHTML = "educationyear">Year<input type='text' id='educationyear' name='educationyear'></input></label>
        </div>);
    }
}


export default EducationalForm;