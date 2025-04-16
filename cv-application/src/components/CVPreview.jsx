
import React from 'react';
import Header from './Header';

export default function CVPreview({ personalInfo, education, experience, skills }){
  return (
    <div className="cv-preview">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {personalInfo.photo && (
          <img
            src={personalInfo.photo}
            alt="Profile"
            style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
          />
        )}
      </div>
      <Header value = {personalInfo.fullName}/>
      <p>{personalInfo.email} | {personalInfo.phone} | {personalInfo.address}</p>

      <Header value='Education'/>
      {education.map((edu) => (
        <div key={edu.id}>
          <strong>{edu.school}</strong> - {edu.degree} ({edu.dates})
        </div>
      ))}

      <Header value='Experience' />
      {experience.map((exp) => (
        <div key={exp.id}>
          <strong>{exp.company}</strong> - {exp.position} ({exp.dates})
        </div>
      ))}
      
      <Header value='Skills' />
      {skills.map((skl) => (
        <div key={skl.id}>
          <strong>{skl.skillTitle} - {skl.level}</strong>
        </div>
      ))}
    </div>
  );
}