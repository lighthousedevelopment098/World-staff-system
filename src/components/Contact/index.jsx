import React from 'react'
import ContactComp from './ContactComp'
import HeroSection from '../JapnesLangCourse/HeroSection'

const  Contact= () => {
  return (
    <div>
      <HeroSection
      backgroundImageUrl='/contactimgbg.jpg'
      title='Contact US'
      subtitle='Feel Free to Contact Us'/>
      <ContactComp/>
    </div>
  )
}

export default Contact
