import React from "react";
import './ResCard.css'
import { deleteThisRes } from "./api-calls";

const ResCard = ({ id, name, date, time, number, deleteRes }) => {
    const deleteFromEverywhere = () => {
        deleteThisRes(id)
        // .then(response => response.json())
        .then(deleteRes(id))
        // deleteRes(id)
    }

    return (
        <section className='cards'>
            <h4>{name}</h4>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of Guests: {number}</p>
            <button onClick={() => deleteFromEverywhere()}>Cancel</button>
        </section>

    )
}


export default ResCard; 