import React from 'react'
import { v4 as uuidv4 } from "uuid";
import Header from './Header';

const ExperienceForm = ({experience, setExperience}) => {
  const handleChange = (id, e) =>{
    const updated = experience.map(entry =>
      entry.id === id ? {...entry, [e.target.name]: e.target.value } : entry
    )
    setExperience(updated)
  }

  const addEntry = () => setExperience([...experience, {id: uuidv4(), company: '', position: '', dates: ''}])
  const removeEntry = (id) => setExperience(experience.filter(entry => entry.id !== id))

  return (
    <div>
      <Header value='Experience'/>
      {experience.map((entry)=>(
        <div key={entry.id}>
          <input name='company' value={entry.company} onChange={(e)=> handleChange(entry.id, e)} placeholder='Company...'/>
          <input name='position' value={entry.position} onChange={(e)=> handleChange(entry.id, e)} placeholder='Position...'/>
          <input name='dates' value={entry.dates} onChange={(e)=> handleChange(entry.id, e)} placeholder='Dates...'/>
          <button onClick={removeEntry(entry.id)}>Remove </button>
        </div>
      ))}
      <button onClick={addEntry}>Add education</button>
    </div>
  )
}
export default ExperienceForm;