import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date: '',
            time: '',
            guests: 0,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitRes = (event) => {
        event.preventDefault()
        const newRes = {
            id: Date.now(),
            ...this.state
        }
        this.props.addNewRes(newRes)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            name: '',
            date: '',
            time: '',
            guests: 0,
        })
    }
    render() {
        return (
            <section>
                <h1>FORM</h1>
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
                    <input type="text" name="guests" value={this.state.guests} onChange={event => this.handleChange(event)}/>
                </label>
                <button type="submit" value="Submit" onClick={event => this.submitRes(event)}>Make a Reservation</button>
                </form>
            </section>
        )
    }
}

export default Form;