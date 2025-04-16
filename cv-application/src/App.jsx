import {useState } from 'react'
import Header from './components/Header'
import PersonalInfoForm from './components/PersonalInfoForm'
import EducationForm from './components/EducationForm'
import ExperienceForm from './components/ExperienceForm'
import SkillForm from './components/SkillForm'
import CVPreview from './components/CVPreview'
import './styles/App.css'


function App() {
  const [personalInfo, setPersonalInfo] = useState({})
  const [educationInfo, setEducationInfo] = useState([])
  const [experienceInfo, setExperienceInfo] = useState([])
  const [skillsInfo, setSkillsInfo] = useState([])
  
  return (
    <div className='app-container'>
      <Header value='CV Builder'/>
      <div className='form-container'>
        <div className='form-section'>
          <PersonalInfoForm setPersonalInfo={setPersonalInfo}/>
        </div>

        <div className="form-section">
          <EducationForm education={educationInfo} setEducation={setEducationInfo}/>
        </div>

        <div className="form-section">
          <ExperienceForm experience={experienceInfo} setExperience={setExperienceInfo}/>
        </div>

        <div className="form-section">
          <SkillForm skills={skillsInfo} setSkills={setSkillsInfo}/>
        </div>

        <div className="preview-container">
          <CVPreview
            personalInfo={personalInfo}
            education={educationInfo}
            experience={experienceInfo}
            skills={skillsInfo}
            />
        </div>  
      </div>
    </div>)
}

export default App
