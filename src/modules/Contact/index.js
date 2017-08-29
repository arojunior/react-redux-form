const CONTACT_SENT = 'modules/Contact/SENT'

export const contactSent = values => {
  return {
    type: CONTACT_SENT,
    payload: values
  }
}

const initialState = {
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_SENT:
      return {
        ...state,
        data: action.payload
      }

    default:
      return state
  }
}
