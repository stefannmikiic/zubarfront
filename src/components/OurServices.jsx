 
import React from 'react';
import ServiceCard from './ServiceCard';
import './CSS/OurServices.css';

export default function OurServices() {
  return (
    <section className="services-section">
       <p className="podnaslov">NASE USLUGE</p>
      <h2 className="title">
        Sirok izbor usluga <br /> <span>za Vaš Najbolji Osmeh</span>
      </h2>
      <button className="explore-btn">Pregledajte Sve Usluge</button>

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
      </div>
    </section>
  );
}