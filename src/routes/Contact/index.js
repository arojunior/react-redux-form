import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <h2>Contact</h2>
                </div>
                <Form onSubmit={this.handleSubmit} />
                <div></div>
            </div>
        )
    }
}

export default Contact
