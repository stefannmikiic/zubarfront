import React from 'react';
import '../components/CSS/NovaForma.css';

const NovaForma = () => {
  
  return (
    <section className="novaforma-kontejner">
      <div className="novaforma-levoo">
        <p className="novaforma-podnaslov">ZAKAŽITE TERMIN</p>
        <h2 className="novaforma-naslov">
          <span>Jednostavno online zakazivanje</span> za Vaš stomatološki pregled
        </h2>
        <form className="novaforma-grid">
          <div className="novaforma-input-par">
            <label>Vaše ime *</label>
            <input type="text" placeholder="Npr. Nikola Jovanović" required />
          </div>
          <div className="novaforma-input-par">
            <label>Broj telefona *</label>
            <input type="tel" placeholder="Unesite broj telefona" required />
          </div>
          <div className="novaforma-input-par">
            <label>Vrsta termina *</label>
            <select required>
              <option value="">Izaberite</option>
              <option value="cleaning">Ciscenje</option>
              <option value="checkup">Pregled</option>
              <option value="surgery">Hirurgija</option>
            </select>
          </div>
          <div className="novaforma-input-par">
            <label>Željeni stomatolog *</label>
            <select required>
              <option>Dr. Ivan Marković</option>
              <option>Dr. Sara Mitrović</option>
            </select>
          </div>
          <div className="novaforma-input-par">
            <label>Željeni datum*</label>
            <input type="date" defaultValue="2024-11-25" required />
          </div>
          <div className="novaforma-input-par">
            <label>Željeno vreme*</label>
            <input type="time" defaultValue="10:00" required />
          </div>
          <div className="novaforma-input-par textarea">
            <label>Specijalni zahtevi ili napomene *</label>
            <textarea placeholder="Unesite ovde.." required />
          </div>
          <div className="novaforma-dugme">
            <button type="submit">Zakažite Termin</button>
          </div>
        </form>
      </div>
      <div className="novaforma-informacije-desno">
        <p className="novaforma-opis-klinike">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>

        <div className="novaforma-radno-vreme">
          <h4 className='novaforma-naslovBeli'>Radno Vreme</h4>
          <ul>
            <li  className='novaforma-naslovBeli'><p>Ponedeljak - Petak</p><p>09:00 - 22:00</p></li>
            <li  className='novaforma-naslovBeli'><p>Subota</p><p>11:00 - 20:00</p></li>
            <li  className='novaforma-naslovBeli'><p>Nedelja</p><p>Zatvoreno</p></li>
          </ul>
        </div>

        <div className="novaforma-hitne-info">
          <p className="novaforma-prioritet">Tvoj osmeh, naš prioritet</p>
          <h3>24/7 Za Hitne Slučajeve</h3>
          <p className="novaforma-telefon">(000) 000-0000</p>
        </div>
      </div>
    </section>
  );
};

export default NovaForma;