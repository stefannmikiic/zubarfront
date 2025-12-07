import React from 'react'
import HeroOstaleStranice from '../components/HeroOstaleStranice'
import '../components/CSS/Services.css'
import ServiceCard from '../components/ServiceCard'
import Traka from '../components/Traka'
<<<<<<< HEAD
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'
import NovaForma from '../components/NovaForma'
=======
import ZakazivanjeForma from '../components/ZakazivanjeForma'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'
>>>>>>> 54a3678e0b641ee7c65e9ed7a80138e7a3e158ac
const Services = () => {
  return (

    <>
<<<<<<< HEAD
    <HeroOstaleStranice />
=======
    <HeroOstaleStranice naslov="Naše Usluge" />
>>>>>>> 54a3678e0b641ee7c65e9ed7a80138e7a3e158ac
      <section className='services-section'>
        <p className="podnaslov">NASE USLUGE</p>
        <h2 className="title">
          Sirok izbor usluga  <span>za Vaš Najbolji Osmeh</span>
        </h2>
       <div className="cards-container">
        <ServiceCard
          icon="/images/tooth2.png"
          image="/images/dentistry.png"
          title="Opsta Stomatologija"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
          onLearnMore={() => alert('Opsta Stomatologija details')}
        />
        <ServiceCard
          icon="/images/tooth2.png"
          image="/images/dentistry.png"
          title="Oralna Hirurgija"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
          onLearnMore={() => alert('Oralna Hirurgija details')}
        />
        <ServiceCard
          icon="/images/tooth2.png"
          image="/images/dentistry.png"
          title="Ortodoncija"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
          onLearnMore={() => alert('Ortodoncija details')}
        />
        <ServiceCard
          icon="/images/tooth2.png"
          image="/images/dentistry.png"
          title="Opsta Stomatologija"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
          onLearnMore={() => alert('Opsta Stomatologija details')}
        />
        <ServiceCard
          icon="/images/tooth2.png"
          image="/images/dentistry.png"
          title="Oralna Hirurgija"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
          onLearnMore={() => alert('Oralna Hirurgija details')}
        />
        <ServiceCard
          icon="/images/tooth2.png"
          image="/images/dentistry.png"
          title="Ortodoncija"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
          onLearnMore={() => alert('Ortodoncija details')}
        />
      </div>
      </section>
      <Traka></Traka>
<<<<<<< HEAD
      <FAQ></FAQ>
      <Newsletter></Newsletter>
      <Traka></Traka>
      <NovaForma></NovaForma>
      <Traka></Traka>
      
=======
      <ZakazivanjeForma></ZakazivanjeForma>
      <Traka></Traka>
      <FAQ></FAQ>
      
      <Newsletter></Newsletter>
>>>>>>> 54a3678e0b641ee7c65e9ed7a80138e7a3e158ac
    </>
  )
}

export default Services