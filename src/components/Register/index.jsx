import React from 'react'
import Main from './Main'
import HeroSection from '../JapnesLangCourse/HeroSection'

const Register = () => {
  return (
    <div>
      <HeroSection
      backgroundImageUrl='/japan.jpg'
      title='Register'
      subtitle='Register for Japanese Language Course'
      />
      <Main/>
    </div>
  )
}

export default Register
