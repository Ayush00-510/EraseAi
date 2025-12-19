import React from 'react'
import { Header } from '../components/Header'
import { Steps } from '../components/Steps'
import { BgSlider } from '../components/BgSlider'
import { Testinomials } from '../components/Testinomials'
import { Upload } from '../components/Upload'

export const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <BgSlider/>
      <Testinomials />
      <Upload />
    </div>
  )
}
