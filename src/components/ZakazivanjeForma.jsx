import React from 'react';
import '../components/CSS/ZakazivanjeForma.css';

const ZakazivanjeForma = () => {
  
  return (
    <section className="zakazivanje-container">
      <div className="forma-levo">
        <p className="podnaslov">ZAKAŽITE TERMIN</p>
        <h2 className="naslov">
          <span>Jednostavno online zakazivanje</span> za Vaš stomatološki pregled
        </h2>
        <form className="forma-grid">
          <div className="input-par">
            <label>Vaše ime *</label>
            <input type="text" placeholder="Npr. Nikola Jovanović" required />
          </div>
          <div className="input-par">
            <label>Broj telefona *</label>
            <input type="tel" placeholder="Unesite broj telefona" required />
          </div>
          <div className="input-par">
            <label>Vrsta termina *</label>
            <select required>
              <option value="">Izaberite</option>
              <option value="cleaning">Ciscenje</option>
              <option value="checkup">Pregled</option>
              <option value="surgery">Hirurgija</option>
            </select>
          </div>
          <div className="input-par">
            <label>Željeni stomatolog *</label>
            <select required>
              <option>Dr. Ivan Marković</option>
              <option>Dr. Sara Mitrović</option>
            </select>
          </div>
          <div className="input-par">
            <label>Željeni datum*</label>
            <input type="date" defaultValue="2024-11-25" required />
          </div>
          <div className="input-par">
            <label>Željeno vreme*</label>
            <input type="time" defaultValue="10:00" required />
          </div>
          <div className="input-par textarea">
            <label>Specijalni zahtevi ili napomene *</label>
            <textarea placeholder="Unesite ovde.." required />
          </div>
          <div className="dugme">
            <button type="submit">Zakažite Termin</button>
          </div>
        </form>
      </div>
      <div className="informacije-desno">
        <p className="opis-klinike">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>

        <div className="radno-vreme">
          <h4 className='naslovBeli'>Radno Vreme</h4>
          <ul>
            <li  className='naslovBeli'><p>Ponedeljak - Petak</p><p>09:00 - 22:00</p></li>
            <li  className='naslovBeli'><p>Subota</p><p>11:00 - 20:00</p></li>
            <li  className='naslovBeli'><p>Nedelja</p><p>Zatvoreno</p></li>
          </ul>
        </div>

        <div className="hitne-info">
          <p className="prioritet">Tvoj osmeh, naš prioritet</p>
          <h3>24/7 Za Hitne Slučajeve</h3>
          <p className="telefon">(000) 000-0000</p>
        </div>
      </div>
    </section>
  );
};

export default ZakazivanjeForma;