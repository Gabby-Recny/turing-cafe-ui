import React from "react";
import ResCard from './ResCard'
import './Reservations.css'

const Reservations = ({ reservations }) => {
    const resCards = reservations.map(res => {
        return <ResCard 
                date={res.date}
                id={res.id}
                key={res.id}
                name={res.name}
                number={res.number}
                time={res.time}
                />
        })
    return (
        <section className='res-container'>
            <h1 style={{color:'white'}}>Hi</h1>   
            {resCards}
        </section>
    )
}


export default Reservations;