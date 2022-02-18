

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

const postNewRes = (newRes) => {
    return fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRes)
    }).then(response => checkResponse(response)) 
}

const deleteThisRes = (id) => {
    return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method: 'DELETE'
    })
}


export { getAllReservations, postNewRes, deleteThisRes }