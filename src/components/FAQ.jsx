import React, { useState } from 'react';
import '../components/CSS/FAQ.css';  
import { IoLogoWechat } from 'react-icons/io5';

const faqData = [
  {
    question: "Kakve usluge nudite?",
    answer: "Nudimo opštu stomatologiju, kozmetičke procedure, ortodonciju i hitnu stomatološku negu.",
  },
  {
    question: "Da li je potrebno zakazati pregled?",
    answer: "Da, preporučujemo zakazivanje pregleda kako bismo osigurali pravovremenu uslugu i dostupnost.",
  },
  {
    question: "Da li prihvatate pacijente bez zakazivanja?",
    answer: "Prihvatamo pacijente bez zakazivanja u zavisnosti od dostupnosti, ali prioritet imaju zakazani termini.",
  },
  {
    question: "Da li mogu zakazati hitni stomatološki pregled?",
    answer: "Naravno. Pružamo hitnu negu 24/7. Pozovite nas u bilo koje vreme za hitne stomatološke probleme.",
  },
  {
    question: "Da li nudite online konsultacije?",
    answer: "Da, nudimo virtuelne konsultacije za inicijalne procene i praćenje stanja.",
  },
  {
    question: "Koliko košta stomatološka konsultacija?",
    answer: "Početne konsultacije počinju od 50$. Kontaktirajte nas za detaljan pregled na osnovu usluga.",
  },
];

const FAQ = ({boja}) => {
  const [activeIndex, setActiveIndex] = useState(null); // 1 otvoreno po defaultu

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
   <section className={`faq-container ${boja ? boja : ''}`}>
      <div className="faq-left">
        <p className="podnaslov">FAQS</p>
        <h2 className="title">
          <span>Zubarski centar FAQ:</span> Odgovori na Česta Pitanja
        </h2>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggleAnswer(index)}
            >
              <div className="faq-question">
                <span>{item.question}</span>
                <span className="toggle-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="faq-right">
        <div className="contact-box">
          <div className="icon-placeholder"><IoLogoWechat /></div>
          <h4  className='naslovBeli'>Imate neka druga pitanja?</h4>
          <p  className='naslovBeli'>Naš tim će odgovoriti na sva vaša pitanja. Osiguravamo brz odgovor.</p>
          <button>Kontaktirajte nas</button>
        </div>

        <div className="emergency-box">
          <p>Tvoj osmeh, nas prioritet</p>
          <h3>24/7 Za Hitne slucajeve</h3>
          <p>(000) 000-0000</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;