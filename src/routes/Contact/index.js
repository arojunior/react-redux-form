import React, { Component } from 'react'
import Form from './components/Form'
import { reset } from 'redux-form'
import 'bootstrap/dist/css/bootstrap.css'

class Contact extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            formData : null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(values, dispatch) {
        this.setState({ formData : values })

        dispatch(reset('contactForm'))
    }

    render() {
        const { formData } = this.state

        return (
            <div className="container">
                <div className="row text-center">
                    <h2>Contact</h2>
                </div>
                <Form onSubmit={this.handleSubmit} />
                <div>Form data: { JSON.stringify(formData) }</div>
            </div>
        )
    }
}

export default Contact
