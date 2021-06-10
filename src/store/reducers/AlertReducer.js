import { RESET_ALERT, SET_ALERT } from "../action-constants/AlertConstantTypes";

const initialState = {
    text: "",
    color: ""
}
export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALERT: {
            return action.payload
        }
        case RESET_ALERT: {
            return initialState
        }
        default: return state;
    }

}