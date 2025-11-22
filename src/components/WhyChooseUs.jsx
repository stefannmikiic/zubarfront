import React from 'react';
import './CSS/WhyChooseUs.css';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';

export default function WhyChooseUsSection() {
  return (
    <section className="why-section">
      <div className="why-header">
        <p className="podnaslov">ZAŠTO IZABRATI NAS</p>
        <h2 className="title">
          Prednosti naših stomatoloških usluga: <br />
          <span>Tvoj put ka zdravijem osmehu</span>
        </h2>
      </div>

      <div className="why-content">
        <div className="why-left">
          <div className="video-thumbnail" onClick={() => window.open('https://www.youtube.com/watch?v=VIDEO_ID', '_blank')}>
            <img src="../../images/dentistry.png" alt="Why choose us" />
            <div className="overlay-circles"></div>
            <div className="play-button">
              <div className="circle"></div>
              <FaPlay className="triangle"></FaPlay> 
              
            </div>
            {/* <img src="../../images/stars.png" className="stars" alt="stars" />
            <img src="../../images/dots.png" className="dots-top-right" alt="dots" /> */}
          </div>
        </div>

        <div className="why-right">
          <p className="why-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>

          <div className="stats">
            <div>
              <h3>10+</h3>
              <p>Iskusnih doktora</p>
            </div>
            <div>
              <h3>99%</h3>
              <p>Zadovoljstvo pacijenata</p>
            </div>
            <div>
              <h3>20K+</h3>
              <p>Zakazanih pregleda</p>
            </div>
          </div>

          <ul className="why-list">
            <li><FaCheckCircle /> Lako online zakazivanje pregleda</li>
            <li><FaCheckCircle /> Iskusni i pažljivi stomatolozi</li>
            <li><FaCheckCircle /> Napredna stomatološka oprema</li>
          </ul>

          <button className="why-btn">Zakažite pregled</button>
        </div>
      </div>
    </section>
  );
}