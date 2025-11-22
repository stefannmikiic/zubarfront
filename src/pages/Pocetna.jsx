import React from 'react'
import HeroSekcija from '../components/HeroSekcija'
import OnamaSekcija from '../components/OnamaSekcija'
import Traka from '../components/Traka'
import OurServices from '../components/OurServices'
import WhyChooseUs from '../components/WhyChooseUs'
import CaseStoriesSection from '../components/CaseStoriesSection'
import HowItWorks from '../components/HowItWorks'

const Pocetna = () => {
  return (

    <>
    <HeroSekcija
    naslov = {"Dobrodošli u naš <span>Zubarski Centar</span>"}
    opis = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    dugme1 = {"Zakažite pregled"}
    dugme2 = {"Saznajte više"}
    slika = {"../../images/zubarka.png"}>
    </HeroSekcija>


    <OnamaSekcija></OnamaSekcija>
    <Traka></Traka>
    <OurServices></OurServices>
    <WhyChooseUs></WhyChooseUs>
    <CaseStoriesSection></CaseStoriesSection>
    <HowItWorks></HowItWorks>
    <Traka></Traka>
    </>
  )
}

export default Pocetna