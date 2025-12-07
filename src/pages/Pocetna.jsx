import React from 'react'
import HeroSekcija from '../components/HeroSekcija'
import OnamaSekcija from '../components/OnamaSekcija'
import Traka from '../components/Traka'
import OurServices from '../components/OurServices'
import WhyChooseUs from '../components/WhyChooseUs'
import CaseStoriesSection from '../components/CaseStoriesSection'
import HowItWorks from '../components/HowItWorks'
<<<<<<< HEAD
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'
import NovaForma from '../components/NovaForma'
=======
import ZakazivanjeForma from '../components/ZakazivanjeForma'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'
>>>>>>> 54a3678e0b641ee7c65e9ed7a80138e7a3e158ac
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
    <Traka></Traka>
    <NovaForma></NovaForma>
    <OnamaSekcija></OnamaSekcija>
    <Traka></Traka>
    <OurServices></OurServices>
    <WhyChooseUs></WhyChooseUs>
    <CaseStoriesSection></CaseStoriesSection>
    <HowItWorks></HowItWorks>
    <Traka></Traka>
<<<<<<< HEAD
=======
    <ZakazivanjeForma></ZakazivanjeForma>
    <Traka></Traka>
>>>>>>> 54a3678e0b641ee7c65e9ed7a80138e7a3e158ac
    <FAQ></FAQ>
    <Newsletter></Newsletter>
    </>
  )
}

export default Pocetna