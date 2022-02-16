import React from "react";

const ResCard = ({ name, date, time, number }) => {
    return (
        <section>
            <h2 style={{color: 'orange'}}>YO</h2>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of Guests: {number}</p>
        </section>

    )
}


export default ResCard; 