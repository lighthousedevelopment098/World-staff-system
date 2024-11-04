import React from 'react'
// import Sailent from './Sailent'
import Guide from './Guide'
import HeroSection from '../JapnesLangCourse/HeroSection'
// import background from '../../assets/About/flag-japan-pakistan.webp'
const Features = () => {
  return (
    <div>
      <HeroSection
      backgroundImageUrl='/flag-japan-pakistan.webp'
      title='Our Sailent Features
'
      />
      {/* <Sailent/> */}
      {/* <Consultancy/> */}
      <Guide/>
    </div>
  )
}

export default Features
