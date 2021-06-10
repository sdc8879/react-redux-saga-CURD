import { RESET_ALERT, SET_ALERT } from "../action-constants/AlertConstantTypes"

/**
 * 
 * @param {text,color} message 
 * @returns 
 */
export const setAlertAction = (message) => {
    return {
        type: SET_ALERT,
        payload: message
    }
}
export const resetAlertAction = () => {
    return {
        type: RESET_ALERT,

    }
}