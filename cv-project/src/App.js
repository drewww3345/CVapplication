import './App.css';
import EducationalForm from './Components/EducationalForm';
import GeneralForm from './Components/GeneralForm'
import { Component } from 'react';
import PraticalForm from './Components/PraticalExperienceForm';
import Resume from './Components/ResumeBuild/resume'

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      work: {},
      education: {},
      general: {}
    };

  }

  handleClick(event) {
    event.preventDefault();
    const data = new FormData(document.querySelector('form'));
    let work = {};
    let general = {};
    let education = {};

    work.company = data.get('companyname');
    work.role = data.get('position');
    work.location = data.get('worklocation');
    work.tenure = data.get('tenure');

    general.name = data.get('name');
    general.location = data.get('generallocation');
    general.emailaddress = data.get('email');
    general.phonenumber = data.get('phonenumber');

    education.schoolname = data.get('schoolname');
    education.major = data.get('major');
    education.location = data.get('schoollocation');
    education.year = data.get('educationyear');

    this.setState(
      {
        work: work,
        education: education,
        general: general
      });
  }

  render() {

    return (
      <div>
        <form>
          <GeneralForm />
          <EducationalForm />
          <PraticalForm />
          <button type='button' onClick={this.handleClick}>Submit</button>
        </form>
        <Resume general={this.state.general} education={this.state.education} work={this.state.work} />
      </div>
    );
  }
}

export default App;
