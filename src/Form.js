import React from "react";
import { postNewRes } from './api-calls'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date: '',
            time: '',
            number: 0,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitRes = (event) => {
        event.preventDefault()
        const newlyCreatedRes = {
            id: Date.now(),
            ...this.state
        }
        postNewRes(newlyCreatedRes)
        .then(res => this.props.addNewRes(res))
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            name: '',
            date: '',
            time: '',
            number: 0,
        })
    }


    render() {
        return (
            <section className='form'>
                <form>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)}/>
                </label>
                <label>
                    Date:
                    <input type="text" name="date" value={this.state.date} onChange={event => this.handleChange(event)}/>
                </label>
                <label>
                    Time:
                    <input type="text" name="time" value={this.state.time} onChange={event => this.handleChange(event)}/>
                </label>
                <label>
                    Number of Guests:
                    <input type="number" name="number" value={this.state.number} onChange={event => this.handleChange(event)}/>
                </label>
                <button type="submit" value="Submit" onClick={event => this.submitRes(event)}>Make a Reservation</button>
                </form>
            </section>
        )
    }
}

export default Form;