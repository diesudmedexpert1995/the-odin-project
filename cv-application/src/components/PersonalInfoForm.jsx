import React from 'react'
import Header from './Header'

const PersonalInfoForm = ({ setPersonalInfo }) => {
  const handleChange = (e) =>{
    const {name, value} = e.target
    setPersonalInfo(prev=> ({...prev, [name]:value}))
  }

  const handleImageUpload = (e) =>{
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPersonalInfo((prev) =>({ ...prev, photo: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <Header value='Personal Information'/>
      <input name='fullName' placeholder='Enter your name' onChange={handleChange}/>
      <input name='email' placeholder='Enter your email' onChange={handleChange}/>
      <input name='phone' placeholder='Enter your phone' onChange={handleChange}/>
      <input name='address' placeholder='Enter your address' onChange={handleChange}/>
      <input type="file" accept='image/*' onChange={handleImageUpload}/>
    </div>
  )
}
export default PersonalInfoForm