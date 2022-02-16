import React from "react";
import './ResCard.css'

const ResCard = ({ name, date, time, number }) => {
    return (
        <section className='cards'>
            <h4>{name}</h4>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of Guests: {number}</p>
        </section>

    )
}


export default ResCard; 