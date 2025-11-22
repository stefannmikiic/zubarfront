import React from 'react';
import './CSS/HowItWorksSection.css';
import { FaCalendarAlt, FaUsers, FaBriefcase, FaClipboardCheck } from 'react-icons/fa';

const steps = [
  {
    icon: <FaCalendarAlt />,
    number: '01',
    title: 'Zakažite Pregled',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    icon: <FaUsers />,
    number: '02',
    title: 'Konsultacija i Pregled',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    icon: <FaBriefcase />,
    number: '03',
    title: 'Personalizovani Plan Lečenja',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    icon: <FaClipboardCheck />,
    number: '04',
    title: 'Kontinuirana Nega i Praćenje',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="how-section">
      <p className="podnaslov">KAKO FUNKCIONIŠE</p>
      <h2 className="title">Put do <span>Vašeg Savršenog Osmeha</span></h2>
      <div className="how-steps">
        {steps.map((step, index) => (
          <div className="how-step" key={index}>
            <div className="how-icon-wrapper">
              <div className="how-icon-circle">
                {step.icon}
                <div className="how-number">{step.number}</div>
              </div>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {index < steps.length - 1 && <div className="step-line" />}
          </div>
        ))}
      </div>
    </section>
  );
}