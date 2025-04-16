import React from 'react'
import Header from './Header';
import {v4 as uuidv4} from 'uuid'

const EducationForm = ({education, setEducation}) => {
  const handleChange = (id, e) =>{
    const updated = education.map(entry =>
      entry.id === id ? {...entry, [e.target.name]: e.target.value } : entry
    )
    setEducation(updated)
  }

  const addEntry = () => setEducation([...education, {id: uuidv4(), school: '', degree: '', dates: ''}])
  const removeEntry = (id) => setEducation(education.filter(entry => entry.id !== id))

  return (
    <div>
      <Header value='Education'/>
      {education.map((entry)=>(
        <div key={entry.id}>
          <input name='school' value={entry.school} onChange={(e)=> handleChange(entry.id, e)} placeholder='School...'/>
          <input name='degree' value={entry.degree} onChange={(e)=> handleChange(entry.id, e)} placeholder='Degree...'/>
          <input name='dates' value={entry.dates} onChange={(e)=> handleChange(entry.id, e)} placeholder='Dates...'/>
          <button onClick={()=>removeEntry(entry.id)}>Remove</button>
        </div>
      ))}
      <button onClick={addEntry}>Add education</button>
    </div>
  )
}
export default EducationForm;
