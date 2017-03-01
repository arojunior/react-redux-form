import React, {Component} from 'react'
import Form from './../components/Form'
import {reset} from 'redux-form'
import {connect} from 'react-redux'
import {contactSent} from './../index'

import 'bootstrap/dist/css/bootstrap.css'

class Contact extends Component {

    handleSubmit = (values, dispatch) => {
        dispatch(contactSent(values))
        dispatch(reset('contactForm'))
    }

    render() {
        const {data} = this.props

        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="row text-center">
                        <h2>Contact</h2>
                    </div>
                    <Form onSubmit={this.handleSubmit}/>
                    <div>Form data: {data
                        ? JSON.stringify(data)
                        : null
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => state.Contact)(Contact)
