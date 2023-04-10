import './App.css';
import EducationalForm from './Components/EducationalForm';
import GeneralForm from './Components/GeneralForm'
import { Component } from 'react';
import PraticalForm from './Components/PraticalExperienceForm';

class App extends Component {
  constructor(props){
    super(props);

  }

  render(){
  
  return (
      <div>
        <GeneralForm />
        <EducationalForm />
        <PraticalForm />
      </div>
  );
  }
}

export default App;
