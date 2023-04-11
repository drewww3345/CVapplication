import React, { Component } from 'react';

class PraticalForm extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
        <div>
          <h2>Pratical Experience</h2>
          <label forHTML = "companyname">Company Name<input type='text' id='companyname' name='companyname'></input></label>
          <label forHTML = "position">Position<input type='text' id='position' name='position'></input></label>
          <label forHTML = "worklocation">Location<input type='text' id='worklocation' name='worklocation'></input></label>
          <label forHTML = "tenure">Tenure<input type='text' id='tenure' name='tenure'></input></label>
        </div>);
    }
}


export default PraticalForm;