import React from 'react'
import Profile from './Profile'
import OurTeam from './OurTeam'
import HeroSection from '../JapnesLangCourse/HeroSection'


const Team = () => {
  return (
    <div>
      <HeroSection
      backgroundImageUrl='/our-team-bg.png'
      title='Our Team'
      />
      <Profile/>
      <OurTeam/>
      
    </div>
  )
}

export default Team
