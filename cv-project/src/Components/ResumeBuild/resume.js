import {Component} from 'react'
import EducationInformation from './ResumeComponent/EducationInformation'
import GeneralInformation from './ResumeComponent/GeneralInformation'
import WorkExperience from './ResumeComponent/WorkExperience'


class Resume extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {general, education, work} = this.props
    return(
    <div>
      <GeneralInformation name={general.name} location={general.location} phonenumber={general.phonenumber} emailaddress={general.emailaddress}/>
      <EducationInformation school={education.schoolname} location={education.location} year={education.year} major={education.major}/>
      <WorkExperience company={work.company} role={work.role} location={work.location} tenure={work.tenure}/>
    </div>  
    );
  }
}

export default Resume;