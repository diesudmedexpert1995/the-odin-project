import React from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from './Header'


const SkillForm = ({skills, setSkills}) => {
  const handleChange = (id, e) =>{
    const updated = skills.map(entry =>
      entry.id === id ? {...entry, [e.target.name]: e.target.value } : entry
    )
    setSkills(updated)
  }

  const addEntry = () => setSkills([...skills, {id: uuidv4(), skillTitle: '', level: ''}])
  const removeEntry = (id) => setSkills(skills.filter(entry => entry.id !== id))

  return (
    <div>
      <Header value='Skills'/>
      {skills.map((entry)=>(
        <div key={entry.id}>
          <input name='skillTitle' value={entry.skillTitle} onChange={(e)=> handleChange(entry.id, e)} placeholder='Skill...'/>
          <input name='level' value={entry.level} onChange={(e)=> handleChange(entry.id, e)} placeholder='Level...'/>
          <button onClick={removeEntry(entry.id)}>Remove </button>
        </div>
      ))}
      <button onClick={addEntry}>Add skill</button>
    </div>
  )
}
export default SkillForm;