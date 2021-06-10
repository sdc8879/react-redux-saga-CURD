import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'
import { RESET_ALERT } from '../../../store/action-constants/AlertConstantTypes';
import { resetAlertAction } from '../../../store/actions/AlertAction';

const GlobalAlert = (props) => {
    console.log(props);

    const { text, color } = props.alert

    setTimeout(() => {
        props.dispatch(resetAlertAction({
            type: RESET_ALERT
        }))
    }, 1000);
    return (
        <Alert color={color}>{text}</Alert>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        alert: state.alert
    }
}
export default connect(mapStateToProps)(GlobalAlert)
