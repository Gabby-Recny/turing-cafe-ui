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

  deleteRes = (id) => {
    const filteredRes = this.state.reservations.filter(res => {
      return res.id !== id
    })
    this.setState({reservations: filteredRes})
  }

  
  render() {
    return (
        <section>
          <h1 className='app-title'>Turing Cafe Reservations</h1>
            <Form addNewRes={this.addNewRes}/>
            <Reservations reservations={this.state.reservations} deleteRes={this.deleteRes}/>
        </section>
    )
  }
}

export default App;
