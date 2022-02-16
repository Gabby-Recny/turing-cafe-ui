import React, { Component } from 'react';
import './App.css';
import { getAllReservations } from '../api-calls'
import Reservations from '../Reservations';
import Form from '../Form';


class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
    }
  }
  componentDidMount() {
    getAllReservations()
    .then(data => {
      this.setState({reservations: data})
    })
  }

  addNewRes = (newRes) => {
    this.setState({
      reservations: [...this.state.reservations, newRes]
    })
  }

  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
          <Form addNewRes={this.addNewRes}/>
          <div className='resy-container'>
            <Reservations reservations={this.state.reservations}/>
          </div>
      </div>
    )
  }
}

export default App;
