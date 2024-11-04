import React from 'react'
import ReqProcess from './ReqProcess'
import { Steps } from '../../utils/data'
import HeroSection from '../JapnesLangCourse/HeroSection'
import TiTraining from './TiTraining'
import TITPFeatures from './TITPFeatures'
import Placements from './Placement'
import TITServices from './TITPServices/TITServices'

const TITp = () => {
  return (
    <div>
      <HeroSection
      backgroundImageUrl='/titp-bg.png'
      title='TITP Program'
      subtitle='MSDC APPROVED TITP SENDING ORGANISATION.'
      btn='Contact Us'
      />
      <TiTraining/>
      <ReqProcess steps={Steps}/>
      <TITPFeatures/>
      <Placements/>
      <TITServices/>
    </div>
  )
}

export default TITp
