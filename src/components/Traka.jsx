import React from "react";
import "../components/CSS/Traka.css";
import {FaTooth} from 'react-icons/fa';


const Traka = () => {

    const services = [
        'Opšta stomatologija',
        'Estetska stomatologija',
        'Ortodoncija',
        'Oralna hirurgija',
        'Parodontologija',
        'Endodoncija'
    ];


    return (
        <div className="scrolling-bar">
            <div className="scrolling-track">
                {[...services, ...services].map((service, index) => (
                    <div className="scrolling-item" key={index}>
                        <FaTooth className="tooth-icon" />
                        <h2>{service}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Traka;
