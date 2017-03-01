This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# react-redux-form

Just a simple example how to use controlled components with redux-form.
I had a lot of headache till find this solution. I hope it help you all.
It's very easy and better than handle components manually

# modules/index.js
```javascript
/*
* Redux
*/
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
/*
* Reducers
*/
import Contact from './Contact'
const combineReducer = combineReducers({
    form : formReducer,
    Contact
})

/*
* Store
*/
export const store = createStore(combineReducer, {}, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
```
It´s just redux basic configuration...

# components/Form.js

```javascript
const Form = (props) => {
      const { handleSubmit, pristine, reset, submitting } = props
      return (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
             <Field
                 name="name"
                 component="input"
                 type="text"
                 placeholder="Name"
                 className="form-control" />
          </div>
          <div className="form-group">
            <label>E-mail</label>
             <Field
                 name="email"
                 component="input"
                 type="email"
                 placeholder="E-mail"
                 className="form-control" />
          </div>
          <div className="form-group">
            <label>Message</label>
              <Field
                  name="message"
                  component="textarea"
                  className="form-control" />
          </div>
          <div className="form-group">
            <button
                type="submit"
                className="btn btn-primary"
                disabled={pristine || submitting}>Send
            </button>
            <button
                type="button"
                className="btn btn-default"
                disabled={pristine || submitting}
                onClick={reset}>Reset
            </button>
          </div>
        </form>
      )
}

// Connect Form component and Form reducer
export default reduxForm({
  form: 'contactForm'
})(Form)
```

# Container
```javascript
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
```

That's it!

[Redux-form documentation](http://redux-form.com/)

[Artigo em português](https://medium.com/@arojunior/componentes-controlados-com-react-e-redux-form-e58df1581b62)
