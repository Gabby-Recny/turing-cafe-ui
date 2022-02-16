// import React  from "react";

const getAllReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
     .then(response => checkResponse(response))
}

const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error (`Error`)
    } else {
        return response.json()
    }
}

export { getAllReservations }