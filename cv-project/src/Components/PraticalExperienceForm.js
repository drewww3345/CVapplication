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
          <label forHTML = "position">Email<input type='text' id='position' name='position'></input></label>
          <label forHTML = "task">Task<input type='text' id='task' name='task'></input></label>
        </div>);
    }
}


export default PraticalForm;