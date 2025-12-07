import React from 'react'
import './CSS/HeroSekcija.css'


const HeroSekcija = ({naslov, opis ,slika,dugme1,dugme2}) => {
  return (
    <section className="hero">
      <div className="hero-grid">
      <div className="hero-kolona1">
        <h1 className='hero-naslov' dangerouslySetInnerHTML={{__html:naslov}}></h1>
        <p>{opis}</p>
        <button>{dugme1}</button>
        <button className='hero-dugme-link'>{dugme2}</button>
      </div>
       <div className="hero-kolona2">
        <img className='hero-slika' src={slika} alt="" />
       </div>
       
    </div>
    
    </section>
    
  )
}

export default HeroSekcija