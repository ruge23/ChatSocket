import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const mapDispatchProps = dispatch => ({
    dispatch : (message, author) => {
        dispatch(addMessage(message, author))
    }
})

export const AddMessage = connect(() => ({}), mapDispatchProps)(AddMessageComponent)
