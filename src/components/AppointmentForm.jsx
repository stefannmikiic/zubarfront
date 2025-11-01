import './CSS/AppointmentForm.css';
import  React from 'react';
import {FaUser, FaPhone, FaCalendarAlt, FaClock} from "react-icons/fa";
export const AppointmentForm = () => {
    return (
        <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="name">Ime</label>
                <div className="input-wrapper">
                    <FaUser className="icon" />
                <input name = 'name' type="text" id="name" placeholder="Unesite vaše ime" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <div className="input-wrapper">
                    <FaPhone className="icon" />
                <input name = 'phone' type="tel" id="phone" placeholder="Unesite vaš broj telefona" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="date">Datum</label>
                <div className="input-wrapper">
                    <FaCalendarAlt className="icon" />
                <input name = 'date' type="date" id="date" />
                </div>
            </div>

             <div className="form-group">
                <label htmlFor="time">Vreme</label>
                <div className="input-wrapper">
                    <FaClock className="icon" />
                <input name = 'time' type="time" id="time" />
                </div>
            </div>
            <div className='submit-dugme'>
                <button type="submit">Zakaži Termin</button>
            </div>
           

            </form>
    );
}