import React from 'react';
import './CSS/CaseStoriesSection.css';
import { LuArrowUpRight } from 'react-icons/lu';

export default function CaseStoriesSection() {
  return (
    <section className="case-section">
      <div className="case-header">
        <div>
          <p className="case-subtitle">NAŠE PRIČE PACIJENATA</p>
          <h2 className="case-title">
            <span className="light-text">Avanture do</span><br />
            <span>Zdravijih, Srećnijih Osmeha</span>
          </h2>
        </div>
        <button className="case-btn">Istrazi sve price</button>
      </div>

      <div className="case-cards">
        
        <div className="case-card">
          <img src="../../images/dentistry.png" alt="Case 1" className="case-img" />
          <div className="case-info">
            <h3>Za sjajnije sutra: <br />Sarino putovanje izbeljivanja</h3>
            <div className="case-tags">
              <span>2024</span>
              <span>Izbeljivanje zuba</span>
              <span>Stomatološka nega</span>
            </div>
          </div>
          <div className="case-icon"><LuArrowUpRight /></div>
        </div>

        <div className="case-card">
          <img src="../../images/dentistry.png" alt="Case 2" className="case-img" />
          <div className="case-info">
            <h3>Prelepa transformacija: <br />Olivijino putovanje sa protezom</h3>
            <div className="case-tags">
              <span>2024</span>
              <span>Tretman proteza</span>
              <span>Stomatološka nega</span>
            </div>
          </div>
          <div className="case-icon"><LuArrowUpRight /></div>
        </div>
      </div>
    </section>
  );
}