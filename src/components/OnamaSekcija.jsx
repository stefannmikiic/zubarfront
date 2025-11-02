import React from 'react'
import '../components/CSS/OnamaSekcija.css'
import { FaCheckCircle } from "react-icons/fa";
const OnamaSekcija = () => {
  return (
    <section className='onama-sekcija'>
      <div className="slika-onama">
        <img src="../../images/aboutus-slika.png" alt="Doktor" />
      </div>
      <div className="tekst-onama">
        <h2>O nama</h2>
        <h1><span>Naša priča</span> koja traje <span>15</span> godina</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <ul className='lista-aboutus'>
          <li><FaCheckCircle className="check-icon" /> Osnovali smo firmu 2008. godine</li>
          <li><FaCheckCircle className="check-icon" /> Imamo tim stručnjaka sa dugogodišnjim iskustvom</li>
          <li><FaCheckCircle className="check-icon" /> Naši klijenti su zadovoljni našim uslugama</li>
        </ul>
        <button>Saznajte više</button>
      </div>
    </section>
  )
}

export default OnamaSekcija